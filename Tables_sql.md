CREATE TABLE capteur(
   id_module INT,
   ESP VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_module)
);

CREATE TABLE valeure(
   id_valeur INT,
   température VARCHAR(50),
   id_module INT NOT NULL,
   PRIMARY KEY(id_valeur),
   FOREIGN KEY(id_module) REFERENCES capteur(id_module)
);
