export interface Evento {
  id: string;
  slug: string;
  titulo: string;
  fecha: string;
  descripcion: string;
  descripcionCompleta: string;
  lugar: string;
  imagen?: string;
  categoria: "fiesta" | "cultural" | "deportivo" | "gastronómico";
}

export interface Noticia {
  id: string;
  slug: string;
  titulo: string;
  fecha: string;
  resumen: string;
  contenido: string;
  imagen?: string;
  categoria: "actualidad" | "turismo" | "cultura" | "obras";
}

export interface Ruta {
  id: string;
  nombre: string;
  distancia: string;
  dificultad: "fácil" | "moderada" | "difícil";
  duracion: string;
  descripcion: string;
  tipo: "senderismo" | "bicicleta" | "miradores";
}

export interface Alojamiento {
  id: string;
  nombre: string;
  tipo: "hotel" | "casa-rural" | "apartamento";
  descripcion: string;
  contacto: string;
  telefono?: string;
}

export interface Restaurante {
  id: string;
  nombre: string;
  tipo: "restaurante" | "bar" | "cafetería";
  especialidad: string;
  descripcion: string;
  contacto: string;
  telefono?: string;
}

export interface Negocio {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  direccion?: string;
  telefono?: string;
  email?: string;
  web?: string;
}

export interface ImagenGaleria {
  id: string;
  titulo: string;
  url: string;
  categoria: "paisajes" | "patrimonio" | "eventos" | "flora-fauna";
}

