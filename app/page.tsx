import Link from "next/link";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Hero
        title="Bienvenido a Ventosa de la Sierra"
        subtitle="Descubre un rincón único en la provincia de Soria, donde naturaleza, historia y tradición se encuentran"
        cta={{ text: "Planifica tu visita", href: "/turismo" }}
      />

      {/* Destacados */}
      <Section>
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Descubre Ventosa
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Rutas y Naturaleza"
            description="Explora nuestras rutas de senderismo y descubre paisajes únicos en la Sierra de Soria."
            href="/turismo"
            tag="Turismo"
            image="/images/rutas.jpg"
          />
          <Card
            title="Historia y Patrimonio"
            description="Conoce nuestra iglesia románica y el rico patrimonio histórico de Ventosa."
            href="/historia"
            tag="Cultura"
            image="/images/iglesia.jpg"
          />
          <Card
            title="Agenda de Eventos"
            description="Descubre las fiestas, eventos culturales y actividades que organizamos."
            href="/agenda"
            tag="Eventos"
            image="/images/eventos.jpg"
          />
        </div>
      </Section>

      {/* Cómo llegar */}
      <Section className="bg-gray-50">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Cómo llegar
            </h2>
            <p className="mb-4 text-gray-600">
              Ventosa de la Sierra se encuentra en plena Sierra de Soria, a tan
              solo 25 km de la capital soriana. Un lugar fácilmente accesible
              por carretera y bien comunicado con las principales ciudades de la
              región.
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-600">✓</span>
                <span>Desde Soria: 30 minutos en coche</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-600">✓</span>
                <span>Desde Madrid: 2h 30min por A-2 y N-111</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-600">✓</span>
                <span>Desde Zaragoza: 2h por A-2 y CL-101</span>
              </li>
            </ul>
            <Link
              href="/como-llegar"
              className="inline-block rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Ver mapa e indicaciones
            </Link>
          </div>
          <div className="rounded-lg bg-linear-to-br from-emerald-200 to-emerald-400 p-8">
            {/* Placeholder para mapa */}
            <div className="flex h-full items-center justify-center text-center text-emerald-800">
              <div>
                <svg
                  className="mx-auto mb-4 h-16 w-16"
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
                <p className="font-semibold">Mapa interactivo</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to action */}
      <Section>
        <div className="rounded-2xl bg-emerald-600 px-8 py-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            ¿Listo para tu próxima escapada?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-emerald-50">
            Descubre todo lo que Ventosa de la Sierra tiene para ofrecerte.
            Naturaleza, historia, gastronomía y la hospitalidad de un pueblo con
            encanto.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/turismo"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
            >
              Qué ver y hacer
            </Link>
            <Link
              href="/directorio"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Dónde dormir y comer
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
