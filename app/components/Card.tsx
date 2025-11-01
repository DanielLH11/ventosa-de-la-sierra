import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  tag?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  href,
  tag,
  className = "",
}: CardProps) {
  const content = (
    <>
      {image && (
        <div className="group/image relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="relative p-6">
        {tag && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-emerald-100 to-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            {tag}
          </span>
        )}
        <h3 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        )}
        {href && (
          <div className="mt-4 flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
            <span>Ver más</span>
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  const baseClasses =
    "group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1";

  if (href) {
    return (
      <Link href={href} className={`no-underline ${baseClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{content}</div>;
}

