import {
  Evento,
  Noticia,
  Ruta,
  Alojamiento,
  Restaurante,
  Negocio,
  ImagenGaleria,
} from "./types";

export const eventos: Evento[] = [
  {
    id: "1",
    slug: "fiestas-virgen-del-rosario",
    titulo: "Fiestas de la Virgen del Rosario",
    fecha: "2025-09-08",
    descripcion:
      "Fiestas patronales en honor a la Virgen del Rosario, el evento más importante del año en nuestro pueblo.",
    descripcionCompleta:
      "Las Fiestas de la Virgen del Rosario son la celebración más importante de Ventosa de la Sierra. Durante los días 8 y 9 de septiembre, el pueblo se llena de vida con la llegada de vecinos, familiares y visitantes. El programa incluye misa solemne en la iglesia de San Cristóbal, procesión por las calles del pueblo, juegos tradicionales, comida de hermandad, verbena con orquesta y actividades para todas las edades. Es el momento del año en que nuestra pequeña comunidad de 14 habitantes se multiplica y revive las tradiciones que nos unen.",
    lugar: "Iglesia de San Cristóbal y plaza del pueblo",
    categoria: "fiesta",
  },
  {
    id: "2",
    slug: "ruta-castros-celtiberos",
    titulo: "Visita Guiada a los Castros Celtíberos",
    fecha: "2025-10-15",
    descripcion:
      "Descubre el Castro de El Castillejo y Los Villares, vestigios de nuestro pasado celtíbero.",
    descripcionCompleta:
      "Una jornada para conocer el rico patrimonio arqueológico de Ventosa de la Sierra. Visitaremos el Castro de El Castillejo, situado a 1.333 metros de altitud sobre un cerro cónico que domina la cabecera del río Zarranzano, y el Castro de Los Villares, que domina el valle de Arévalo. Acompañados por un arqueólogo experto, descubriremos cómo vivían los celtíberos hace más de 2.000 años, observaremos los restos de murallas y viviendas, y disfrutaremos de vistas espectaculares de la sierra. Ruta de dificultad media, 3 horas de duración. Inscripción previa necesaria en el Ayuntamiento de Arévalo de la Sierra.",
    lugar: "Castro de El Castillejo",
    categoria: "cultural",
  },
  {
    id: "3",
    slug: "senderismo-sierra-soria",
    titulo: "Ruta de Senderismo por Tierras Altas",
    fecha: "2025-06-22",
    descripcion: "Recorrido guiado por los paisajes más espectaculares de la Sierra de Soria.",
    descripcionCompleta:
      "Jornada de senderismo por la comarca de Tierras Altas y El Valle, una de las zonas más elevadas y mejor conservadas de la provincia de Soria. Desde Ventosa de la Sierra, situada a 1.243 metros de altitud, recorreremos senderos tradicionales que conectan con las localidades vecinas, atravesando pinares, pastizales de alta montaña y afloramientos rocosos. La ruta ofrece vistas panorámicas impresionantes del sistema Ibérico y nos permitirá observar la flora y fauna característica de la alta montaña soriana. Incluye picnic campestre con productos locales. Nivel: medio-alto. Distancia: 14 km. Inscripción en el Ayuntamiento de Arévalo de la Sierra: 975 397 001.",
    lugar: "Salida desde la plaza del pueblo",
    categoria: "deportivo",
  },
];

