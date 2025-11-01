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
    slug: "fiestas-patronales-agosto",
    titulo: "Fiestas Patronales de San Roque",
    fecha: "2025-08-15",
    descripcion:
      "Celebración de las fiestas patronales con verbena, actividades tradicionales y mucho más.",
    descripcionCompleta:
      "Las Fiestas Patronales de San Roque son el evento más importante del año en Ventosa de la Sierra. Durante tres días, el pueblo se llena de música, tradición y alegría. El programa incluye misa solemne, procesión, juegos tradicionales para los más pequeños, partidos de pelota, verbena popular con orquesta, y la tradicional comida popular en la plaza del pueblo. Un momento perfecto para conocer nuestras costumbres y disfrutar del ambiente festivo que caracteriza a nuestro pueblo.",
    lugar: "Plaza Mayor",
    categoria: "fiesta",
  },
  {
    id: "2",
    slug: "ruta-micologica-octubre",
    titulo: "Ruta Micológica Guiada",
    fecha: "2025-10-20",
    descripcion:
      "Descubre las setas de nuestros bosques con expertos micólogos.",
    descripcionCompleta:
      "Una jornada perfecta para los amantes de la naturaleza y la micología. Acompañados por expertos micólogos, recorreremos los bosques de pinos y robles de la zona en busca de las especies de setas más características del otoño soriano. Aprenderemos a identificarlas, conoceremos sus propiedades y hablaremos sobre la importancia de la recolección sostenible. La ruta incluye degustación de productos micológicos al finalizar. Plazas limitadas, inscripción previa necesaria.",
    lugar: "Centro de Interpretación",
    categoria: "cultural",
  },
  {
    id: "3",
    slug: "mercado-medieval-junio",
    titulo: "Mercado Medieval",
    fecha: "2025-06-28",
    descripcion: "Viaje al pasado con nuestro tradicional mercado medieval.",
    descripcionCompleta:
      "El casco histórico de Ventosa se transforma durante un fin de semana completo en un auténtico mercado medieval. Artesanos, trovadores, malabares y puestos de productos tradicionales llenan nuestras calles. Podrás disfrutar de espectáculos de cetrería, combates de esgrima histórica, talleres infantiles, y degustar comida medieval. Los vecinos nos vestimos de época y el ambiente festivo inunda cada rincón del pueblo. Una experiencia única para toda la familia.",
    lugar: "Casco histórico",
    categoria: "cultural",
  },
];

export const noticias: Noticia[] = [
  {
    id: "1",
    slug: "nuevas-rutas-senalizadas",
    titulo: "Inauguradas 3 nuevas rutas de senderismo señalizadas",
    fecha: "2025-10-15",
    resumen:
      "El ayuntamiento ha finalizado las obras de señalización de tres nuevas rutas que conectan con parajes naturales únicos.",
    contenido:
      "El Ayuntamiento de Ventosa de la Sierra ha inaugurado oficialmente tres nuevas rutas de senderismo perfectamente señalizadas que permitirán a vecinos y visitantes disfrutar de nuestro incomparable entorno natural de forma segura y organizada.\n\nLas rutas son: Ruta del Barranco (5,2 km), Ruta de los Miradores (7,8 km) y Ruta del Alto del Pinar (12,4 km). Todas ellas cuentan con paneles informativos al inicio explicando la flora, fauna e historia de cada recorrido, así como postes direccionales cada 500 metros.\n\nEste proyecto, financiado por fondos LEADER de la Unión Europea y la Diputación de Soria, supone una inversión de 45.000 euros y busca potenciar el turismo sostenible en nuestra localidad. Ya están disponibles los tracks GPS descargables en nuestra página web.",
    categoria: "turismo",
  },
  {
    id: "2",
    slug: "restauracion-iglesia-finalizada",
    titulo: "Concluyen las obras de restauración de la Iglesia de San Miguel",
    fecha: "2025-09-10",
    resumen:
      "Después de 8 meses de trabajos, nuestra iglesia románica luce esplendorosa.",
    contenido:
      "Han finalizado los trabajos de restauración integral de la Iglesia de San Miguel, joya del románico soriano y emblema de nuestro patrimonio histórico-artístico.\n\nLas obras, que han durado ocho meses, han incluido la consolidación de la torre campanario, la restauración de las pinturas murales del siglo XV descubiertas en el ábside, la reparación de la cubierta y el refuerzo de los muros perimetrales. También se ha mejorado la iluminación interior con tecnología LED que resalta los elementos arquitectónicos más relevantes.\n\nLa inversión total ha sido de 320.000 euros, financiados por la Junta de Castilla y León y el Obispado de Osma-Soria. La iglesia reabre al culto y a las visitas turísticas este mismo fin de semana con un horario ampliado. Se organizarán visitas guiadas gratuitas durante todo el mes de septiembre.",
    categoria: "cultura",
  },
  {
    id: "3",
    slug: "fibra-optica-disponible",
    titulo: "Ventosa ya cuenta con fibra óptica de alta velocidad",
    fecha: "2025-08-20",
    resumen:
      "La digitalización llega a nuestro pueblo: 100% de cobertura de fibra óptica.",
    contenido:
      "Ventosa de la Sierra entra en la era digital con la finalización del despliegue de fibra óptica en todo el municipio. A partir de ahora, el 100% de viviendas y negocios pueden contratar conexiones de hasta 1Gbps de velocidad simétrica.\n\nEsta mejora es fundamental para frenar la despoblación, permitir el teletrabajo, mejorar la calidad de vida de los vecinos y atraer nuevos residentes y emprendedores. Varias operadoras ofrecen ya sus servicios en la localidad con tarifas competitivas.\n\nEl proyecto ha sido posible gracias al Plan de Conectividad del Gobierno de España y supone una inversión de 180.000 euros. El alcalde ha destacado que 'este es un paso histórico para Ventosa que nos pone en igualdad de condiciones con cualquier ciudad en cuanto a conectividad digital'.",
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
    titulo: "Vista del pueblo al amanecer",
    url: "/images/galeria/pueblo-amanecer.jpg",
    categoria: "paisajes",
  },
  {
    id: "2",
    titulo: "Iglesia de San Miguel",
    url: "/images/galeria/iglesia.jpg",
    categoria: "patrimonio",
  },
  {
    id: "3",
    titulo: "Ruta del Barranco en otoño",
    url: "/images/galeria/ruta-barranco.jpg",
    categoria: "paisajes",
  },
  {
    id: "4",
    titulo: "Fiestas patronales",
    url: "/images/galeria/fiestas.jpg",
    categoria: "eventos",
  },
  {
    id: "5",
    titulo: "Cigüeña en el campanario",
    url: "/images/galeria/ciguena.jpg",
    categoria: "flora-fauna",
  },
  {
    id: "6",
    titulo: "Puesta de sol desde el Mirador del Águila",
    url: "/images/galeria/puesta-sol.jpg",
    categoria: "paisajes",
  },
];

