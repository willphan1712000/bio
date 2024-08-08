-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 11, 2024 at 10:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `info` (
  `username` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `Website` varchar(200) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Facebook` varchar(200) DEFAULT NULL,
  `Instagram` varchar(200) DEFAULT NULL,
  `Messenger` varchar(200) DEFAULT NULL,
  `X` varchar(200) DEFAULT NULL,
  `Tiktok` varchar(200) DEFAULT NULL,
  `Mobile` varchar(200) DEFAULT NULL,
  `Work` varchar(200) DEFAULT NULL,
  `Address` varchar(200) DEFAULT NULL,
  `Youtube` varchar(200) DEFAULT NULL,
  `Threads` varchar(200) DEFAULT NULL,
  `Linkedin` varchar(200) DEFAULT NULL,
  `Pinterest` varchar(200) DEFAULT NULL,
  `Zalo` varchar(200) DEFAULT NULL,
  `Booking` varchar(200) DEFAULT NULL,
  `OrderOnline` varchar(200) DEFAULT NULL,
  `HotSale` varchar(200) DEFAULT NULL,
  `organization` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `purchase` (
  `username` varchar(200) DEFAULT NULL,
  `template_id` int(255) DEFAULT NULL,
  `purchasedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `template` (
  `username` varchar(200) DEFAULT NULL,
  `themeid` int(255) DEFAULT NULL,
  `favorite` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------


CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(200) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `token` varchar(200) DEFAULT NULL,
  `deleteToken` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;