import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

import siemImage from "../../assets/projects/siem-project.jpeg";
import reconxImage from "../../assets/projects/reconx.png";
import portfolioImage from "../../assets/projects/portfolio-cms.png";
import resumeBuilderImage from "../../assets/projects/resume-builder.png";
import collegePortalImage from "../../assets/projects/college-portal.png";
import attendanceImage from "../../assets/projects/face-attendance.png";

export default function Projects() {
  const featured = {
    title: "SIEM Detection Engineering Lab",
    category: "Cybersecurity",
    status: "In Progress",

    image: siemImage,

    description:
      "Enterprise Detection Engineering Lab built using Wazuh, Sysmon, Kali Linux and Windows to simulate attacks, monitor security events and create real-world detection rules for SOC operations.",

    tech: [
      "Wazuh",
      "Sysmon",
      "Kali Linux",
      "Windows",
      "Elastic",
    ],

    github: "https://github.com/sanor07/SIEM-Detection-Lab",

    live: "#",
  };

  const projects = [
    {
      title: "Portfolio Website",
      image: portfolioImage,
      category: "React Portfolio",

      github: "https://github.com/sanor07/Portfolio",

      live: "#",
    },

    {
      title: "AI Resume Builder",
      image: resumeBuilderImage,
      category: "React + FastAPI",

      github: "https://github.com/sanor07/AI_RESUME_BUILDER",

      live: "https://ai-resume-builder-topaz-zeta.vercel.app/",
    },

    {
      title: "ReconX OSINT Framework",
      image: reconxImage,
      category: "Cybersecurity",

      github: "#",

      live: "#",
    },

    {
      title: "College Portal",
      image: collegePortalImage,
      category: "Web Application",

      github: "#",

      live: "#",
    },

    {
      title: "Face Attendance System",
      image: attendanceImage,
      category: "Python + OpenCV",

      github: "#",

      live: "#",
    },
  ];

  return (
    <section id="projects" className="bg-[#09090B] py-32">
      <Container>

        <SectionHeading
          title="Featured Projects"
          subtitle="A collection of cybersecurity, automation, AI, and full-stack development projects."
        />

        {/* Featured Project */}

        <GlassCard className="overflow-hidden p-0">

          <div className="grid lg:grid-cols-2">

            <div className="overflow-hidden">

              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="flex flex-col justify-center p-10">

              <div className="flex flex-wrap gap-3">

                <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300">
                  {featured.category}
                </span>

                <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm text-green-300">
                  {featured.status}
                </span>

              </div>

              <h2 className="mt-8 text-5xl font-black text-white">
                {featured.title}
              </h2>

              <p className="mt-8 leading-8 text-zinc-400">
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

                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>
                    <FaGithub />
                  </Button>
                </a>

                {featured.live !== "#" && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="secondary">
                      <FaExternalLinkAlt />
                    </Button>
                  </a>
                )}

              </div>

            </div>

          </div>

        </GlassCard>

        {/* Other Projects */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <GlassCard
              key={project.title}
              className="overflow-hidden p-0 transition duration-500 hover:-translate-y-3"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="p-7">

                <span className="text-sm text-blue-400">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="mt-8 flex items-center justify-between">

                  <div className="flex gap-5">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="text-2xl text-zinc-400 transition hover:text-white" />
                    </a>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt className="text-xl text-zinc-400 transition hover:text-blue-400" />
                      </a>
                    )}

                  </div>

                  <FaArrowRight className="text-zinc-500" />

                </div>

              </div>

            </GlassCard>

          ))}

        </div>

      </Container>
    </section>
  );
}