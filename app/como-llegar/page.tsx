import Hero from "../components/Hero";
import Section from "../components/Section";

export const metadata = {
  title: "Cómo llegar - Ventosa de la Sierra",
  description:
    "Consulta cómo llegar a Ventosa de la Sierra en coche, transporte público y las mejores rutas desde las principales ciudades.",
};

export default function ComoLlegarPage() {
  return (
    <>
      <Hero
        title="Cómo llegar"
        subtitle="Te explicamos cómo llegar a Ventosa de la Sierra desde cualquier lugar"
        small
      />

      <Section>
        <div className="mx-auto max-w-5xl">
          {/* Mapa placeholder */}
          <div className="mb-12 overflow-hidden rounded-xl shadow-lg">
            <div className="flex h-96 items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-300">
              <div className="text-center text-emerald-800">
                <svg
                  className="mx-auto mb-4 h-20 w-20"
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
                <p className="text-lg font-semibold">
                  Mapa interactivo de ubicación
                </p>
                <p className="mt-2 text-sm">
                  Coordenadas: 41.7234°N, 2.5678°W
                </p>
              </div>
            </div>
          </div>

          {/* En coche */}
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">En coche</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Desde Madrid
                    </h3>
                    <p className="text-sm text-emerald-600">
                      ~220 km · 2h 30min
                    </p>
                  </div>
                </div>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Tomar A-2 dirección Zaragoza</li>
                  <li>2. Salida 152 hacia Almazán por N-111</li>
                  <li>3. En Almazán, tomar SO-160 hacia El Burgo de Osma</li>
                  <li>4. Continuar por SO-132 hasta Ventosa de la Sierra</li>
                </ol>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 013.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Desde Zaragoza
                    </h3>
                    <p className="text-sm text-emerald-600">~180 km · 2h</p>
                  </div>
                </div>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Tomar A-2 dirección Madrid</li>
                  <li>2. Salida 203 hacia Soria por CL-101</li>
                  <li>3. Continuar hasta Almazán</li>
                  <li>4. Tomar SO-132 hasta Ventosa de la Sierra</li>
                </ol>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 013.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Desde Soria capital
                    </h3>
                    <p className="text-sm text-emerald-600">~25 km · 30min</p>
                  </div>
                </div>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Salir de Soria por N-111 dirección Almazán</li>
                  <li>2. A 10 km, tomar SO-132 hacia la derecha</li>
                  <li>3. Continuar 15 km hasta Ventosa de la Sierra</li>
                </ol>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 013.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Desde Burgos
                    </h3>
                    <p className="text-sm text-emerald-600">~140 km · 1h 45min</p>
                  </div>
                </div>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Tomar N-234 dirección Soria</li>
                  <li>2. En El Burgo de Osma, continuar por N-122</li>
                  <li>3. Tomar SO-160 y luego SO-132</li>
                  <li>4. Llegar a Ventosa de la Sierra</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Transporte público */}
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Transporte público
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Autobús</h3>
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  Hay servicio regular de autobús desde Soria capital hasta
                  Ventosa de la Sierra.
                </p>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="mb-2 font-semibold text-gray-900">Horarios:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Lunes a viernes: 8:00, 14:00 y 18:30 desde Soria</li>
                    <li>• Sábados: 10:00 y 18:00 desde Soria</li>
                    <li>• Domingos y festivos: 10:00 desde Soria</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    Información y reservas: Tel. 975 212 345
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <svg
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Tren</h3>
                  </div>
                </div>
                <p className="mb-3 text-gray-600">
                  La estación de tren más cercana es Soria, con conexiones
                  AVANT a Madrid (Chamartín) varias veces al día.
                </p>
                <div className="rounded-lg bg-purple-50 p-4">
                  <p className="mb-2 font-semibold text-gray-900">
                    Desde la estación de Soria:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                      • Taxi hasta Ventosa: ~30 minutos (aprox. 35-40€)
                    </li>
                    <li>• Autobús de línea (ver horarios arriba)</li>
                    <li>• Alquiler de coche (varias empresas disponibles)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="rounded-xl bg-emerald-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Información útil
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Parking
                </h4>
                <p className="text-sm text-gray-600">
                  Parking gratuito en la Plaza del Ayuntamiento y en la zona
                  deportiva. Acceso fácil para autocaravanas.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Gasolinera
                </h4>
                <p className="text-sm text-gray-600">
                  La gasolinera más cercana está en Almazán (18 km) y en Soria
                  capital (25 km).
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Accesibilidad
                </h4>
                <p className="text-sm text-gray-600">
                  El casco urbano cuenta con rampas y accesos adaptados en los
                  principales edificios públicos.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Oficina de Turismo
                </h4>
                <p className="text-sm text-gray-600">
                  Plaza Mayor, 1 - Tel: 975 123 456
                  <br />
                  Horario: L-V 10:00-14:00 y 16:00-19:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

