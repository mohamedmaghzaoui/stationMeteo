# 🌐 Centralized Station Meteo

This project is a **Centralized  Station Meteo**, featuring a **React frontend** and a **Symfony backend**. The system collects environmental data from connected sensors and displays it in real-time through a web interface. It includes modules with various sensors managed by **ESP32 microcontrollers**, allowing users to monitor data such as air quality and temperature remotely.

## 🌟 Features
- **Real-time Data Visualization**: View live environmental readings from MQ-135 (air quality) and BME280 (temperature, altitude, humidity, and pressure) sensors.
- **ESP32 Integration**: Sensors are connected to ESP32 microcontrollers, sending data to the backend via API endpoints.
- **REST API with Symfony**: The backend API, built with Symfony, manages data handling and ensures seamless communication between ESP32 modules and the frontend.
- **Responsive Frontend in React**: The frontend interface, built in React, provides a clean and intuitive layout for users to view and analyze environmental data.

## 🚀 Getting Started

### Prerequisites
- **Node.js** and **npm** (for the React frontend)
- **PHP** and **Composer** (for the Symfony backend)
- **ESP32 microcontroller** with MQ-135 and BME280 sensors
- **Git** for version control

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/mohamedmaghzaoui/stationMeteo.git
```
#### 2. Backend Setup (Symfony)
```bash
cd backend
composer install
symfony serve
```
#### 3. Frontend Setup (React):
```bash
cd frontend
npm install
npm start

```
## 📝 API Documentation

Below are the available API routes for interacting with the system:

## **User Routes**

- **POST** `/users/verify`: Verifies if a user exists based on the provided email.
  - **Body**: 
    ```json
    { 
      "email": "example@example.com" 
    }
    ```
  - **Response**: 
    - `200 OK` if user doesn't exist
    - `409 Conflict` if email already exists


- **POST** `/users`: Adds a new user.
  - **Body**: 
    ```json
    { 
      "email": "example@example.com", 
      "name": "John Doe", 
      "lastName": "Doe", 
      "username": "johndoe123", 
      "password": "password123" 
    }
    ```
  - **Response**: `201 Created` on success.

- **GET** `/users`: Fetches all users (requires authentication).
  - **Response**: 
    ```json
    {
      "id": 1,
      "email": "example@example.com",
      "name": "John",
      "lastName": "Doe",
      "username": "johndoe123",
      "roles": ["ROLE_USER"]
    }
    ```

- **GET** `/user`: Fetches the logged-in user's data (requires authentication).
  - **Response**: 
    ```json
    {
      "id": 1,
      "email": "example@example.com",
      "name": "John",
      "lastName": "Doe",
      "username": "johndoe123",
      "roles": ["ROLE_USER"]
    }
    ```

## **Sensor Routes**

- **POST** `/sensor`: Handles sensor data from ESP32 modules.
  - **Body**: 
    ```json
    { 
      "macAddress": "ABC123", 
      "name": "MQ-135", 
      "temperature": 23, 
      "pressure": 1013, 
      "humidity": 45, 
      "altitude": 120, 
      "airQuality": 90, 
      "time": "2024-11-10T10:00:00", 
      "place": "Room 101" 
    }
    ```
  - **Response**: `200 OK` on success.

- **POST** `/sensors/add`: Links a sensor to a user.
  - **Body**: 
    ```json
    { 
      "macAddress": "ABC123", 
      "place": "Room 101", 
      "name": "MQ-135" 
    }
    ```
  - **Response**: `200 OK` if the sensor is linked to the user.

- **DELETE** `/sensors/delete`: Unlinks a sensor from a user.
  - **Body**: 
    ```json
    { 
      "macAddress": "ABC123" 
    }
    ```
  - **Response**: `200 OK` on success.

- **GET** `/user/sensors`: Retrieves all sensors linked to the logged-in user.
  - **Response**: 
    ```json
    [
      {
        "macAddress": "ABC123",
        "name": "MQ-135",
        "temperature": 23,
        "pressure": 1013,
        "humidity": 45,
        "altitude": 120,
        "airQuality": 90,
        "time": "2024-11-10T10:00:00",
        "place": "Room 101"
      }
    ]
    ```

## **Error Responses**

- **400 Bad Request**: Missing required fields or invalid data.
- **401 Unauthorized**: User is not authenticated.
- **404 Not Found**: Resource not found (e.g., sensor or user).
- **409 Conflict**: Resource already exists (e.g., user email).


## 📈 Usage
The ESP32 modules continuously send sensor data to the Symfony backend.
The React frontend displays this data in real-time for user analysis.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## About Me 👨‍💻

Hi, I'm Mohamed Maghzaoui, a passionate software engineer with a wide range of expertise spanning from web development to IoT, cloud, and networking technologies.You can explore my work and projects online:

- 🌐 [My Website](https://mohamedmaghzaoui.online/)
- 🔗 [LinkedIn Profile](https://www.linkedin.com/in/mohamed-maghzaoui-577044256/)
