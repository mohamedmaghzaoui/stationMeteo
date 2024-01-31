# Mise en place d'une station météo



## Idée Générale

Le but de ce projet est de récolter des données sur la condition météorologique d'un lieu en interieur. Pour cela nous allons créer des modules équipé de capteurs qui seront connecter par wifi à une base de donnée qui transmettra les informations sur site web pour être utilisé par tous.

## Liaison des modules avec la base de donnée

Pour réaliser cette étapes, nous allons utilisé la méthode MQTT, qui fait envoyer les différentes informations (topic) des modules vers un serveur MQTT, tandis que la base de donnée écoute ce serveur à interval régulier et stock les informations.

## Hardware

Nous devrons faire nous même nos campteur avec des pièces fournies. Nous connecterons ceux-ci en wifi à la Raspberry pi qui contient la base de donnée ainsi que le site web.

## Sources

vous pouvez retrouver notre brouillon sur :
[Brouillon](https://excalidraw.com/#room=de8b00aa47619d74fe9c,Nj7dCG1oobuYImcY2eiGCA "lien vers le brouillon")





---

## Interface avec l'utilisateur

