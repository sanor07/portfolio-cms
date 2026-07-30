import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
  FaShieldAlt,
} from "react-icons/fa";

import profileImage from "../../assets/images/profile.jpeg";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  const tech = [
    "Python",
    "Wazuh",
    "FastAPI",
    "React",
    "Docker",
    "Linux",
    "PostgreSQL",
    "SIEM",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#09090B] pt-32 pb-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-150px] top-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[150px]" />
        <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[170px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2">
              <FaShieldAlt className="text-blue-400" />
              <span className="text-sm uppercase tracking-[0.25em] text-blue-300">
                Open To Opportunities
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-8xl">
              Sanowar
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Hussain
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-400">
              Cybersecurity Enthusiast focused on Detection Engineering,
              SIEM, Threat Hunting, Python Automation and Full Stack
              Development.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Button>Explore Projects</Button>

              <Button variant="secondary">
                <FaDownload />
              </Button>
            </div>

            <div className="mt-12 flex gap-8 text-3xl text-zinc-400">
              <a
                href="https://github.com/sanor07"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="transition hover:text-white" />
              </a>

              <a
                href="https://linkedin.com/in/sano18"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="transition hover:text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              <img
                src={profileImage}
                alt="Sanowar Hussain"
                className="relative z-10 h-[520px] w-[420px] rounded-[40px] border border-white/10 object-cover shadow-2xl"
              />

              <div className="absolute -left-10 top-10 z-20 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-zinc-400">Experience</p>
                <h3 className="mt-2 text-3xl font-black text-white">15+</h3>
                <p className="text-sm text-blue-400">Projects</p>
              </div>

              <div className="absolute -right-10 bottom-10 z-20 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-zinc-400">Quote</p>
                <h3 className="mt-2 max-w-[180px] text-lg font-semibold leading-7 text-white">
                  “Detection is the art of seeing the attack before it becomes an incident.”
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}