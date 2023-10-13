# Mise en place d'une station météo



## Idée Générale

Le but de ce projet est de récolter des données sur la condition météorologique d'un lieu en interieur. Pour cela nous allons créer des modules équipé de capteurs qui seront connecter par wifi à une base de donnée qui transmettra les informations sur site web pour être utilisé par tous.

## Liaison des modules avec la base de donnée

Pour réaliser cette étapes, nous allons utilisé la méthode MQTT, qui fait envoyer les différentes informations (topic) des modules vers un serveur MQTT, tandis que la base de donnée écoute ce serveur à interval régulier et stock les informations.

## Hardware

Nous devrons faire nous même nos campteur avec des pièces fournies. Nous connecterons ceux-ci en wifi à la Raspberry pi qui contient la base de donnée ainsi que le site web.

## Interface avec l'utilisateur

Nous avons choisis de créer un site internet plutôt qu'une application pour l'utilisateur car cela est rapide à mettre en place. Le site contiendra 
une page d'accueil contenant toute les données de chaques capteurs ainsi que des liens vers des pages centrées sur chaques informations, contenant notemment des diagrammes de l'évolution au cours du temps de ces valeurs. Egalement, l'utilisateur aura accés à une page pour rajouter un ou plusieurs module ainsi que pour en supprimer. Cependant pour effectuer ces actions, il devra d'abord s'identifier avec un compte administrateur.
Pour réaliser ce site, nous utiliserons le framework react.
