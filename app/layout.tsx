import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ventosa de la Sierra - Turismo y Naturaleza en Soria",
  description:
    "Descubre Ventosa de la Sierra, localidad de Arévalo de la Sierra en Soria. A 1.243m de altitud en Tierras Altas. Castros celtíberos, naturaleza y tradiciones.",
  keywords:
    "Ventosa de la Sierra, Arévalo de la Sierra, Soria, turismo rural, senderismo, castros celtíberos, Tierras Altas, Castilla y León",
  openGraph: {
    title: "Ventosa de la Sierra - Soria",
    description:
      "Turismo rural, castros celtíberos y naturaleza en la Sierra de Soria a 1.243m de altitud",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
