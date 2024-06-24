<?php

namespace App\Entity;

use App\Repository\SensorRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SensorRepository::class)]
class Sensor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]

    private ?int $id = null;
    #[ORM\ManyToOne(targetEntity: "App\Entity\User", inversedBy: "sensors")]

    private ?User $user = null; // Update to allow null

    #[ORM\Column(type: "float", nullable: true)]

    private $pressure;

    #[ORM\Column(type: "float", nullable: true)]
    private $humidity;

    #[ORM\Column(type: "float", nullable: true)]
    private $altitude;

    #[ORM\Column(type: "integer", nullable: true)]
    private $airQuality;

    #[ORM\Column(type: "datetime", nullable: true)]
    private $time;

    #[ORM\Column(type: "float", nullable: true)]
    private $temperature;
    #[ORM\Column(type: "string", nullable: true)]
    private $place;
    #[ORM\Column(type: "string", nullable: true)]
    private $macAddress;
    #[ORM\Column(type: "string", nullable: true)]
    private $name;
    /**
     * Get the value of id
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Set the value of id
     */
    public function setId(?int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of pressure
     */
    public function getPressure()
    {
        return $this->pressure;
    }

    /**
     * Set the value of pressure
     */
    public function setPressure($pressure): self
    {
        $this->pressure = $pressure;

        return $this;
    }

    /**
     * Get the value of humidity
     */
    public function getHumidity()
    {
        return $this->humidity;
    }

    /**
     * Set the value of humidity
     */
    public function setHumidity($humidity): self
    {
        $this->humidity = $humidity;

        return $this;
    }

    /**
     * Get the value of altitude
     */
    public function getAltitude()
    {
        return $this->altitude;
    }

    /**
     * Set the value of altitude
     */
    public function setAltitude($altitude): self
    {
        $this->altitude = $altitude;

        return $this;
    }

    /**
     * Get the value of airQuality
     */
    public function getAirQuality()
    {
        return $this->airQuality;
    }

    /**
     * Set the value of airQuality
     */
    public function setAirQuality($airQuality): self
    {
        $this->airQuality = $airQuality;

        return $this;
    }

    /**
     * Get the value of time
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * Set the value of time
     */
    public function setTime($time): self
    {
        $this->time = $time;

        return $this;
    }

    /**
     * Get the value of temperature
     */
    public function getTemperature()
    {
        return $this->temperature;
    }

    /**
     * Set the value of temperature
     */
    public function setTemperature($temperature): self
    {
        $this->temperature = $temperature;

        return $this;
    }

    /**
     * Get the value of place
     */
    public function getPlace()
    {
        return $this->place;
    }

    /**
     * Set the value of place
     */
    public function setPlace($place): self
    {
        $this->place = $place;

        return $this;
    }

    /**
     * Get the value of macAddress
     */
    public function getMacAddress()
    {
        return $this->macAddress;
    }

    /**
     * Set the value of macAddress
     */
    public function setMacAddress($macAddress): self
    {
        $this->macAddress = $macAddress;

        return $this;
    }

    /**
     * Get the value of user
     */
    public function getUser(): ?User
    {
        return $this->user;
    }

    /**
     * Set the value of user
     */
    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get the value of name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     */
    public function setName($name): self
    {
        $this->name = $name;

        return $this;
    }
}
