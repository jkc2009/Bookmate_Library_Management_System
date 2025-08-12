-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2025 at 09:55 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `borrowed_books`
--

CREATE TABLE `borrowed_books` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `book_title` varchar(255) NOT NULL,
  `member_name` varchar(255) NOT NULL,
  `membership_id` varchar(50) NOT NULL,
  `member_phone` varchar(20) NOT NULL,
  `borrow_date` date NOT NULL,
  `due_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `borrowed_books`
--

INSERT INTO `borrowed_books` (`id`, `book_id`, `book_title`, `member_name`, `membership_id`, `member_phone`, `borrow_date`, `due_date`) VALUES
(1, 1, 'The Midnight Library', 'JK', '1', '123456789', '2025-08-11', '2025-08-25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `borrowed_books`
--
ALTER TABLE `borrowed_books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `borrowed_books`
--
ALTER TABLE `borrowed_books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
