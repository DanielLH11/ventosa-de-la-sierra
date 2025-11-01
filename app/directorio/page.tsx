"use client";

import { useState, useMemo } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { negocios } from "../lib/data";

export default function DirectorioPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("todas");

  // Obtener categorías únicas
  const categorias = useMemo(() => {
    const cats = Array.from(new Set(negocios.map((n) => n.categoria)));
    return ["todas", ...cats];
  }, []);

  // Filtrar negocios
  const negociosFiltrados = useMemo(() => {
    return negocios.filter((negocio) => {
      const matchBusqueda =
        busqueda === "" ||
        negocio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        negocio.descripcion.toLowerCase().includes(busqueda.toLowerCase());

      const matchCategoria =
        categoriaFiltro === "todas" || negocio.categoria === categoriaFiltro;

      return matchBusqueda && matchCategoria;
    });
  }, [busqueda, categoriaFiltro]);

  return (
    <>
      <Hero
        title="Directorio de Negocios"
        subtitle="Encuentra todos los servicios y comercios locales de Ventosa de la Sierra"
        small
      />

      <Section>
        <div className="mx-auto max-w-6xl">
          {/* Búsqueda */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por nombre o servicio..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-12 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <svg
                className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filtros de categoría */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaFiltro(categoria)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  categoriaFiltro === categoria
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </button>
            ))}
          </div>

          {/* Resultados */}
          <div className="mb-4 text-gray-600">
            {negociosFiltrados.length} resultado
            {negociosFiltrados.length !== 1 ? "s" : ""} encontrado
            {negociosFiltrados.length !== 1 ? "s" : ""}
          </div>

          {/* Grid de negocios */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {negociosFiltrados.map((negocio) => (
              <div
                key={negocio.id}
                className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt={negocio.nombre}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {negocio.categoria}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {negocio.nombre}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {negocio.descripcion}
                  </p>

                  <div className="space-y-2 text-sm text-gray-700">
                    {negocio.direccion && (
                      <div className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
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
                        <span>{negocio.direccion}</span>
                      </div>
                    )}

                    {negocio.telefono && (
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
                        <a
                          href={`tel:${negocio.telefono.replace(/\s/g, "")}`}
                          className="hover:text-emerald-600"
                        >
                          {negocio.telefono}
                        </a>
                      </div>
                    )}

                    {negocio.email && (
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
                        <a
                          href={`mailto:${negocio.email}`}
                          className="hover:text-emerald-600"
                        >
                          {negocio.email}
                        </a>
                      </div>
                    )}

                    {negocio.web && (
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
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        <a
                          href={`https://${negocio.web}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-600"
                        >
                          {negocio.web}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {negociosFiltrados.length === 0 && (
            <div className="rounded-lg bg-gray-50 p-12 text-center">
              <svg
                className="mx-auto mb-4 h-16 w-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-gray-600">
                No se encontraron negocios que coincidan con tu búsqueda.
              </p>
              <button
                onClick={() => {
                  setBusqueda("");
                  setCategoriaFiltro("todas");
                }}
                className="mt-4 text-emerald-600 hover:text-emerald-700"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Información adicional */}
          <div className="mt-12 rounded-xl bg-emerald-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              ¿Tienes un negocio en Ventosa?
            </h3>
            <p className="mb-4 text-gray-700">
              Si eres propietario de un negocio o servicio local y quieres
              aparecer en este directorio, contáctanos.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@ventosadelasierra.es?subject=Alta en directorio"
                className="inline-block rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Contactar
              </a>
              <a
                href="tel:+34975123456"
                className="inline-block rounded-lg border-2 border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
              >
                Llamar al Ayuntamiento
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

