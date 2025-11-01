import Hero from "../components/Hero";
import Section from "../components/Section";

export const metadata = {
  title: "Historia y Patrimonio - Ventosa de la Sierra",
  description:
    "Descubre la rica historia y patrimonio de Ventosa de la Sierra, desde sus orígenes medievales hasta la actualidad.",
};

export default function HistoriaPage() {
  return (
    <>
      <Hero
        title="Historia y Patrimonio"
        subtitle="Un viaje por los siglos de historia de Ventosa de la Sierra"
        small
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          {/* Timeline */}
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Cronología histórica
            </h2>
            <div className="space-y-8">
              <div className="relative border-l-4 border-emerald-600 pl-8">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-emerald-600"></div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Siglo XI - Orígenes medievales
                </h3>
                <p className="text-gray-600">
                  Los primeros asentamientos documentados en Ventosa de la
                  Sierra datan del siglo XI, durante la repoblación cristiana de
                  estas tierras. El nombre "Ventosa" hace referencia a los
                  fuertes vientos que caracterizan la zona de alta montaña.
                </p>
              </div>

              <div className="relative border-l-4 border-emerald-600 pl-8">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-emerald-600"></div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Siglo XII - Construcción de la iglesia
                </h3>
                <p className="text-gray-600">
                  Se erige la Iglesia de San Miguel Arcángel, magnífico ejemplo
                  del románico soriano. Su torre campanario, visible desde todo
                  el valle, se convierte en símbolo del pueblo.
                </p>
              </div>

              <div className="relative border-l-4 border-emerald-600 pl-8">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-emerald-600"></div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Siglos XIV-XVII - Época de esplendor
                </h3>
                <p className="text-gray-600">
                  Ventosa alcanza su máxima población gracias a la ganadería
                  trashumante. Las rutas de la Mesta pasan por nuestras tierras
                  y el comercio de lana trae prosperidad.
                </p>
              </div>

              <div className="relative border-l-4 border-emerald-600 pl-8">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-emerald-600"></div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Siglo XIX - Época contemporánea
                </h3>
                <p className="text-gray-600">
                  La desamortización y los cambios sociales transforman el
                  pueblo. Se construyen las escuelas, el ayuntamiento actual y
                  se mejoran los caminos.
                </p>
              </div>

              <div className="relative border-l-4 border-emerald-600 pl-8">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-emerald-600"></div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Siglo XXI - Renovación
                </h3>
                <p className="text-gray-600">
                  Ventosa apuesta por el turismo rural sostenible,
                  conservando su patrimonio y naturaleza mientras mira al futuro
                  con conectividad digital y servicios modernos.
                </p>
              </div>
            </div>
          </div>

          {/* Patrimonio */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Patrimonio destacado
            </h2>
            <div className="space-y-8">
              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1200&q=80"
                  alt="Iglesia de San Cristóbal"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Iglesia de San Cristóbal
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Reformada en el siglo XVIII
                  </p>
                  <p className="mb-4 text-gray-600">
                    La Iglesia de San Cristóbal es el principal templo de Ventosa de la Sierra.
                    Reformada en el siglo XVIII sobre una construcción anterior, conserva elementos 
                    arquitectónicos de gran valor. Su interior alberga mobiliario litúrgico tradicional 
                    y es el centro de las celebraciones religiosas del pueblo, especialmente durante 
                    las fiestas de la Virgen del Rosario en septiembre.
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Horario de visitas:
                    </p>
                    <p className="text-sm text-gray-600">
                      Sábados y domingos: 11:00 - 14:00 y 17:00 - 19:00
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Visitas guiadas previa cita en el Ayuntamiento
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=80"
                  alt="Castro de El Castillejo"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Castro de El Castillejo
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Edad del Hierro - Celtíbero
                  </p>
                  <p className="mb-4 text-gray-600">
                    Situado sobre un cerro cónico a 1.333 metros de altitud, el Castro de El Castillejo
                    domina la cabecera del río Zarranzano. Este yacimiento arqueológico es un importante
                    vestigio de la presencia celtíbera en la Sierra de Soria. Conserva restos de
                    murallas y estructuras de viviendas que permiten comprender cómo vivían nuestros
                    antepasados hace más de 2.000 años.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80"
                  alt="Castro de Los Villares"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Castro de Los Villares
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Edad del Hierro - Celtíbero
                  </p>
                  <p className="mb-4 text-gray-600">
                    Ubicado 300 metros al oeste del pueblo, el Castro de Los Villares domina
                    estratégicamente el valle de Arévalo. Este poblado celtíbero fortificado
                    es testimonio de la importancia que tuvo esta zona en la antigüedad.
                    Las vistas desde el castro son espectaculares y permiten comprender su
                    valor estratégico defensivo.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1589640809518-a61a16e1b3f1?w=1200&q=80"
                  alt="Paisaje de Ventosa"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Arquitectura Popular
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Siglos XVIII-XIX
                  </p>
                  <p className="mb-4 text-gray-600">
                    Ventosa conserva ejemplos de arquitectura tradicional soriana
                    adaptada a la alta montaña. Casas de piedra y madera, con grandes
                    muros para protegerse del frío invernal característico de esta zona,
                    situada a más de 1.200 metros de altitud. El conjunto urbano se adapta
                    a la topografía del terreno creando un paisaje armonioso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

