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
                <div className="h-64 bg-gradient-to-br from-amber-200 to-amber-400"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Iglesia de San Miguel Arcángel
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Románico - Siglo XII
                  </p>
                  <p className="mb-4 text-gray-600">
                    Joya del románico soriano con elementos únicos. Destaca su
                    portada sur con arquivoltas decoradas, el ábside semicircular
                    con canecillos figurados y las pinturas murales del siglo XV
                    recientemente restauradas. La torre campanario, de tres
                    cuerpos, es visible desde kilómetros a la redonda.
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
                <div className="h-64 bg-gradient-to-br from-stone-200 to-stone-400"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Ermita de la Virgen del Camino
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Barroco - Siglo XVII
                  </p>
                  <p className="mb-4 text-gray-600">
                    Pequeña ermita situada en un alto junto al camino que
                    antiguamente llevaba a Soria. Es lugar de romería cada año
                    el primer domingo de septiembre. En su interior se conserva
                    una talla policromada de la Virgen del siglo XVI.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-400"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Puente Medieval
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Medieval - Siglo XIV
                  </p>
                  <p className="mb-4 text-gray-600">
                    Puente de piedra de un solo ojo sobre el arroyo de Ventosa.
                    Formaba parte de la red de caminos medievales que cruzaban
                    la sierra. Recientemente consolidado, es punto de paso de
                    varias rutas de senderismo.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="h-64 bg-gradient-to-br from-green-200 to-green-400"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Rollo Jurisdiccional
                  </h3>
                  <p className="mb-4 text-sm text-emerald-600">
                    Siglo XVI
                  </p>
                  <p className="mb-4 text-gray-600">
                    Picota o rollo situado en la antigua plaza que simbolizaba
                    la jurisdicción del señorío. Es uno de los mejor conservados
                    de la provincia, con escudo nobiliario y remate piramidal.
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