export const noticias: Noticia[] = [
  {
    id: "1",
    slug: "recuperacion-castros-celtiberos",
    titulo: "Proyecto de puesta en valor de los castros celtíberos",
    fecha: "2025-10-15",
    resumen:
      "El Ayuntamiento de Arévalo de la Sierra impulsa la recuperación y señalización de los yacimientos arqueológicos de Ventosa.",
    contenido:
      "El Ayuntamiento de Arévalo de la Sierra, en colaboración con la Diputación de Soria y la Junta de Castilla y León, ha puesto en marcha un ambicioso proyecto para poner en valor el rico patrimonio arqueológico de Ventosa de la Sierra.\n\nEl proyecto incluye la señalización y acondicionamiento de los dos castros celtíberos de la localidad: El Castillejo, situado a 1.333 metros de altitud y que domina la cabecera del río Zarranzano, y Los Villares, que ofrece vistas privilegiadas sobre el valle de Arévalo. Ambos yacimientos datan de la Edad del Hierro y constituyen importantes vestigios de la presencia celtíbera en la Sierra de Soria.\n\nLas actuaciones incluyen la creación de senderos de acceso, paneles interpretativos, consolidación de estructuras visibles y la elaboración de material divulgativo. La inversión total asciende a 65.000 euros, financiados en un 70% por fondos FEDER. Se espera que los trabajos finalicen en primavera de 2026 y que contribuyan a impulsar el turismo cultural en la zona.",
    categoria: "cultura",
  },
  {
    id: "2",
    slug: "restauracion-iglesia-san-cristobal",
    titulo: "Restauración de la Iglesia de San Cristóbal",
    fecha: "2025-09-10",
    resumen:
      "Concluyen los trabajos de consolidación de nuestra iglesia parroquial del siglo XVIII.",
    contenido:
      "Han finalizado los trabajos de restauración de la Iglesia de San Cristóbal, el principal templo de Ventosa de la Sierra, que fue reformado en el siglo XVIII sobre una construcción anterior.\n\nLas obras, que han durado seis meses, han incluido la reparación de la cubierta que presentaba filtraciones, la consolidación de los muros exteriores, la restauración de la puerta principal de madera y el saneamiento de humedades en el interior. También se ha mejorado la instalación eléctrica y se han restaurado varios elementos del mobiliario litúrgico.\n\nLa inversión total ha sido de 48.000 euros, financiados por la Diputación de Soria, el Obispado de Osma-Soria y el Ayuntamiento de Arévalo de la Sierra. Estas actuaciones garantizan la conservación de este templo que es el corazón de nuestra pequeña comunidad y donde se celebran las fiestas de la Virgen del Rosario cada septiembre. La iglesia ha reabierto al culto y continuará acogiendo los actos religiosos y culturales de la localidad.",
    categoria: "cultura",
  },
  {
    id: "3",
    slug: "conectividad-tierras-altas",
    titulo: "Mejora de las comunicaciones en Tierras Altas",
    fecha: "2025-08-20",
    resumen:
      "La Diputación invierte en mejorar las carreteras que conectan los pueblos de la comarca.",
    contenido:
      "La Diputación Provincial de Soria ha anunciado una inversión de 320.000 euros para mejorar las carreteras que conectan las localidades de la comarca de Tierras Altas y El Valle, entre las que se encuentra Ventosa de la Sierra.\n\nLas actuaciones incluyen el refuerzo del firme, mejora del drenaje, señalización vertical y horizontal, y la instalación de quitamiedos en los tramos más sinuosos. Los trabajos se centrarán principalmente en la SO-132 y los caminos vecinales que comunican Ventosa con Arévalo de la Sierra y otras localidades vecinas.\n\nEstas mejoras son fundamentales para nuestra comarca, situada en una de las zonas más elevadas de la provincia (entre 1.200 y 1.400 metros de altitud), donde las condiciones climáticas invernales pueden dificultar las comunicaciones. Los vecinos llevan años reclamando estas actuaciones, especialmente importantes para garantizar el acceso de servicios básicos y mejorar la seguridad vial.\n\nLos trabajos comenzarán en primavera de 2026 y se ejecutarán en dos fases para no interrumpir completamente el tráfico. El presidente de la Diputación ha destacado el compromiso de la institución con el mantenimiento de las infraestructuras en las zonas rurales para garantizar la calidad de vida de sus habitantes.",
    categoria: "actualidad",
  },
];

export const rutas: Ruta[] = [
  {
    id: "1",
    nombre: "Ruta del Barranco",
    distancia: "5.2 km",
    dificultad: "fácil",
    duracion: "1h 30min",
    descripcion:
      "Ruta circular que bordea el barranco del río Ventosa. Ideal para familias, con zonas de descanso y observación de aves.",
    tipo: "senderismo",
  },
  {
    id: "2",
    nombre: "Ruta de los Miradores",
    distancia: "7.8 km",
    dificultad: "moderada",
    duracion: "2h 45min",
    descripcion:
      "Recorrido con tres miradores espectaculares sobre el valle. Vistas panorámicas de la Sierra de Soria.",
    tipo: "senderismo",
  },
  {
    id: "3",
    nombre: "Alto del Pinar",
    distancia: "12.4 km",
    dificultad: "difícil",
    duracion: "4h",
    descripcion:
      "Ruta de montaña hasta el pico más alto de la zona (1.680m). Atraviesa pinares y pastizales de alta montaña.",
    tipo: "senderismo",
  },
  {
    id: "4",
    nombre: "Ruta BTT La Dehesa",
    distancia: "18 km",
    dificultad: "moderada",
    duracion: "2h",
    descripcion:
      "Recorrido circular en bicicleta por caminos y sendas entre dehesas y bosques de encinas.",
    tipo: "bicicleta",
  },
  {
    id: "5",
    nombre: "Mirador del Águila",
    distancia: "2.5 km",
    dificultad: "fácil",
    duracion: "45min",
    descripcion:
      "Ascenso corto pero con gran recompensa: vistas de 360º sobre todo el valle y los pueblos cercanos.",
    tipo: "miradores",
  },
];

