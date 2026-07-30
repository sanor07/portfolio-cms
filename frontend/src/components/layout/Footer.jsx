import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";

import Container from "../ui/Container";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/sanor07",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/sano18",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:sanor9518@gmail.com",
  },
  {
    icon: <FaDownload />,
    link: "/resume.pdf",
    download: true,
  },
];

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05060A]">

      <Container>

        <div className="py-20 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="text-5xl font-black tracking-wide text-white"
          >
            Sanowar Hussain
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .15 }}
            viewport={{ once: true }}
            className="mt-5 text-lg text-blue-400"
          >
            Cybersecurity Enthusiast
          </motion.p>

          <p className="mt-2 text-zinc-500">
            Detection Engineering • SIEM • Threat Hunting • Python
          </p>

          <p className="mx-auto mt-8 max-w-2xl italic leading-8 text-zinc-400">

            "Think like an attacker. Build like a defender."

          </p>

          <div className="mx-auto my-12 h-px max-w-4xl bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                    {/* Social Icons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                download={social.download}
                target={social.download ? "_self" : "_blank"}
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <div className="mx-auto my-12 h-px max-w-3xl bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:text-blue-400"
              >
                {item.title}
              </a>
            ))}
          </motion.div>

          <motion.a
            href="#home"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto mt-12 flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
          >
            <FaArrowUp />
          </motion.a>

          <div className="mx-auto mt-12 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

          <div className="mt-8 space-y-3 text-center">

            <p className="text-zinc-500">
              Built with React • Vite • Tailwind CSS • Framer Motion
            </p>

            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Sanowar Hussain. All Rights Reserved.
            </p>

          </div>

        </div>

      </Container>

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[180px]" />

      </div>

    </footer>
  );
}