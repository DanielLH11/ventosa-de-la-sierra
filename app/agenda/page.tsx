import Link from "next/link";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { eventos } from "../lib/data";

export const metadata = {
  title: "Agenda de Eventos - Ventosa de la Sierra",
  description:
    "Consulta la agenda de eventos, fiestas y actividades en Ventosa de la Sierra.",
};

export default function AgendaPage() {
  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "fiesta":
        return "bg-purple-100 text-purple-700";
      case "cultural":
        return "bg-blue-100 text-blue-700";
      case "deportivo":
        return "bg-green-100 text-green-700";
      case "gastronómico":
        return "bg-orange-100 text-orange-700";
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
        title="Agenda de Eventos"
        subtitle="No te pierdas ninguna actividad en Ventosa de la Sierra"
        small
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {eventos.map((evento) => (
              <Link
                key={evento.id}
                href={`/agenda/${evento.slug}`}
                className="block overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80"
                    alt={evento.titulo}
                    className="h-48 w-full object-cover md:h-full"
                  />
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoriaColor(
                          evento.categoria
                        )}`}
                      >
                        {evento.categoria}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatFecha(evento.fecha)}
                      </span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {evento.titulo}
                    </h3>
                    <p className="mb-3 text-gray-600">{evento.descripcion}</p>
                    <div className="flex items-center text-sm text-emerald-600">
                      <svg
                        className="mr-1 h-4 w-4"
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
                      {evento.lugar}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {eventos.length === 0 && (
            <div className="rounded-lg bg-gray-50 p-12 text-center">
              <p className="text-gray-600">
                No hay eventos programados en este momento. ¡Vuelve pronto para
                ver las novedades!
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

