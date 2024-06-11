<?php
// src/Controller/SensorController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Psr\Log\LoggerInterface; // Import the LoggerInterface
use App\Entity\Sensor;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class SensorController extends AbstractController
{

    #[Route("/sensor", name: "sensor")]

    public function handleSensorData(Request $request, ManagerRegistry $doctrine): Response
    {
        // Get JSON data from the request
        $jsonData = json_decode($request->getContent(), true);


        $sensorData = new Sensor();

        // Handle the JSON data (you can do whatever processing you need here)
        $sensorData->setPressure($jsonData['pressure']);
        $sensorData->setHumidity($jsonData['humidity']);
        $sensorData->setAltitude($jsonData['altitude']);
        $sensorData->setAirQuality($jsonData['airQuality']);
        $sensorData->setMacAddress($jsonData['macAddress']);

        // Check if 'ds3231Time' key exists before trying to access it
        $dateTime = isset($jsonData['time']) ? new \DateTime($jsonData['time']) : null;
        $sensorData->setTime($dateTime);

        $sensorData->setTemperature($jsonData['temperature'] ?? null);

        // Use the Doctrine entity manager to persist and flush the data
        $entityManager = $doctrine->getManager();
        $entityManager->persist($sensorData);
        $entityManager->flush();

        // Return a response (this is optional)
        return $this->json(['status' => "works fine"]);
    }
    #[Route("get_sensor_data", name: "get_sensor_data")]
    public function getSensorData(ManagerRegistry $doctrine, #[CurrentUser] User $user): Response
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }
        $repository = $doctrine->getRepository(Sensor::class);
        $sensors = $repository->findAll();
        $serializedSensors = [];

        foreach ($sensors as $sensor) {
            $serializedSensors[] = [
                'id' => $sensor->getId(),
                'pressure' => $sensor->getPressure(),
                'humidity' => $sensor->getHumidity(),
                'altitude' => $sensor->getAltitude(),
                'airQuality' => $sensor->getAirQuality(),
                'macAddress' => $sensor->getMacAddress(),
                'time' => $sensor->getTime() ? $sensor->getTime()->format('Y-m-d H:i:s') : null,
                'temperature' => $sensor->getTemperature(),
            ];
        }

        return $this->json(['sensorData' => $serializedSensors]);
    }
    public function addSensorToUser(ManagerRegistry $doctrine): Response
    {
        return $this->json(['status' => "works fine"]);
    }
}