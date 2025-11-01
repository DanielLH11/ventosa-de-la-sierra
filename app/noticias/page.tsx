import Link from "next/link";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { noticias } from "../lib/data";

export const metadata = {
  title: "Noticias - Ventosa de la Sierra",
  description:
    "Últimas noticias y actualidad de Ventosa de la Sierra.",
};

export default function NoticiasPage() {
  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "actualidad":
        return "bg-red-100 text-red-700";
      case "turismo":
        return "bg-emerald-100 text-emerald-700";
      case "cultura":
        return "bg-purple-100 text-purple-700";
      case "obras":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatFecha = (fecha: string) => {
    const date = new Date(fecha);
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <>
      <Hero
        title="Noticias"
        subtitle="Mantente informado de todo lo que ocurre en Ventosa de la Sierra"
        small
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {noticias.map((noticia) => (
              <Link
                key={noticia.id}
                href={`/noticias/${noticia.slug}`}
                className="block overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="grid gap-6 md:grid-cols-[250px_1fr]">
                  <img
                    src="https://images.unsplash.com/photo-1585241936939-be4099591252?w=500&q=80"
                    alt={noticia.titulo}
                    className="h-48 w-full object-cover md:h-full"
                  />
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoriaColor(
                          noticia.categoria
                        )}`}
                      >
                        {noticia.categoria}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatFecha(noticia.fecha)}
                      </span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {noticia.titulo}
                    </h3>
                    <p className="text-gray-600">{noticia.resumen}</p>
                    <div className="mt-4 inline-flex items-center font-semibold text-emerald-600">
                      Leer más
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {noticias.length === 0 && (
            <div className="rounded-lg bg-gray-50 p-12 text-center">
              <p className="text-gray-600">
                No hay noticias disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

