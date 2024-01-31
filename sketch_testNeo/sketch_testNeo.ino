#include <WiFi.h>
#include <Wire.h>
#include <ArduinoJson.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

/*#include <SPI.h>
#define BME_SCK 18
#define BME_MISO 19
#define BME_MOSI 23
#define BME_CS 5*/

#define SEALEVELPRESSURE_HPA (1013.25)
#define airQualSensor 4

Adafruit_BME280 bme; // I2C
//Adafruit_BME280 bme(BME_CS); // hardware SPI
//Adafruit_BME280 bme(BME_CS, BME_MOSI, BME_MISO, BME_SCK); // software SPI

unsigned long delayTime;

void setup() {
  Serial.begin(9600);
  Serial.println(F("BME280 test"));

  bool status;

  // default settings
  // (you can also pass in a Wire library object like &Wire2)
  status = bme.begin(0x76);  
  if (!status) {
    Serial.println("Could not find a valid BME280 sensor, check wiring!");
    while (1);
  }
  Serial.println("-- Default Test --");
  delayTime = 1000;
  Serial.println();
}


void loop() {
  createTab();
  delay(delayTime);
}


JsonDocument espTab ;
int temperature;
int pressure;
int altitude;
int humidity;
int MQ135_data;
float air_quality;



void createTab() {
  temperature = bme.readTemperature();
  pressure = bme.readPressure() / 100.0F;
  altitude = bme.readAltitude(SEALEVELPRESSURE_HPA);
  humidity = bme.readHumidity() ;
  MQ135_data = analogRead(airQualSensor);
  air_quality = ( MQ135_data * 100 ) / 4095;

  
  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" *C");
  
  Serial.print("Pressure = ");
  Serial.print(pressure);
  Serial.println(" hPa");

  Serial.print("Approx. Altitude = ");
  Serial.print(altitude);
  Serial.println(" m");

  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("Air quality = ");
  Serial.print( air_quality );
  Serial.println(" %");
  Serial.println();


  String espId = WiFi.macAddress();
  JsonDocument doc;

  doc["macAddress"] = espId;
  doc["name"] = "esp2";
  doc["temperature"] = temperature;
  doc["pressure"] = pressure;
  doc["altitude"] = altitude;
  doc["humidity"] = humidity;
  doc["air_quality"] = air_quality;

  String jsonString;
  serializeJson(doc, jsonString);
  Serial.println("Sensor Data:");
  Serial.println(jsonString);
  Serial.println("---------------------------------");
  Serial.println();

/*
  {
    "temperature" : temperature,
    "pressure" : pressure ,
    "altitude" : altitude,
    "humidity" : humidity,
    "air_quality" : air_quality
  }*/

}