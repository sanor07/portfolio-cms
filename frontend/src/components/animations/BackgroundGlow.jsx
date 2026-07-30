export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-500/20 blur-[160px] animate-pulse" />

      <div className="absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[180px] animate-pulse" />

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
    </>
  );
}