#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <ArduinoJson.h>
#include <TinyGsmClient.h>

Adafruit_BME280 bme;  // Create an instance of the BME280 sensor
#define SDA_PIN 33
#define SCL_PIN 32

const char *server = "your-express-server.com";
const char *path = "/your-endpoint";
const char *apn = "your-apn";
const char *gprsUser = "your-gprs-username";
const char *gprsPass = "your-gprs-password";

TinyGsm modem(Serial2);
TinyGsmClient client(modem);

void setup()
{
  Serial.begin(9600);
  Wire.begin(SDA_PIN, SCL_PIN);
  if (!bme.begin(0x77))
  {
    Serial.println("Could not find a valid BME280 sensor, check wiring!");
    while (1);
  }

  // Set up GSM connection
  Serial2.begin(9600, SERIAL_8N1, 17, 16);
  delay(1000);
  if (!modem.init())
  {
    Serial.println("Failed to initialize modem.");
    while (1);
  }

  Serial.println("Connecting to GPRS...");
  if (!modem.gprsConnect(apn, gprsUser, gprsPass))
  {
    Serial.println("GPRS connection failed. Check your SIM card.");
    while (1);
  }
  Serial.println("Connected to GPRS.");
}

void loop()
{
  float altitude = bme.readAltitude(1013.25);
  float temperature = bme.readTemperature();
  float humidity = bme.readHumidity();
  float pressure = bme.readPressure() / 100.0;

  // Create JSON data
  DynamicJsonDocument doc(200);
  doc["temperature"] = temperature;
  doc["pressure"] = pressure;
  doc["humidity"] = humidity;
  doc["altitude"] = altitude;

  String jsonString;
  serializeJson(doc, jsonString);
  Serial.println("Sensor Data:");
  Serial.println(jsonString);

  // Send HTTP POST request
  Serial.print("Connecting to ");
  Serial.println(server);
  if (client.connect(server, 80))
  {
    Serial.println("Connected!");

    client.print("POST ");
    client.print(path);
    client.println(" HTTP/1.1");
    client.print("Host: ");
    client.println(server);
    client.println("Content-Type: application/json");
    client.print("Content-Length: ");
    client.println(jsonString.length());
    client.println();
    client.println(jsonString);

    delay(1000);
  }
  else
  {
    Serial.println("Connection failed.");
  }

  client.stop();

  delay(3000);
}