export const alojamientos: Alojamiento[] = [
  {
    id: "1",
    nombre: "Casa Rural El Pinar",
    tipo: "casa-rural",
    descripcion:
      "Casa rural con capacidad para 8 personas. Chimenea, jardín y barbacoa. Vistas a la sierra.",
    contacto: "casaelpinar@email.com",
    telefono: "975 111 222",
  },
  {
    id: "2",
    nombre: "Apartamentos Los Robles",
    tipo: "apartamento",
    descripcion:
      "4 apartamentos turísticos totalmente equipados en el centro del pueblo. Desde 2 hasta 6 personas.",
    contacto: "losrobles@email.com",
    telefono: "975 333 444",
  },
  {
    id: "3",
    nombre: "Hostal Ventosa",
    tipo: "hotel",
    descripcion:
      "Hostal familiar con 12 habitaciones, algunas con balcón. Restaurante y bar. Garage disponible.",
    contacto: "hostalventosa@email.com",
    telefono: "975 555 666",
  },
];

export const restaurantes: Restaurante[] = [
  {
    id: "1",
    nombre: "Restaurante Casa Julián",
    tipo: "restaurante",
    especialidad: "Asados y caza",
    descripcion:
      "Cocina tradicional soriana. Especialidad en cordero asado, chuletillas y setas de temporada.",
    contacto: "casajulian@email.com",
    telefono: "975 777 888",
  },
  {
    id: "2",
    nombre: "Bar La Plaza",
    tipo: "bar",
    especialidad: "Tapas y raciones",
    descripcion:
      "Bar de toda la vida en plena Plaza Mayor. Tapas variadas, bocadillos y menú del día.",
    contacto: "Calle Plaza, 3",
    telefono: "975 999 000",
  },
  {
    id: "3",
    nombre: "Cafetería El Mirador",
    tipo: "cafetería",
    especialidad: "Desayunos y cafés",
    descripcion:
      "Cafetería con terraza y vistas. Desayunos, cafés especiales, bollería casera y helados.",
    contacto: "Calle Real, 15",
    telefono: "975 222 333",
  },
];

export const negocios: Negocio[] = [
  {
    id: "1",
    nombre: "Panadería San Miguel",
    categoria: "Alimentación",
    descripcion: "Pan artesano y bollería casera. Pedidos para eventos.",
    direccion: "Calle Mayor, 8",
    telefono: "975 444 555",
  },
  {
    id: "2",
    nombre: "Carnicería Hermanos López",
    categoria: "Alimentación",
    descripcion: "Carnes frescas, embutidos artesanos y productos de la zona.",
    direccion: "Plaza Mayor, 5",
    telefono: "975 666 777",
  },
  {
    id: "3",
    nombre: "Farmacia Ventosa",
    categoria: "Salud",
    descripcion: "Farmacia y parafarmacia. Atención personalizada.",
    direccion: "Calle Real, 12",
    telefono: "975 888 999",
  },
  {
    id: "4",
    nombre: "Taller Mecánico El Motor",
    categoria: "Servicios",
    descripcion: "Mecánica general, ITV, neumáticos y chapa-pintura.",
    direccion: "Polígono Industrial s/n",
    telefono: "975 111 000",
  },
  {
    id: "5",
    nombre: "Artesanía La Sierra",
    categoria: "Artesanía",
    descripcion:
      "Productos artesanos locales: cerámica, madera, textil y conservas.",
    direccion: "Calle del Horno, 3",
    telefono: "975 222 111",
    web: "www.artesanialasierra.com",
  },
];

export const imagenesGaleria: ImagenGaleria[] = [
  {
    id: "1",
    titulo: "Vista panorámica de Ventosa de la Sierra",
    url: "https://images.unsplash.com/photo-1589640809518-a61a16e1b3f1?w=1200&q=80",
    categoria: "paisajes",
  },
  {
    id: "2",
    titulo: "Iglesia de San Cristóbal",
    url: "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1200&q=80",
    categoria: "patrimonio",
  },
  {
    id: "3",
    titulo: "Paisajes de la Sierra de Soria en otoño",
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    categoria: "paisajes",
  },
  {
    id: "4",
    titulo: "Fiesta de la Virgen del Rosario",
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
    categoria: "eventos",
  },
  {
    id: "5",
    titulo: "Flora de alta montaña",
    url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
    categoria: "flora-fauna",
  },
  {
    id: "6",
    titulo: "Puesta de sol en Tierras Altas",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    categoria: "paisajes",
  },
  {
    id: "7",
    titulo: "Castro de El Castillejo",
    url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=80",
    categoria: "patrimonio",
  },
  {
    id: "8",
    titulo: "Pinares de la Sierra",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    categoria: "paisajes",
  },
  {
    id: "9",
    titulo: "Arquitectura tradicional soriana",
    url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80",
    categoria: "patrimonio",
  },
  {
    id: "10",
    titulo: "Rapaces de la Sierra de Soria",
    url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&q=80",
    categoria: "flora-fauna",
  },
  {
    id: "11",
    titulo: "Cielo estrellado en la montaña",
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
    categoria: "paisajes",
  },
  {
    id: "12",
    titulo: "Procesión en las fiestas patronales",
    url: "https://images.unsplash.com/photo-1529511582893-2d7e684dd4a6?w=1200&q=80",
    categoria: "eventos",
  },
];

