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
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200">
          {/* Placeholder - aquí irían imágenes reales */}
          <div className="h-full w-full bg-gradient-to-br from-emerald-200 to-emerald-300" />
        </div>
      )}
      <div className="p-6">
        {tag && (
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {tag}
          </span>
        )}
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </div>
    </>
  );

  const baseClasses =
    "overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{content}</div>;
}

