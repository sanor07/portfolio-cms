import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Projects() {
  const featured = {
    title: "SIEM Detection Engineering Lab",
    category: "Cybersecurity",
    status: "In Progress",
    description:
      "Enterprise SIEM lab using Wazuh, Sysmon, Kali Linux and Windows to simulate attacks, detect threats and build real-world detection rules.",
    tech: [
      "Wazuh",
      "Sysmon",
      "Kali Linux",
      "Windows",
      "Elastic",
    ],
  };

  const projects = [
    {
      title: "Portfolio CMS",
      category: "Full Stack",
      tech: ["React", "FastAPI", "PostgreSQL"],
    },
    {
      title: "ReconX OSINT",
      category: "Cybersecurity",
      tech: ["Python", "Tkinter", "OSINT"],
    },
    {
      title: "Resume Builder",
      category: "Web App",
      tech: ["React", "FastAPI"],
    },
    {
      title: "College Portal",
      category: "Management",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#09090B] py-32"
    >
      <Container>

        <SectionHeading
          title="Featured Projects"
          subtitle="Projects that showcase my cybersecurity and development journey."
        />

        {/* Featured */}

        <GlassCard className="mb-14 overflow-hidden">

          <div className="grid lg:grid-cols-2">

            <div className="flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-16">

              <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-2xl font-bold text-white">

                Project Preview

              </div>

            </div>

            <div className="p-10">

              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                {featured.category}
              </span>

              <h2 className="mt-6 text-4xl font-black text-white">
                {featured.title}
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                {featured.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {featured.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-10 flex gap-4">

                <Button>
                  <FaGithub />
                </Button>

                <Button variant="secondary">
                  <FaExternalLinkAlt />
                </Button>

              </div>

            </div>

          </div>

        </GlassCard>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (

            <GlassCard
              key={project.title}
              className="p-8 transition duration-300 hover:-translate-y-2"
            >

              <span className="text-sm text-blue-400">
                {project.category}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-3 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-8 flex justify-between">

                <FaGithub
                  className="cursor-pointer text-2xl text-zinc-400 hover:text-white"
                />

                <FaExternalLinkAlt
                  className="cursor-pointer text-xl text-zinc-400 hover:text-white"
                />

              </div>

            </GlassCard>

          ))}

        </div>

      </Container>
    </section>
  );
}