-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2024 a las 12:08:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sprint_8_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `id` int(4) NOT NULL,
  `name` varchar(15) NOT NULL,
  `lastname` varchar(15) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `phone` int(9) NOT NULL,
  `email` varchar(80) NOT NULL,
  `team` varchar(20) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`id`, `name`, `lastname`, `dni`, `phone`, `email`, `team`, `category`) VALUES
(220, 'Carlos', 'Hernández', '34567890', 2147483647, 'carlos.hernandez@example.com', 'vestuario', 'asistente de vestuario'),
(221, 'Sofía', 'Lopez', '45678901', 2147483647, 'sofia.lopez@example.com', 'arte', 'director de arte'),
(222, 'Miguel', 'Gómez', '56789012', 2147483647, 'miguel.gomez@example.com', 'locaciones', 'jefe de locaciones'),
(223, 'Isabella', 'Rodríguez', '67890123', 2147483647, 'isabella.rodriguez@example.com', 'dirección', 'asistente de dirección'),
(224, 'Juan', 'Pérez', '78901234', 2147483647, 'juan.perez@example.com', 'producción', 'jefe de producción'),
(225, 'María', 'García', '89012345', 2147483647, 'maria.garcia@example.com', 'vestuario', 'vestuarista'),
(226, 'Pedro', 'Fernández', '90123456', 2147483647, 'pedro.fernandez@example.com', 'arte', 'director de arte'),
(227, 'Laura', 'Gutiérrez', '01234567', 123456789, 'laura.gutierrez@example.com', 'locaciones', 'asistente de locaciones'),
(228, 'José', 'Álvarez', '11223345', 1122334455, 'jose.alvarez@example.com', 'producción', 'asistente de producción'),
(229, 'Carmen', 'Torres', '22334456', 2147483647, 'carmen.torres@example.com', 'arte', 'asistente de arte'),
(230, 'Fernando', 'Castro', '33445567', 2147483647, 'fernando.castro@example.com', 'vestuario', 'asistente de vestuario'),
(231, 'Gabriela', 'Mendoza', '44556678', 2147483647, 'gabriela.mendoza@example.com', 'locaciones', 'jefe de locaciones'),
(232, 'Luis', 'Morales', '55667789', 2147483647, 'luis.morales@example.com', 'dirección', 'director'),
(233, 'Paola', 'Rivas', '66778890', 2147483647, 'paola.rivas@example.com', 'producción', 'jefe de producción'),
(234, 'Andrés', 'Jiménez', '77889901', 2147483647, 'andres.jimenez@example.com', 'arte', 'asistente de arte'),
(235, 'Valeria', 'Cano', '88990012', 2147483647, 'valeria.cano@example.com', 'vestuario', 'vestuarista'),
(236, 'Diego', 'Sánchez', '99001123', 2147483647, 'diego.sanchez@example.com', 'locaciones', 'asistente de locaciones'),
(237, 'Natalia', 'Vargas', '00112234', 11223344, 'natalia.vargas@example.com', 'producción', 'jefe de producción'),
(238, 'Jorge', 'Suárez', '11223356', 1122334456, 'jorge.suarez@example.com', 'arte', 'director de arte'),
(239, 'Sandra', 'Gómez', '22334467', 2147483647, 'sandra.gomez@example.com', 'dirección', 'asistente de dirección'),
(240, 'Alejandro', 'Salazar', '33445578', 2147483647, 'alejandro.salazar@example.com', 'vestuario', 'asistente de vestuario'),
(241, 'Mariana', 'Moreno', '44556689', 2147483647, 'mariana.moreno@example.com', 'locaciones', 'asistente de locaciones'),
(242, 'Ricardo', 'Hernández', '55667790', 2147483647, 'ricardo.hernandez@example.com', 'producción', 'jefe de producción'),
(243, 'Claudia', 'Ramos', '66778801', 2147483647, 'claudia.ramos@example.com', 'producción', 'asistente de producción'),
(244, 'Oscar', 'Morales', '77889912', 2147483647, 'oscar.morales@example.com', 'vestuario', 'asistente de vestuario'),
(245, 'Valentina', 'Castillo', '88990023', 2147483647, 'valentina.castillo@example.com', 'locaciones', 'jefe de locaciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id_event` int(5) NOT NULL,
  `name_event` varchar(50) NOT NULL,
  `date_event` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id_event`, `name_event`, `date_event`) VALUES
(15, 'Rodaje Caprabo 1/2', '2024-09-10'),
(16, 'Rodaje Caprabo 2/2', '2024-09-11'),
(17, 'Rodaje Opel', '2024-09-18'),
(18, 'Rodaje It Academy', '2024-09-23'),
(25, 'Barcelona Activa', '2024-09-27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `places`
--

CREATE TABLE `places` (
  `id_place` int(11) NOT NULL,
  `latitud` varchar(30) NOT NULL,
  `longitud` varchar(30) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `places`
--

INSERT INTO `places` (`id_place`, `latitud`, `longitud`, `title`) VALUES
(1, '41.40446216', '2.174288861', 'Alquiler de equipos'),
(3, '41.414886', ' 2.184611', 'Alquiler de vestuario'),
(4, '41.420904', ' 2.174409', 'Alquiler de atrezzo'),
(5, '41.393558', '2.145566', 'Alquiler de vestuario'),
(6, '41.388911', ' 2.157669', 'Estudio grabación '),
(7, '41.398991', ' 2.190547', 'Estudio grabación '),
(8, '41.376970', '2.144041', 'Agencia Actores');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id_event`);

--
-- Indices de la tabla `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id_place`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=246;

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id_event` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `places`
--
ALTER TABLE `places`
  MODIFY `id_place` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
