import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
  FaShieldAlt,
  FaPython,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiReact } from "react-icons/si";

export default function Hero() {
  const tech = [
    { name: "Python", icon: <FaPython /> },
    { name: "React", icon: <SiReact /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#09090B] pt-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-44 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff22 1px, transparent 1px),linear-gradient(90deg,#ffffff22 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-20 lg:flex-row">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">

            <FaShieldAlt className="text-blue-400" />

            <span className="text-sm uppercase tracking-[0.25em] text-blue-300">
              Cybersecurity Portfolio
            </span>

          </div>

          <h1 className="text-6xl font-black leading-tight text-white md:text-8xl">

            Sanowar
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Hussain
            </span>

          </h1>

          <h2 className="mt-8 text-2xl font-semibold text-zinc-300">

            Detection Engineering • SOC • SIEM • Python Developer

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

            Building enterprise cybersecurity labs,
            automation tools, detection rules,
            and modern full-stack applications.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-500">

              Explore Projects

            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition hover:border-blue-500">

              <FaDownload />

              Resume

            </button>

          </div>

          <div className="mt-12 flex items-center gap-6 text-3xl text-zinc-400">

            <a href="https://github.com/sanor07">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/sano18">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-1 justify-center"
        >
          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <div className="mb-8 flex items-center justify-between">

              <span className="text-zinc-400">
                Current Focus
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-1 text-sm text-green-400">
                Available
              </span>

            </div>

            <div className="space-y-4">

              <div className="rounded-xl bg-white/5 p-4">
                SIEM Detection Engineering Lab
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                Portfolio CMS
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                ReconX OSINT Framework
              </div>

            </div>

            <div className="mt-10">

              <h3 className="mb-5 font-semibold text-white">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">

                {tech.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    {item.icon}
                    {item.name}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <FaArrowDown size={24} />
      </motion.div>

    </section>
  );
}