import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaShieldAlt,
  FaCode,
  FaServer,
} from "react-icons/fa";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] py-32"
    >
      <Container>

        <SectionHeading
          title="About Me"
          subtitle="Passionate about cybersecurity, detection engineering, SIEM, cloud security, automation and modern web development."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <GlassCard className="p-10">

            <div className="flex flex-col items-center">

              <img
                src="https://placehold.co/250x250"
                alt="Profile"
                className="mb-8 h-56 w-56 rounded-full border-4 border-blue-500 object-cover"
              />

              <h3 className="text-3xl font-bold text-white">
                Sanowar Hussain
              </h3>

              <p className="mt-2 text-zinc-400">
                Cybersecurity Enthusiast
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <Badge>Detection Engineering</Badge>

                <Badge>SOC</Badge>

                <Badge>Python</Badge>

                <Badge>Linux</Badge>

              </div>

            </div>

          </GlassCard>

          {/* Right */}

          <div className="space-y-8">

            <GlassCard className="p-8">

              <h3 className="mb-4 text-2xl font-bold text-white">
                Who am I?
              </h3>

              <p className="leading-8 text-zinc-400">

                I'm a Computer Science student focused on
                Cybersecurity, Detection Engineering,
                SIEM technologies, OSINT, Python automation,
                Linux administration, and full-stack
                application development.

              </p>

            </GlassCard>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5">

              <GlassCard className="p-6">

                <FaShieldAlt
                  className="mb-4 text-3xl text-blue-400"
                />

                <h4 className="text-4xl font-bold text-white">
                  15+
                </h4>

                <p className="text-zinc-400">
                  Projects
                </p>

              </GlassCard>

              <GlassCard className="p-6">

                <FaCode
                  className="mb-4 text-3xl text-cyan-400"
                />

                <h4 className="text-4xl font-bold text-white">
                  10+
                </h4>

                <p className="text-zinc-400">
                  Certifications
                </p>

              </GlassCard>

              <GlassCard className="p-6">

                <FaServer
                  className="mb-4 text-3xl text-violet-400"
                />

                <h4 className="text-4xl font-bold text-white">
                  SIEM
                </h4>

                <p className="text-zinc-400">
                  Detection Lab
                </p>

              </GlassCard>

              <GlassCard className="p-6">

                <FaEnvelope
                  className="mb-4 text-3xl text-green-400"
                />

                <h4 className="text-4xl font-bold text-white">
                  Open
                </h4>

                <p className="text-zinc-400">
                  For Opportunities
                </p>

              </GlassCard>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Button>
                Download Resume
              </Button>

              <Button variant="secondary">
                Contact Me
              </Button>

            </div>

            {/* Social */}

            <div className="flex gap-6 text-3xl text-zinc-400">

              <a
                href="https://github.com/sanor07"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/sano18"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}