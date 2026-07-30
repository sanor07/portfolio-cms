import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">

        <div className="mx-auto mt-5 flex w-[94%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl">

          {/* Logo */}

          <a
            href="/"
            className="text-2xl font-black tracking-wide text-white"
          >
            SH<span className="text-blue-500">.</span>
          </a>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-5 md:flex">

            <a
              href="https://github.com/sanor07"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/sano18"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>

            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">

              Resume

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

        </div>

      </header>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed left-4 right-4 top-24 z-40 rounded-2xl border border-white/10 bg-zinc-900/95 p-6 backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-6">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-zinc-300"
              >
                {item.name}
              </a>
            ))}

          </div>
        </motion.div>
      )}
    </>
  );
}