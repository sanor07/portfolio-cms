export default function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <div className="mb-20 text-center">

      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
          {subtitle}
        </p>
      )}

    </div>
  );
}