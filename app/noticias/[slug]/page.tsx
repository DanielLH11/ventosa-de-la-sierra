import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import { noticias } from "../../lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) {
    return {
      title: "Noticia no encontrada",
    };
  }

  return {
    title: `${noticia.titulo} - Noticias Ventosa de la Sierra`,
    description: noticia.resumen,
  };
}

export default async function NoticiaDetallePage({ params }: Props) {
  const { slug } = await params;
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) {
    notFound();
  }

  const formatFecha = (fecha: string) => {
    const date = new Date(fecha);
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

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

  return (
    <>
      <Hero title={noticia.titulo} small />

      <Section>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/noticias"
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
            Volver a noticias
          </Link>

          <article className="overflow-hidden rounded-xl border bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1585241936939-be4099591252?w=1200&q=80"
              alt={noticia.titulo}
              className="h-96 w-full object-cover"
            />

            <div className="p-8">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${getCategoriaColor(
                    noticia.categoria
                  )}`}
                >
                  {noticia.categoria}
                </span>
                <span className="text-gray-500">
                  {formatFecha(noticia.fecha)}
                </span>
              </div>

              <div className="prose prose-emerald prose-lg max-w-none">
                <p className="text-xl font-semibold text-gray-700">
                  {noticia.resumen}
                </p>
                <p className="whitespace-pre-line text-gray-700">
                  {noticia.contenido}
                </p>
              </div>

              <div className="mt-8 border-t pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      Compartir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Noticias relacionadas */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Más noticias
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {noticias
                .filter((n) => n.id !== noticia.id)
                .slice(0, 2)
                .map((otraNoticia) => (
                  <Link
                    key={otraNoticia.id}
                    href={`/noticias/${otraNoticia.slug}`}
                    className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1585241936939-be4099591252?w=600&q=80"
                      alt={otraNoticia.titulo}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h4 className="mb-2 font-bold text-gray-900">
                        {otraNoticia.titulo}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {otraNoticia.resumen.substring(0, 100)}...
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

