#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <ArduinoJson.h>

Adafruit_BME280 bme;  // Create an instance of the BME280 sensor
#define SDA_PIN 33 
#define SCL_PIN 32  

void setup() {
   Wire.begin(SDA_PIN, SCL_PIN);
   Serial.begin(9600);
   if (!bme.begin(0x77)) {  // Adjust the address if necessary (0x76 or 0x77)
     Serial.println("Could not find a valid BME280 sensor, check wiring!");
     while (1);
   }
}

void loop() {
   float altitude = bme.readAltitude(1013.25);
   float temperature = bme.readTemperature();
   float humidity = bme.readHumidity();
   float pressure = bme.readPressure() / 100.0;
   Serial.print("Temperature: ");
   Serial.print(temperature);
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

//json data
    DynamicJsonDocument doc(200);
   doc["temperature"] = temperature;
   doc["pressure"] = pressure;
   doc["humidity"] = humidity;
   doc["altitude"] = altitude;

   String jsonString;
   serializeJson(doc, jsonString);
   Serial.println("Sensor Data:");
   Serial.println(jsonString);

   delay(3000);
}
