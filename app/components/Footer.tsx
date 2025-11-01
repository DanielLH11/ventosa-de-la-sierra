import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-emerald-700">
              Ventosa de la Sierra
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Localidad del municipio de Arévalo de la Sierra, en la provincia de Soria, Castilla y León. 
              Situada a 1.243 metros de altitud en la comarca de Tierras Altas y El Valle. 
              Un lugar único para descubrir la naturaleza, historia celtíbera y las tradiciones de la alta montaña soriana.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Enlaces</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/turismo"
                  className="text-sm text-gray-600 hover:text-emerald-600"
                >
                  Qué ver
                </Link>
              </li>
              <li>
                <Link
                  href="/agenda"
                  className="text-sm text-gray-600 hover:text-emerald-600"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/directorio"
                  className="text-sm text-gray-600 hover:text-emerald-600"
                >
                  Directorio
                </Link>
              </li>
              <li>
                <Link
                  href="/como-llegar"
                  className="text-sm text-gray-600 hover:text-emerald-600"
                >
                  Cómo llegar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Ayuntamiento de Arévalo de la Sierra</li>
              <li>Plaza Mayor, 1</li>
              <li>42146 Arévalo de la Sierra, Soria</li>
              <li className="mt-3">
                <a
                  href="tel:+34975397001"
                  className="hover:text-emerald-600"
                >
                  Tel: 975 397 001
                </a>
              </li>
              <li>
                <a
                  href="mailto:arevalodelasierra@dipsoria.es"
                  className="hover:text-emerald-600"
                >
                  arevalodelasierra@dipsoria.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Ayuntamiento de Ventosa de la Sierra. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

