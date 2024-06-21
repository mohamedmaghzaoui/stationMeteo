#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <RTClib.h>  
#include <ArduinoJson.h>
#include <WiFiManager.h>
#include <TimeLib.h>
#include <HTTPClient.h>

Adafruit_BME280 bme;  // Create an instance of the BME280 sensor
RTC_DS3231 rtc; 
const int MQ135_ANALOG_PIN = A0;  // Analog pin for MQ135

void setup() {
  // Set up Serial to print data 
  Serial.begin(9600);

  // Set up BME280 sensor
  Wire.begin();
  if (!bme.begin(0x76)) { 
    Serial.println("Could not find a valid BME280 sensor, check wiring!");
    while (1);
  }

  // Set up DS3231 RTC
  if (!rtc.begin()) {
    Serial.println("Couldn't find RTC");
    while (1);
  }


  // Try to connect to WiFi or configure if not connected
  WiFiManager wifiManager;
  if (!wifiManager.autoConnect("ESP32-MQ135-BME280")) {
    Serial.println("Failed to connect to WiFi and entered configuration mode.");
  } else {
    Serial.println("Connected to WiFi!");
  }


}

void loop() {
  // Read BME280 sensor values
  float altitude = bme.readAltitude(1020);
  float temperatureBME = bme.readTemperature();
  float humidity = bme.readHumidity();
  float pressure = bme.readPressure() / 100.0;

  // Read MQ135 sensor value
  int mq135AnalogReading = analogRead(MQ135_ANALOG_PIN);

  // Read DS3231 RTC time and temperature
  DateTime now = rtc.now();
  float temperatureDS = rtc.getTemperature();

  // Calculate average temperature
  float averageTemperature = (temperatureBME + temperatureDS) / 2.0;

  // Get MAC address
  String macAddress = WiFi.macAddress();

  // Print BME280 sensor values
  Serial.print("Temperature (BME280): ");
  Serial.print(temperatureBME);
  Serial.println(" °C");

  Serial.print("Pressure: ");
  Serial.print(pressure);
  Serial.println(" hPa");

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("Altitude: ");
  Serial.print(altitude);
  Serial.println(" meters");

  // Print MQ135 sensor value
  Serial.print("MQ135 Analog Reading: ");
  Serial.println(mq135AnalogReading);

  // Print DS3231 RTC time and temperature
  Serial.print("DS3231 Time: ");
  printDateTime(now);
  Serial.print("DS3231 Temperature: ");
  Serial.print(temperatureDS);
  Serial.println(" °C");

  // Print average temperature
  Serial.print("Average Temperature: ");
  Serial.print(averageTemperature);
  Serial.println(" °C");

  // Print MAC address
  Serial.print("MAC Address: ");
  Serial.println(macAddress);

  // JSON data
  DynamicJsonDocument doc(200);

  doc["pressure"] = pressure;
  doc["humidity"] = humidity;
  doc["altitude"] = altitude;
  doc["airQuality"] = mq135AnalogReading;
  doc["time"] = printDateTimeJSON(now);
  doc["temperature"] = averageTemperature;
  doc["macAddress"] = macAddress;

  String jsonString;
  serializeJson(doc, jsonString);
  Serial.println("Sensor Data:");
  Serial.println(jsonString);

  // Make HTTP POST request
  HTTPClient http;
  const char *serverUrl = "http://192.168.1.41:8000/sensor";
  http.begin(serverUrl);
  http.addHeader("Content-Type", "application/json");
  int httpResponseCode = http.POST(jsonString);

  if (httpResponseCode > 0) {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    String response = http.getString();
    Serial.println("Response: " + response);
  } else {
    Serial.print("Error in HTTP request: ");
    Serial.println(httpResponseCode);
  }

  http.end();

  delay(20000);
}
//change time format

void printDateTime(DateTime dt) {
  Serial.print(dt.year(), DEC);
  Serial.print('-');
  Serial.print(dt.month(), DEC);
  Serial.print('-');
  Serial.print(dt.day(), DEC);
  Serial.print(' ');
  Serial.print(dt.hour(), DEC);
  Serial.print(':');
  Serial.print(dt.minute(), DEC);
  Serial.print(':');
  Serial.print(dt.second(), DEC);
  Serial.println();
}

String printDateTimeJSON(DateTime dt) {
  char buffer[30];
  sprintf(buffer, "%04d-%02d-%02dT%02d:%02d:%02dZ", dt.year(), dt.month(), dt.day(), dt.hour(), dt.minute(), dt.second());
  return String(buffer);
}
