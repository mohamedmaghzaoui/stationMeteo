#include <WiFi.h>

#include <ArduinoJson.h>
#include <HTTPClient.h>

const char* ssid = "HexIOT";
const char* password = "H3xag0nePriv4te";

void setup() {
  // Set up Serial for debugging output
  Serial.begin(9600);

  
    // Connect to Wi-Fi
  WiFi.begin(ssid, password);

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  // Print your ESP32 IP address
  Serial.print("Connected to WiFi. IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Add your sensor reading and JSON data creation here



  // JSON data
  DynamicJsonDocument doc(200);
  doc["temperature"] = "test";
  doc["pressure"] = "test2";
  doc["humidity"] = "test3";
  doc["altitude"] = "test4";

  String jsonString;
  serializeJson(doc, jsonString);
  Serial.println("Sensor Data:");
  Serial.println(jsonString);
  HTTPClient http;

  // Your server URL
  const char* serverUrl = "http://10.1.4.5:3000/";

  // Make HTTP POST request
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

  delay(10000);
}
