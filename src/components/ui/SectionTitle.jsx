function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-16">

      <p className="text-primary uppercase tracking-widest text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold font-heading">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;