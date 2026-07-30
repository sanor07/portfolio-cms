import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#09090B] py-32"
    >
      <Container>

        <SectionHeading
          title="Let's Connect"
          subtitle="Interested in collaborating, internships, freelance work or cybersecurity projects."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <GlassCard className="p-10">

            <h3 className="text-3xl font-bold text-white">
              Contact Information
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-2xl text-blue-400" />
                <span className="text-zinc-300">
                  your@email.com
                </span>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-2xl text-blue-400" />
                <span className="text-zinc-300">
                  India
                </span>
              </div>

            </div>

            <div className="mt-12 flex gap-5">

              <a
                href="https://github.com/sanor07"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl text-zinc-400 transition hover:text-white" />
              </a>

              <a
                href="https://linkedin.com/in/sano18"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl text-zinc-400 transition hover:text-white" />
              </a>

            </div>

            <div className="mt-12">
              <Button className="flex items-center gap-2">
                <FaDownload />
                Resume
              </Button>
            </div>

          </GlassCard>

          {/* Right */}

          <GlassCard className="p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message..."
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
              />

              <Button className="w-full">
                Send Message
              </Button>

            </form>

          </GlassCard>

        </div>

      </Container>
    </section>
  );
}