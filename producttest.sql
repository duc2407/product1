-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 07:24 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `producttest`
--

-- --------------------------------------------------------

--
-- Table structure for table `menuorders`
--

CREATE TABLE `menuorders` (
  `id` int(11) NOT NULL,
  `id_order` int(11) DEFAULT NULL,
  `about_client` varchar(255) DEFAULT NULL,
  `list_id_product` varchar(255) DEFAULT NULL,
  `total_payment` int(11) DEFAULT NULL,
  `id_status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menuorders`
--

INSERT INTO `menuorders` (`id`, `id_order`, `about_client`, `list_id_product`, `total_payment`, `id_status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Nguyễn Văn A - 0333333332 - địa chỉ', '1', 1399999, 1, '2023-12-07 09:55:48', '2023-12-07 09:55:48');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `id_product` varchar(255) DEFAULT NULL,
  `type_product` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantily` int(11) DEFAULT NULL,
  `id_size` int(11) DEFAULT NULL,
  `url_img` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `percent_sale` int(11) DEFAULT NULL,
  `sale` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `id_product`, `type_product`, `name`, `description`, `quantily`, `id_size`, `url_img`, `price`, `percent_sale`, `sale`, `createdAt`, `updatedAt`) VALUES
(11, 'sp01', NULL, 'Áo supreme', NULL, 188, NULL, NULL, 1000000, NULL, 1, '2023-12-14 21:41:52', '2023-12-15 18:23:33'),
(12, 'sp02', NULL, 'Áo DREW', NULL, 62, NULL, NULL, 12900000, NULL, 1, '2023-12-14 21:42:22', '2023-12-15 18:23:21'),
(13, 'sp03', NULL, 'Quàn Dior', NULL, 123, NULL, NULL, 30000000, NULL, 1, '2023-12-14 21:42:49', '2023-12-15 17:52:33'),
(14, 'sp04', NULL, 'aaa', NULL, 1452, NULL, NULL, 10000, NULL, 1, '2023-12-14 21:42:54', '2023-12-15 17:52:37'),
(15, 'sp05', NULL, 'Áo a ri ngon mô tô', NULL, 1131, NULL, NULL, 10000, NULL, 1, '2023-12-14 21:42:59', '2023-12-15 17:51:32'),
(16, 'sp06', NULL, 'Áo Hades', NULL, 1111, NULL, NULL, 6700000, NULL, 1, '2023-12-14 21:43:04', '2023-12-15 18:11:17'),
(17, 'sp07', NULL, 'Áo SexY', NULL, 999, NULL, NULL, 10000, NULL, 1, '2023-12-14 21:43:07', '2023-12-15 18:10:42'),
(18, 'sp08', NULL, 'Mũ Supreme', NULL, 766, NULL, NULL, 10000000, NULL, 1, '2023-12-14 21:43:12', '2023-12-15 18:10:31'),
(19, 'sp09', NULL, 'Áo boi phố', NULL, 988, NULL, NULL, 10000, NULL, 1, '2023-12-14 21:43:16', '2023-12-15 18:10:14'),
(20, 'sp10', NULL, 'Bag Arimi', NULL, 988, NULL, NULL, 10000, NULL, 1, '2023-12-14 21:43:21', '2023-12-15 18:10:04');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-menuorder.js'),
('migration-create-product.js'),
('migrations-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, '', 'admin', 'admin@gmail.com', '$2a$10$7xs5dYlctNcf3jn/cbzST.UNc08/iovBOp/62C7qhG//iDpT86e0y', 1, '2023-12-07 10:03:22', '2023-12-07 10:03:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menuorders`
--
ALTER TABLE `menuorders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menuorders`
--
ALTER TABLE `menuorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
