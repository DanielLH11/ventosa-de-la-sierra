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
      {/* Gradient Overlay with improved colors */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-900/85 via-emerald-800/80 to-emerald-700/75 z-10" />
      <div className="absolute inset-0 bg-black/10 z-10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: '1s' }} />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
          loading="eager"
        />
      </div>

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-fade-in mt-6 max-w-3xl text-lg font-medium text-white/95 drop-shadow-lg md:text-xl lg:text-2xl" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="no-underline animate-fade-in group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-emerald-700 shadow-2xl transition-all hover:bg-emerald-50 hover:scale-105 hover:shadow-emerald-500/50"
            style={{ animationDelay: '0.4s' }}
          >
            {cta.text}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        )}
      </div>

      {/* Scroll indicator */}
      {!small && (
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

