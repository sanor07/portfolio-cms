export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:bg-white/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}