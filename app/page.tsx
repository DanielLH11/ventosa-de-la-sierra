import Link from "next/link";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Hero
        title="Bienvenido a Ventosa de la Sierra"
        subtitle="Pequeño pueblo a 1.243 metros de altitud en la comarca de Tierras Altas. Descubre nuestros castros celtíberos, naturaleza y tradiciones"
        cta={{ text: "Planifica tu visita", href: "/turismo" }}
      />

      {/* Destacados */}
      <Section>
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Descubre Ventosa
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Historia y Patrimonio"
            description="Conoce la iglesia de San Cristóbal y los castros celtíberos de Ventosa."
            href="/historia"
            tag="Cultura"
            image="https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800&q=80"
          />
          <Card
            title="Rutas y Naturaleza"
            description="Explora nuestras rutas de senderismo y descubre paisajes únicos en la Sierra de Soria."
            href="/turismo"
            tag="Turismo"
            image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
          />
          <Card
            title="Agenda de Eventos"
            description="Descubre las fiestas, eventos culturales y actividades que organizamos."
            href="/agenda"
            tag="Eventos"
            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
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
              Ventosa de la Sierra es una pequeña localidad de 14 habitantes situada 
              en el municipio de Arévalo de la Sierra, en la comarca de Tierras Altas 
              y El Valle, una de las zonas más elevadas de Soria (1.243m de altitud).
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-600">✓</span>
                <span>Desde Soria capital: 40 km (45 minutos)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-600">✓</span>
                <span>Desde Madrid: 220 km (2h 45min por A-2)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-600">✓</span>
                <span>Desde Zaragoza: 180 km (2h por A-2)</span>
              </li>
            </ul>
            <Link
              href="/como-llegar"
              className="inline-block rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Ver mapa e indicaciones
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
              alt="Mapa de Ventosa de la Sierra"
              className="h-full w-full object-cover"
            />
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
            Descubre Ventosa de la Sierra: castros celtíberos milenarios, paisajes 
            de alta montaña, fiestas tradicionales y la autenticidad de un pequeño 
            pueblo soriano de 14 habitantes que conserva su esencia.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/turismo"
              className="no-underline rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
            >
              Qué ver y hacer
            </Link>
            <Link
              href="/como-llegar"
              className="no-underline rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Cómo llegar
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
