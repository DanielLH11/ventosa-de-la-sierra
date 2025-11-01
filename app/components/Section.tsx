interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = "",
  fullWidth = false,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 ${className}`}>
      <div
        className={
          fullWidth ? "w-full" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        }
      >
        {children}
      </div>
    </section>
  );
}

