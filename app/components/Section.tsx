interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({
  children,
  className = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
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

