"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { rutas, alojamientos, restaurantes } from "../lib/data";

export default function TurismoPage() {
  const [filtroRutas, setFiltroRutas] = useState<string>("todas");
  const [filtroAlojamiento, setFiltroAlojamiento] = useState<string>("todos");
  const [filtroRestaurante, setFiltroRestaurante] = useState<string>("todos");

  const rutasFiltradas =
    filtroRutas === "todas"
      ? rutas
      : rutas.filter((r) => r.tipo === filtroRutas);

  const alojamientosFiltrados =
    filtroAlojamiento === "todos"
      ? alojamientos
      : alojamientos.filter((a) => a.tipo === filtroAlojamiento);

  const restaurantesFiltrados =
    filtroRestaurante === "todos"
      ? restaurantes
      : restaurantes.filter((r) => r.tipo === filtroRestaurante);

  const getDificultadColor = (dificultad: string) => {
    switch (dificultad) {
      case "fácil":
        return "bg-green-100 text-green-700";
      case "moderada":
        return "bg-yellow-100 text-yellow-700";
      case "difícil":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      <Hero
        title="Turismo en Ventosa"
        subtitle="Rutas, alojamientos y gastronomía para disfrutar de tu visita"
        small
      />

      {/* Rutas de senderismo */}
      <Section>
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Rutas y Senderismo
        </h2>

        {/* Filtros */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroRutas("todas")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRutas === "todas"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFiltroRutas("senderismo")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRutas === "senderismo"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Senderismo
          </button>
          <button
            onClick={() => setFiltroRutas("bicicleta")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRutas === "bicicleta"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Bicicleta
          </button>
          <button
            onClick={() => setFiltroRutas("miradores")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRutas === "miradores"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Miradores
          </button>
        </div>

        {/* Lista de rutas */}
        <div className="grid gap-6 md:grid-cols-2">
          {rutasFiltradas.map((ruta) => (
            <div
              key={ruta.id}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-48 bg-gradient-to-br from-green-200 to-green-400"></div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {ruta.nombre}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getDificultadColor(
                      ruta.dificultad
                    )}`}
                  >
                    {ruta.dificultad}
                  </span>
                </div>
                <p className="mb-4 text-gray-600">{ruta.descripcion}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  <div className="flex items-center">
                    <svg
                      className="mr-1 h-4 w-4 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 013.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    {ruta.distancia}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-1 h-4 w-4 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {ruta.duracion}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dónde dormir */}
      <Section className="bg-gray-50">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Dónde dormir</h2>

        {/* Filtros */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroAlojamiento("todos")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroAlojamiento === "todos"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFiltroAlojamiento("casa-rural")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroAlojamiento === "casa-rural"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Casas Rurales
          </button>
          <button
            onClick={() => setFiltroAlojamiento("apartamento")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroAlojamiento === "apartamento"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Apartamentos
          </button>
          <button
            onClick={() => setFiltroAlojamiento("hotel")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroAlojamiento === "hotel"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Hoteles
          </button>
        </div>

        {/* Lista de alojamientos */}
        <div className="grid gap-6 md:grid-cols-3">
          {alojamientosFiltrados.map((alojamiento) => (
            <div
              key={alojamiento.id}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-400"></div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {alojamiento.nombre}
                </h3>
                <p className="mb-3 text-sm text-gray-600">
                  {alojamiento.descripcion}
                </p>
                <div className="space-y-1 text-sm text-gray-700">
                  {alojamiento.telefono && (
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {alojamiento.telefono}
                    </div>
                  )}
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {alojamiento.contacto}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dónde comer */}
      <Section>
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Dónde comer</h2>

        {/* Filtros */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroRestaurante("todos")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRestaurante === "todos"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFiltroRestaurante("restaurante")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRestaurante === "restaurante"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Restaurantes
          </button>
          <button
            onClick={() => setFiltroRestaurante("bar")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRestaurante === "bar"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Bares
          </button>
          <button
            onClick={() => setFiltroRestaurante("cafetería")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filtroRestaurante === "cafetería"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Cafeterías
          </button>
        </div>

        {/* Lista de restaurantes */}
        <div className="grid gap-6 md:grid-cols-3">
          {restaurantesFiltrados.map((restaurante) => (
            <div
              key={restaurante.id}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-40 bg-gradient-to-br from-orange-200 to-orange-400"></div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {restaurante.nombre}
                </h3>
                <p className="mb-1 text-sm font-semibold text-emerald-600">
                  {restaurante.especialidad}
                </p>
                <p className="mb-3 text-sm text-gray-600">
                  {restaurante.descripcion}
                </p>
                <div className="space-y-1 text-sm text-gray-700">
                  {restaurante.telefono && (
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {restaurante.telefono}
                    </div>
                  )}
                  <div className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {restaurante.contacto}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

