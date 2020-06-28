-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2020 a las 22:22:12
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto-prog-ii`
--
CREATE DATABASE IF NOT EXISTS `proyecto-prog-ii` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyecto-prog-ii`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_Pelicula` varchar(20) DEFAULT NULL,
  `id_usuario` int(11) UNSIGNED DEFAULT NULL,
  `texto` varchar(255) NOT NULL,
  `puntaje` decimal(8,2) DEFAULT 0.00,
  `fecha_de_creacion` timestamp NULL DEFAULT current_timestamp(),
  `fecha_de_actualizacion` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resenas`
--

INSERT INTO `resenas` (`id`, `id_Pelicula`, `id_usuario`, `texto`, `puntaje`, `fecha_de_creacion`, `fecha_de_actualizacion`) VALUES
(16, '13', 11, 'Excelente pelicula, muy emotiva.', '9.00', '2020-06-02 14:11:22', '2020-06-02 14:11:22'),
(17, '495764', 11, 'Muy graciosa.', '8.00', '2020-06-01 18:09:17', '2020-06-08 16:45:32'),
(18, '420817', 11, 'Excelentes cantantes.', '9.00', '2020-06-05 16:23:12', '2020-06-07 16:45:57'),
(20, '419704', 11, 'Muy entretenida!', '7.00', '2020-06-04 12:28:43', '2020-06-04 12:28:43'),
(21, '424', 11, 'Muy emotiva!', '8.00', '2020-06-08 16:25:05', '2020-06-08 16:25:05'),
(22, '419704', 14, 'No me gusto.', '3.00', '2020-06-06 13:29:16', '2020-06-07 17:19:26'),
(23, '429617', 14, 'No es mi estilo.', '2.00', '2020-06-08 16:25:48', '2020-06-08 16:50:00'),
(24, '574982', 14, 'Muy buenos efectos!', '7.00', '2020-06-03 20:26:21', '2020-06-03 20:26:21'),
(25, '496243', 14, 'Excelente!', '9.00', '2020-06-07 15:36:22', '2020-06-07 15:36:22'),
(26, '278', 14, 'Muy buena.', '8.00', '2020-06-06 21:27:12', '2020-06-07 18:58:07'),
(27, '454626', 15, 'Mejor que la anterior.', '6.00', '2020-06-06 16:27:52', '2020-06-06 16:27:52'),
(28, '495764', 15, 'Muy larga.', '4.00', '2020-06-08 16:28:17', '2020-06-08 16:56:18'),
(29, '512200', 15, 'La original era mejor', '4.00', '2020-06-06 22:16:42', '2020-06-08 16:46:35'),
(30, '419704', 15, 'Buenos efectos.', '4.00', '2020-06-03 20:29:38', '2020-06-03 20:29:38'),
(31, '420817', 15, 'Will Smith es excelente.', '8.00', '2020-06-08 16:30:25', '2020-06-08 16:30:25'),
(32, '454626', 13, 'Bastante divertida.', '8.00', '2020-06-03 22:31:00', '2020-06-03 22:31:00'),
(33, '419704', 13, 'Muy bien lograda.', '8.00', '2020-06-05 22:38:28', '2020-06-05 22:38:28'),
(34, '920', 13, 'La mejor de Disney.', '10.00', '2020-06-08 16:31:58', '2020-06-08 16:31:58'),
(35, '496243', 13, 'Demasiado exagerada.', '3.00', '2020-06-06 18:12:31', '2020-06-08 16:49:13'),
(36, '424', 13, 'Muy buena, para llorar.', '9.00', '2020-06-06 18:33:15', '2020-06-06 18:33:15'),
(38, '129', 12, 'Peliculon, siempre.', '8.00', '2020-06-07 18:14:52', '2020-06-08 16:47:24'),
(39, '363111', 12, 'Da miedo.', '6.00', '2020-06-03 21:32:51', '2020-06-03 21:32:51'),
(40, '338762', 12, 'Muy entretenida!', '9.00', '2020-06-08 16:36:23', '2020-06-08 16:36:23'),
(41, '671', 12, 'Excelente, siempre.', '10.00', '2020-06-08 16:37:00', '2020-06-08 16:37:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_de_nacimiento` date DEFAULT NULL,
  `id_genero` int(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `fecha_de_nacimiento`, `id_genero`) VALUES
(11, 'valentina', 'valentina@gmail.com', '$2a$10$xaayphO2uiUbXyM4LgRVFuo6xlmzPoy5Y35QyQQmaqbbeXqpMBsLW', '2000-10-14', 10749),
(12, 'maite', 'maite@gmail.com', '$2a$10$C2ggCQZe8jaaon.x460gPebpyCp5ZVhVwjNceiUps9dUewtwIKNui', '2000-11-06', 36),
(13, 'marcos', 'marcos@gmail.com', '$2a$10$LjPP5UQ7TZnsJX/Z37NPY.Yg7/GtdbGnNEzAeJeU27P3NfdDEHqOa', '2000-03-23', 99),
(14, 'luciana', 'luciana@gmail.com', '$2a$10$bKOG60IxhameyvF5JnLy8eNWPI7RiGonawQiXBYp0tG.pEmaL8Vkm', '2006-06-16', 10751),
(15, 'nicolas', 'nicolas@gmail.com', '$2a$10$w.jKAhrhN5lAxCD9RgvRweRxSJAQibFAuPD2F4klIW9eF1C9hLoBK', '2005-06-11', 16);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `resenas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;