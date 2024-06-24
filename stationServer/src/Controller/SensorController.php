<?php
// src/Controller/SensorController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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

        // Validate required fields
        $macAddress = $jsonData['macAddress'] ?? null;
        $name = $jsonData['name'] ?? null;
        if (!$macAddress || !$name) {
            return $this->json(['error' => 'Missing required fields: macAddress and/or name'], Response::HTTP_BAD_REQUEST);
        }

        // Retrieve the repository
        $sensorRepository = $doctrine->getRepository(Sensor::class);

        // Check if the most recent sensor with the same macAddress and name exists
        $existingSensor = $sensorRepository->findOneBy(
            ['macAddress' => $macAddress, 'name' => $name],
            ['time' => 'DESC'] // Sort by time in descending order to get the latest record
        );

        // Create a new Sensor entity
        $sensorData = new Sensor();
        $sensorData->setMacAddress($macAddress);
        $sensorData->setName($name);

        // Handle the JSON data
        $sensorData->setPressure($jsonData['pressure'] ?? null);
        $sensorData->setHumidity($jsonData['humidity'] ?? null);
        $sensorData->setAltitude($jsonData['altitude'] ?? null);
        $sensorData->setAirQuality($jsonData['airQuality'] ?? null);


        $currentTime = new \DateTime();
        $currentTime->modify('+2 hours');
        $sensorData->setTime($currentTime);

        $sensorData->setTemperature($jsonData['temperature'] ?? null);

        if ($existingSensor) {
            $user = $existingSensor->getUser();
            $place = $existingSensor->getPlace();

            // Check if user and place are not null before setting them
            if ($user !== null) {
                $sensorData->setUser($user);
            }

            if ($place !== null) {
                $sensorData->setPlace($place);
            }
        }

        // Use the Doctrine entity manager to persist and flush the data
        $entityManager = $doctrine->getManager();
        $entityManager->persist($sensorData);
        $entityManager->flush();

        // Return a response
        return $this->json(['status' => 'Sensor data saved successfully']);
    }


    #[Route("sensors", name: "sensors")]
    public function getSensorData(ManagerRegistry $doctrine, #[CurrentUser] User $user): Response
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
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
    //link user to sensor data
    #[Route("/sensors/add", name: "add_sensor_to_user")]
    public function addSensorToUser(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user): Response
    {
        //check if user is connected
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $jsonData = json_decode($request->getContent(), true);

        $macAddress = $jsonData['macAddress'] ?? null;
        $place = $jsonData['place'] ?? null;
        $name = $jsonData['name'] ?? null;

        if (!$macAddress || !$name || !$place) {
            return $this->json(['error' => 'Missing required fields'], Response::HTTP_BAD_REQUEST);
        }

        $entityManager = $doctrine->getManager();
        $sensorRepository = $doctrine->getRepository(Sensor::class);

        // Find all sensors by macAddress and name
        $sensors = $sensorRepository->findBy(['macAddress' => $macAddress, 'name' => $name]);


        // If no sensors are found, return an error
        if (empty($sensors)) {
            return $this->json(['error' => 'Sensor not found'], Response::HTTP_NOT_FOUND);
        }

        // Update all sensors with the same macAddress
        foreach ($sensors as $sensor) {
            $sensor->setUser($user);
            $sensor->setPlace($place);
            $entityManager->persist($sensor);
        }

        $entityManager->flush();

        return $this->json(['status' => 'Sensor linked to user successfully']);
    }



    //unlick user to sensor data
    #[Route('/sensors/delete', name: 'unlink_sensors_from_user', methods: ['PUT'])]
    public function unlinkSensorsFromUser(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user): Response
    {
        //check if user is connected
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $jsonData = json_decode($request->getContent(), true);

        $macAddress = $jsonData['macAddress'] ?? null;

        if (!$macAddress) {
            return $this->json(['error' => 'Missing macAddress field'], Response::HTTP_BAD_REQUEST);
        }

        $entityManager = $doctrine->getManager();
        $sensorRepository = $entityManager->getRepository(Sensor::class);

        // Find all sensors by macAddress
        $sensors = $sensorRepository->findBy(['macAddress' => $macAddress]);

        // If no sensors are found, return a not found response
        if (empty($sensors)) {
            return $this->json(['error' => 'No sensors found with the provided macAddress'], Response::HTTP_NOT_FOUND);
        }

        // Unlink the user from all found sensors
        foreach ($sensors as $sensor) {
            $sensor->setUser(null);
            $sensor->setPlace(null);
            $entityManager->persist($sensor);
        }

        $entityManager->flush();

        return $this->json(['message' => 'User unlinked from all sensors successfully']);
    }
}
