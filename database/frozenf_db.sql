-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: frozenf_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'acompañamientos'),(2,'arroces'),(3,'carnes'),(4,'vegetarianos'),(5,'sopas'),(6,'postres');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` decimal(65,2) NOT NULL,
  `image` varchar(100) NOT NULL,
  `descuento` decimal(65,2) NOT NULL,
  `Idcategoria` int(11) NOT NULL,
  `visitados` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Wok de vegetales','Arroz con  mix de vegetales con jengibre, ajo y salsa de soya.',5.00,'wok-vege.jpg',2.00,2,'Si'),(2,'10 Albondigas','Carne de res molida especial, miga de pan, huevo , sal, albahaca y salsa napòlitana.',4.00,'albondigas.jpg',2.00,3,'Si'),(3,'Alitas','Alitas de pollo marinadas con paprika, miel, mostaza, comino y sal.',3.00,'alitas.jpg',5.00,3,'Si'),(4,'Lasaña de pollo','Pechuga desmechada, tomates seleccionados, cebolla, pesto, hiervas aromatizantes.',4.00,'lasaña-pollo.jpg',10.00,1,'No'),(5,'Goulash','Carne de res en cubos marinada con finas hierbas , zanahoria , cocido en sus jugos a temperatura controlada.',3.00,'goulash.jpg',0.00,3,'Si'),(6,'Vegetales a la plancha','Vegetales dorados a la plancha con: cebolla, zuchini verde, zuchini amarillo, berenjena, sal, pimenton ahumado, aceite de oliva y albaca.',2.00,'vegetales.jpg',5.00,4,'No'),(7,'Vegetales blanqueados','Mezcla de vegetales, brocoli, coliflor, zanahoria y habichuela al vapor con aceite de oliva y sal.',2.00,'vege-blanc.jpg',10.00,4,'Si'),(8,'Lasaña vegetariana','Berenjenas, zuchinni verde y amarillo, pimentón ahumado, zanahoria, albahaca, salsa napolitana, queso mozarella y pasta.',3.00,'lasaña-vege.jpg',10.00,4,'No'),(9,'Sopa de lentejas al coco','Lentejas rojas, cebolla, ajo, jengibre, curry en polvo, callen, leche de coco, fondo de verduras, coco rayado, tomate en trozos ,espinaca y sal.',2.50,'lentejas-coco.jpg',0.00,5,'No'),(10,'Carne de res desmechada','Carne de res mechada con hogao criollo.',2.50,'desmechada.jpg',0.00,3,'Si'),(11,'Pollo al curry','Pechuga de pollo con: cebolla cabezona, genjibre, ajo, curry amarillo en polvo, tomate y leche de coco.',4.00,'pollo-curry.jpg',10.00,3,'No'),(12,'Pure de papa','Pure de papa sabanera, mantequilla, leche y sal.',1.50,'pure-papa.jpg',0.00,1,'No'),(13,'Vegetales al wok','Mix de Vegetales ,zanahoria,zuchini verde,zuchini amarillo, cebolla, salteados al wok con genjibre ajo y salsa soya',3.50,'wok-vege.jpg',0.00,4,'No'),(14,'Arroz con coco','Arroz con titote de coco.',2.50,'arroz-coco.jpg',0.00,2,'Si'),(15,'Calentao','Arroz, carne de cerdo,platano maduro,frijol, hogao, pollo, chorizo, cilantro.',4.00,'calentao.jpg',5.00,2,'No'),(16,'WOK de Cerdo','Arroz al wok con cerdo y mix de vegetales con jengibre, ajo y salsa de soya.',4.50,'wok-cerdo.jpg',10.00,2,'Si'),(17,'WOK de pollo','Arroz al wok con pollo y mix de vegetales con jengibre, ajo y salsa de soya.',4.50,'wok-pollo.jpg',0.00,2,'No'),(18,'Callos a la Madrileña','Menudo, pezuña de cerdo, chorizo, garbanzos, pimenton, tomate, cebolla, perejil, chocolate y salsas de tomate.',3.50,'callos-madri.jpg',0.00,3,'No'),(19,'Lomo stroganoff','Julianas de lomo de res con champiñones en suave salsa de carne y crema de leche.',4.50,'stroganoff.jpg',5.00,3,'Si'),(20,'Salmon grille','Lomo de Salmòn noruego, sal , pimienta y salsa de la casa.',5.00,'salmon.jpg',10.00,3,'Si');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `name` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `password` varchar(500) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'frozenf_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-02 13:26:43
