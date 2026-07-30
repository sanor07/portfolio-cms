import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "sanor9518@gmail.com",
    link: "mailto:sanor9518@gmail.com",
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/sanor07",
    link: "https://github.com/sanor07",
  },

  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/sano18",
    link: "https://linkedin.com/in/sano18",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "India",
    link: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#09090B] py-32"
    >
      <Container>

        <SectionHeading
          title="Let's Connect"
          subtitle="Interested in cybersecurity, software engineering or collaboration? I'm always happy to discuss projects, internships and new opportunities."
        />

        <div className="grid gap-10 lg:grid-cols-2">
                      {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {contacts.map((item) => (

              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >

                <GlassCard className="group flex items-center gap-5 p-6 hover:-translate-y-1 transition-all duration-300">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400 group-hover:scale-110 transition-all">

                    {item.icon}

                  </div>

                  <div>

                    <p className="text-sm text-zinc-500">

                      {item.title}

                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white">

                      {item.value}

                    </h3>

                  </div>

                </GlassCard>

              </a>

            ))}

            <GlassCard className="p-8">

              <h3 className="text-2xl font-black text-white">

                Currently Looking For

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                I'm actively seeking internships and opportunities in
                Cybersecurity, SOC Analysis, Detection Engineering,
                Python Development and Full Stack Development.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

              <a
  href="/resume.pdf"
  download
>
  <Button>

    <FaDownload />

    <span className="ml-2">
      Download Resume
    </span>

  </Button>
</a>

              </div>

            </GlassCard>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <GlassCard className="p-8">

              <h3 className="text-3xl font-black text-white">

                Send a Message

              </h3>

              <p className="mt-4 text-zinc-400">

                Have an opportunity or project in mind?
                Let's connect.

              </p>

              <form className="mt-8 space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-blue-500 resize-none"
                />

                <Button className="w-full">

                  <FaPaperPlane />

                  <span className="ml-2">

                    Send Message

                  </span>

                </Button>

              </form>

            </GlassCard>

          </motion.div>

        </div>

      </Container>

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-180px] top-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="absolute right-[-180px] bottom-20 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[180px]" />

      </div>

    </section>
  );
}