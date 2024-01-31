# Journal de bord

## 11/10/2023

Le premier jour de notre projet nous passer la plupart de la matinée à penser au contrainte qu'il pourrait y avoir,
nous avons réflichis à comment réaliser notre projet, à l'aide d'un schéma, 
nous avons construit un plan solide pour pouvoir commencer notre station météo sans être perdu et avoir toute les idées claires.
Nous nous sommes beaucoup documenté à l'aide de vidéo et site sur la reception de données vers une base de donnée, et le modèle à utiliser
pour transmettre et recevoir les données.
Cela nous auras occupés une bonne partie de la journée, nous avons donc fini la journée par la création d'un git pour pouvoir sauvgarder
notre travail.

## 12/10/2023

Lors de ce deuxième jour du projet de groupe nous nous sommes réparties les taches en deux groupes.
Le premier groupe composés de Néo et Mohamed devaient s'occuper de la transmision de données de l'esp 32 en wifi vers un serveur. 
Néo  à essayer de transmettre les données à l'aide du modèle MQTT.
Il a réussi à envoyer des données à partir d'une vm d'un raspberry vers l'hôte, mais il n'a pas réussi à les transmettre vers
l'application Mosquito. Cependant Mohamed à lui essayer de transmettre les données d'un esp 32 vers un server à l'aide de requette HTTP,
après une bonne journée à avoir travaillé dessus il à réussi à obtenir les bon résultats qu'il avez envoyer vers le server.
Quand au deuxième groupe composé de Loukas et Luka nous avons créer une maquette du site web à l'aide de figma, nous avons pu mettre en place
tout ce que l'on attend de l'interface utilisiteur pour une facilité d'utilisation. Après avoir terminé Luka a commencé à écrire le readme pour
avoir une trace écrite de l'objectif final et des différentes étapes à suivre de notre projet. et Loukas à commencer à écrire le journal de bord
pour avoir un suivi de tout ce que nous avons réalisés chaque jour.

## 13/10/2023
 
Pendant cette journée nous avons revu l'organisation de notre maquette figma. Nous avons réussi à envoyer cette fois-ci les données du bme 
vers le serveur.

## 18/10/2023

Aujourd'hui nous avons commencer à modéliser les modules de la sation méteo. Nous avons envoyer les donnés de deux esp
en même temps avec un délai de 10 secondes, nous avons aussi réussi à identifier chaque esp par leur adresse MAC.
Nous avons aussi commencer à faire l'aspect visuel du site à l'aide de bootstrap, et avons commencer à regarder quelque vidéo sur du
React js pour pouvoir rendre le site plus dynamique. 


## 31/01/2024

j'ai demandé a chat gpt de me résumer les étapes pour faire une connection entre l'esp et une base de donnée Symfony via MQTT TSL/SSL qui combine la vérification de l'identité des parties (à l'aide de certificats) avec la garantie d'intégrité des données (à l'aide de signatures numériques dans les certificats) :


    chatGPT:
            La mise en place de la communication sécurisée via des certificats dans le contexte de MQTT sur un ESP32 implique plusieurs étapes. Voici un résumé détaillé des tâches à accomplir :

            Génération des Certificats :

            Certificat du Serveur :

            Génère une paire de clés privée/publique pour le serveur.
            Crée une demande de certificat (CSR) à partir de la clé privée.
            Envoye la CSR à une autorité de certification (CA) pour signature.
            Reçoit le certificat signé par la CA.
            Certificat du Client (ESP32) :

            Génère une paire de clés privée/publique pour le client (ESP32).
            Crée une CSR à partir de la clé privée du client.
            Envoie la CSR à la CA pour signature.
            Reçoit le certificat signé par la CA.
            Configuration du Serveur MQTT :

            Configure le serveur MQTT pour utiliser le certificat du serveur et sa clé privée.
            Configure le serveur MQTT pour exiger l'authentification du client par certificat.
            Configuration de l'ESP32 (Client) :

            Intègre le certificat du client et la clé privée dans le firmware de l'ESP32.
            Configure l'ESP32 pour utiliser ces certificats pour la communication avec le serveur MQTT.
            Vérifie que le serveur MQTT auquel l'ESP32 se connecte utilise un certificat signé par la même CA.
            Communication sécurisée :

            Lorsque l'ESP32 se connecte au serveur MQTT, il présente son certificat au serveur pour l'authentification.
            Le serveur vérifie la validité du certificat à l'aide de la CA.
            La communication entre l'ESP32 et le serveur MQTT est chiffrée et sécurisée.
            Gestion des Certificats :

            Met en place une stratégie de gestion des certificats, y compris la rotation des clés et la révocation des certificats compromis.
            Débogage et Tests :

            Effectue des tests approfondis pour s'assurer que la communication sécurisée fonctionne correctement.
            Surveille les journaux pour détecter d'éventuelles erreurs ou problèmes.
            Intégration avec Symfony (Base de Données) :

            Configure la base de données Symfony pour accepter des connexions sécurisées à partir du serveur MQTT.
            Assure-toi que la communication entre le serveur MQTT et la base de données est sécurisée et autorisée.
            Il est important de noter que la sécurité du système repose non seulement sur la mise en place correcte des certificats, mais également sur des pratiques de gestion de clés et des politiques de sécurité robustes. Assure-toi de suivre les meilleures pratiques de sécurité pour protéger tes clés privées, mettre en œuvre une rotation régulière des certificats, et révoquer tout certificat compromis.