CREATE TABLE valeur(
   id_valeur INT,
   température DECIMAL(15,2),
   PRIMARY KEY(id_valeur)
);

CREATE TABLE capteur(
   id_capteur INT,
   température VARCHAR(50),
   id_valeur INT NOT NULL,
   PRIMARY KEY(id_capteur),
   FOREIGN KEY(id_valeur) REFERENCES valeur(id_valeur)
);

CREATE TABLE capteur_module(
   id_capteur_module INT,
   ESP VARCHAR(50) NOT NULL,
   id_capteur INT NOT NULL,
   PRIMARY KEY(id_capteur_module),
   FOREIGN KEY(id_capteur) REFERENCES capteur(id_capteur)
);
