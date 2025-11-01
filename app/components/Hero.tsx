import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  cta?: {
    text: string;
    href: string;
  };
  small?: boolean;
}

export default function Hero({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1589640809518-a61a16e1b3f1?w=1920&q=80",
  cta,
  small = false,
}: HeroProps) {
  const heightClass = small ? "h-64 md:h-80" : "h-96 md:h-[32rem]";

  return (
    <div className={`relative ${heightClass} w-full overflow-hidden`}>
      <div className="absolute inset-0 bg-linear-to-r from-emerald-900/90 to-emerald-700/70 z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 rounded-full bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl"
          >
            {cta.text}
          </Link>
        )}
      </div>
    </div>
  );
}

