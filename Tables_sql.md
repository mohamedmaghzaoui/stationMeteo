CREATE TABLE capteur_module(
   id_capteur_module INT,
   ESP VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_capteur_module)
);

CREATE TABLE valeure(
   id_valeur INT,
   température VARCHAR(50),
   id_capteur_module INT NOT NULL,
   PRIMARY KEY(id_valeur),
   FOREIGN KEY(id_capteur_module) REFERENCES capteur_module(id_capteur_module)
);
