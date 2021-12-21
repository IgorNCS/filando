CREATE DATABASE  IF NOT EXISTS `bd_filando` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `bd_filando`;
-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: bd_filando
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estabelecimento`
--

DROP TABLE IF EXISTS `estabelecimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estabelecimento` (
  `idestabelecimento` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `local` varchar(1000) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `imagem` varchar(1000) NOT NULL,
  `status` varchar(45) NOT NULL DEFAULT 'vazio',
  PRIMARY KEY (`idestabelecimento`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estabelecimento`
--

LOCK TABLES `estabelecimento` WRITE;
/*!40000 ALTER TABLE `estabelecimento` DISABLE KEYS */;
INSERT INTO `estabelecimento` VALUES (1,'Cantina Volpi Pituba','Rua Miguel Navarro Y Cañizares, 423 - Pituba, Salvador - BA, 41810-215','restaurante','http://4.bp.blogspot.com/-XKUOQO_NYUo/ULVNrcoBmgI/AAAAAAAANKg/nDkJftR4Gnw/s1600/Cantina_Volpi-Fachada_Pituba.jpg','cheio'),(2,'Cantina Volpi Ondina','R. Prof. Sabino Silva, 822 - Jardim Apipema, Salvador - BA, 40155-250','Restaurante','https://lh3.googleusercontent.com/p/AF1QipOXHshVpx-CLV-_Ddia8QNDsIAwvVH1Q1Kfr5X9=s1600-w400','moderado'),(3,'Outback Steakhouse','Shopping da Bahia, Av. Tancredo Neves, 148 - Caminho das Árvores, Salvador - BA, 41820-908','restaurante','https://gastronomiasalvador.com.br/wp-content/uploads/2013/01/outback_iguatemi_salvador_01.jpg','moderado');
/*!40000 ALTER TABLE `estabelecimento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-29 19:04:45
