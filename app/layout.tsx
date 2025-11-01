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
    "Descubre Ventosa de la Sierra, un encantador pueblo en la provincia de Soria. Naturaleza, historia, rutas de senderismo y tradiciones en plena Sierra de Soria.",
  keywords:
    "Ventosa de la Sierra, Soria, turismo rural, senderismo, naturaleza, Castilla y León",
  openGraph: {
    title: "Ventosa de la Sierra",
    description:
      "Turismo rural, naturaleza e historia en la Sierra de Soria",
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
