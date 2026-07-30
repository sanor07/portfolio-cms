export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white",

    secondary:
      "border border-zinc-700 bg-white/5 hover:border-blue-500 text-white",

    ghost:
      "hover:bg-white/10 text-white",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}