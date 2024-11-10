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
## 📈 Usage
The ESP32 modules continuously send sensor data to the Symfony backend.
The React frontend displays this data in real-time for user analysis.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.