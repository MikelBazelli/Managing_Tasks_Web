CREATE DATABASE  IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `content` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (36,11,'Team Meeting','Discuss project milestones and next steps','Prepare the agenda and gather project updates from each team member','2024-09-11 08:27:51'),(37,11,'Update User Documentation.','Revise the user manual for the latest software version.','Incorporate new features and fix outdated information.','2024-09-11 08:28:58'),(38,18,'Code Review','Examine recent pull requests and provide feedback','Ensure code quality and compliance with project standards','2024-09-11 08:35:47'),(39,8,'Gather Client Feedback','Collect feedback from clients about the recent product release','Prepare a survey and schedule feedback sessions.','2024-09-11 08:36:34'),(40,19,'Bug Fixing','Address the bug affecting user login functionality.','Debug the login module and test the fix across different browsers.','2024-09-11 09:35:23');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'Mikel','Bazelli','$2b$10$Sy15KdFfefZc9ZSuBHy9qeTItUkkvJ8ghm9.Nm1ZwB94ilVMulUJa','mikel@gmail.com','2024-09-08 19:17:32'),(9,'Milva','Doe','$2b$10$UsOEGq28ENvz9kiU98VOmOdLuydRMzCjC.T/cHXg2Yq89X99xvxfi','milva@gmail.com','2024-09-08 19:17:50'),(10,'Nici','Maci','$2b$10$hOJTLI/xfpqTcevSc82FHuK1XKU3Nj8CzBdLgBRxQ4lvzRxeNN1n.','nici@gmail.com','2024-09-08 19:18:11'),(11,'Korona','irok','$2b$10$F7How7tpF8v9eJp7cCFmaeeAs28tl3708LnsccTPSsn3DU25Im6XS','korona@gmail.com','2024-09-08 20:21:23'),(17,'Olivia','Johnson','$2b$10$bE6avHS5KMomFKuyGAvW2eLTVTIaOU3dLrMskPu2n5fFphfc5NEy2','olivia@gmail.com','2024-09-10 17:29:30'),(18,'Sylvia','Styles','$2b$10$lwNeCjpm0B3IzTVL5IUrROjhNU0RS08fp4v/RSHf1JuZilxsBRZ1C','sylvia@gmail.com','2024-09-11 08:34:45'),(19,'Maria','Izabell','$2b$10$Z26oD83uh9nUw5wDC6WmmeRT/NGzVhgt0U3oFlFOPOAkjiLhYSStG','maria@gmail.com','2024-09-11 09:34:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-11 12:42:00
