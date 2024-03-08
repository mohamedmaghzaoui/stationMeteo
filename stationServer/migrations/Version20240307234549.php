<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240307234549 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sensor CHANGE pressure pressure DOUBLE PRECISION DEFAULT NULL, CHANGE humidity humidity DOUBLE PRECISION DEFAULT NULL, CHANGE altitude altitude DOUBLE PRECISION DEFAULT NULL, CHANGE air_quality air_quality INT DEFAULT NULL, CHANGE time time DATETIME DEFAULT NULL, CHANGE temperature temperature DOUBLE PRECISION DEFAULT NULL, CHANGE place place VARCHAR(255) DEFAULT NULL, CHANGE mac_address mac_address VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sensor CHANGE pressure pressure DOUBLE PRECISION NOT NULL, CHANGE humidity humidity DOUBLE PRECISION NOT NULL, CHANGE altitude altitude DOUBLE PRECISION NOT NULL, CHANGE air_quality air_quality INT NOT NULL, CHANGE time time DATETIME NOT NULL, CHANGE temperature temperature DOUBLE PRECISION NOT NULL, CHANGE place place VARCHAR(255) NOT NULL, CHANGE mac_address mac_address VARCHAR(255) NOT NULL');
    }
}
