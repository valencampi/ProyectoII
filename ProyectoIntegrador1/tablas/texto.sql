-- `proyecto-prog-ii`.usuarios definition

CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_de_nacimiento` date DEFAULT NULL,
  `id_genero` int(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;


-- `proyecto-prog-ii`.resenas definition

CREATE TABLE `resenas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_Pelicula` varchar(20) DEFAULT NULL,
  `id_usuario` int(11) unsigned DEFAULT NULL,
  `texto` varchar(255) NOT NULL,
  `puntaje` decimal(8,2) DEFAULT 0.00,
  `fecha_de_creacion` datetime DEFAULT NULL,
  `fecha_de_actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `resenas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;