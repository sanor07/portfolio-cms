import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaShieldAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6 text-white">

      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[-100px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[180px]" />
      <div className="absolute right-[-120px] bottom-[-120px] h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[180px]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg,#ffffff22 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl text-center"
      >

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-white/5 px-5 py-2 backdrop-blur-xl">

          <FaShieldAlt className="text-blue-400" />

          <span className="text-sm tracking-widest text-blue-300 uppercase">
            Cybersecurity Portfolio
          </span>

        </div>

        {/* Heading */}

        <h1 className="text-6xl font-black leading-tight md:text-8xl">

          Hi, I'm

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">

            Sanowar Hussain

          </span>

        </h1>

        {/* Subtitle */}

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">

          Cybersecurity Enthusiast specializing in
          Detection Engineering, SIEM, SOC Operations,
          Python Automation, and Full Stack Development.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

          <button className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500">

            Explore Projects

          </button>

          <button className="rounded-2xl border border-zinc-700 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition duration-300 hover:border-blue-500">

            Download Resume

          </button>

        </div>

        {/* Socials */}

        <div className="mt-14 flex justify-center gap-8 text-3xl text-zinc-400">

          <a
            href="https://github.com/sanor07"
            target="_blank"
            rel="noreferrer"
            className="transition hover:scale-110 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sano18"
            target="_blank"
            rel="noreferrer"
            className="transition hover:scale-110 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Scroll */}

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="mt-20 flex justify-center text-2xl text-zinc-500"
        >

          <FaArrowDown />

        </motion.div>

      </motion.div>

    </section>
  );
}