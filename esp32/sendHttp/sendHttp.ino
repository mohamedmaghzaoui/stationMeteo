#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <ArduinoJson.h>
#include <WiFiManager.h>
#include <HTTPClient.h>

// Create an instance of the BME280 sensor
Adafruit_BME280 bme;

const int MQ135_ANALOG_PIN = A0; // Analog pin for MQ135

void setup()
{
  // Set up Serial to print data
  Serial.begin(9600);

  // Set up BME280 sensor
  Wire.begin();
  if (!bme.begin(0x76))
  {
    Serial.println("Could not find a valid BME280 sensor, check wiring!");
    while (1)
      ;
  }

  // Try to connect to WiFi or configure if not connected
  WiFiManager wifiManager;
  if (!wifiManager.autoConnect("ESP32-MQ135-BME280"))
  {
    Serial.println("Failed to connect to WiFi and entered configuration mode.");
  }
  else
  {
    Serial.println("Connected to WiFi!");
  }
}

void loop()
{
  // Read BME280 sensor values
  float altitude = bme.readAltitude(1020);
  float temperatureBME = bme.readTemperature();
  float humidity = bme.readHumidity();
  float pressure = bme.readPressure() / 100.0;

  // Read MQ135 sensor value (example)
  int mq135AnalogReading = analogRead(MQ135_ANALOG_PIN) * 100 / 4095;

  // Calculate average temperature (using only BME280 temperature)
  float averageTemperature = temperatureBME;

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

  // Print MQ135 sensor value (example)
  Serial.print("MQ135 Analog Reading: ");
  Serial.println(mq135AnalogReading);

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
  doc["temperature"] = averageTemperature;
  doc["macAddress"] = macAddress;""
  doc["name"] = "station_1";

  String jsonString;
  serializeJson(doc, jsonString);
  Serial.println("Sensor Data:");
  Serial.println(jsonString);

  // Make HTTP POST request
  HTTPClient http;
  const char *serverUrl = "http://10.1.5.140:8000/sensor";
  http.begin(serverUrl);
  http.addHeader("Content-Type", "application/json");
  int httpResponseCode = http.POST(jsonString);

  if (httpResponseCode > 0)
  {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    String response = http.getString();
    Serial.println("Response: " + response);
  }
  else
  {
    Serial.print("Error in HTTP request: ");
    Serial.println(httpResponseCode);
  }

  http.end();

  delay(60000); // Delay for 20 seconds before sending next request
}
