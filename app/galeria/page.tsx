"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { imagenesGaleria } from "../lib/data";
import type { ImagenGaleria } from "../lib/types";

export default function GaleriaPage() {
  const [filtroActivo, setFiltroActivo] = useState<string>("todas");
  const [imagenSeleccionada, setImagenSeleccionada] =
    useState<ImagenGaleria | null>(null);

  const categorias = [
    { id: "todas", label: "Todas" },
    { id: "paisajes", label: "Paisajes" },
    { id: "patrimonio", label: "Patrimonio" },
    { id: "eventos", label: "Eventos" },
    { id: "flora-fauna", label: "Flora y Fauna" },
  ];

  const imagenesFiltradas =
    filtroActivo === "todas"
      ? imagenesGaleria
      : imagenesGaleria.filter((img) => img.categoria === filtroActivo);

  return (
    <>
      <Hero
        title="Galería de Imágenes"
        subtitle="Descubre Ventosa de la Sierra a través de nuestras fotografías"
        small
      />

      <Section>
        {/* Filtros */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltroActivo(cat.id)}
              className={`rounded-full px-6 py-2 font-medium transition-all ${
                filtroActivo === cat.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imagenesFiltradas.map((imagen) => (
            <div
              key={imagen.id}
              onClick={() => setImagenSeleccionada(imagen)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-emerald-200 to-emerald-400 shadow-md transition-all hover:shadow-xl"
            >
              {/* Placeholder - aquí irían imágenes reales */}
              <div className="h-full w-full bg-gradient-to-br from-emerald-300 to-emerald-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                <h3 className="font-semibold text-white">{imagen.titulo}</h3>
                <p className="text-sm text-white/80">
                  {categorias.find((c) => c.id === imagen.categoria)?.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {imagenesFiltradas.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No hay imágenes en esta categoría
          </div>
        )}
      </Section>

      {/* Lightbox */}
      {imagenSeleccionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setImagenSeleccionada(null)}
        >
          <button
            onClick={() => setImagenSeleccionada(null)}
            className="absolute right-4 top-4 text-white hover:text-gray-300"
            aria-label="Cerrar"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-500"></div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">
                {imagenSeleccionada.titulo}
              </h3>
              <p className="text-white/80">
                {
                  categorias.find((c) => c.id === imagenSeleccionada.categoria)
                    ?.label
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

