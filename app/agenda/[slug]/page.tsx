import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import { eventos } from "../../lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventos.map((evento) => ({
    slug: evento.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const evento = eventos.find((e) => e.slug === slug);

  if (!evento) {
    return {
      title: "Evento no encontrado",
    };
  }

  return {
    title: `${evento.titulo} - Agenda Ventosa de la Sierra`,
    description: evento.descripcion,
  };
}

export default async function EventoDetallePage({ params }: Props) {
  const { slug } = await params;
  const evento = eventos.find((e) => e.slug === slug);

  if (!evento) {
    notFound();
  }

  const formatFecha = (fecha: string) => {
    const date = new Date(fecha);
    return new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

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

  return (
    <>
      <Hero title={evento.titulo} small />

      <Section>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/agenda"
            className="mb-6 inline-flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a la agenda
          </Link>

          <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
            <div className="h-96 bg-gradient-to-br from-purple-200 to-purple-400"></div>

            <div className="p-8">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${getCategoriaColor(
                    evento.categoria
                  )}`}
                >
                  {evento.categoria}
                </span>
              </div>

              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="mb-1 flex items-center text-gray-700">
                    <svg
                      className="mr-2 h-5 w-5 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-semibold">Fecha</span>
                  </div>
                  <p className="text-gray-900">{formatFecha(evento.fecha)}</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="mb-1 flex items-center text-gray-700">
                    <svg
                      className="mr-2 h-5 w-5 text-emerald-600"
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
                    <span className="font-semibold">Lugar</span>
                  </div>
                  <p className="text-gray-900">{evento.lugar}</p>
                </div>
              </div>

              <div className="prose prose-emerald max-w-none">
                <h2 className="text-2xl font-bold text-gray-900">
                  Descripción
                </h2>
                <p className="whitespace-pre-line text-gray-700">
                  {evento.descripcionCompleta}
                </p>
              </div>

              <div className="mt-8 rounded-lg bg-emerald-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Más información
                </h3>
                <p className="text-gray-700">
                  Para más detalles sobre este evento, contacta con el
                  Ayuntamiento:
                </p>
                <p className="mt-2 text-gray-700">
                  Tel:{" "}
                  <a
                    href="tel:+34975123456"
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    975 123 456
                  </a>
                </p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a
                    href="mailto:info@ventosadelasierra.es"
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    info@ventosadelasierra.es
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

