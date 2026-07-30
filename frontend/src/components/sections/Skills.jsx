import {
  FaPython,
  FaReact,
  FaDocker,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiWazuh,
} from "react-icons/si";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  const categories = [
    {
      title: "Cybersecurity",
      skills: [
        { name: "Wazuh", icon: <SiWazuh /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Detection Engineering", icon: "🛡️" },
        { name: "SOC", icon: "🔍" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "VMware", icon: "💻" },
        { name: "VirtualBox", icon: "📦" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#09090B] py-32"
    >
      <Container>

        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I use to build secure, scalable and modern applications."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {categories.map((category) => (

            <GlassCard
              key={category.title}
              className="p-8"
            >

              <h3 className="mb-8 text-2xl font-bold text-white">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-500"
                  >

                    <div className="text-2xl text-blue-400">
                      {skill.icon}
                    </div>

                    <span className="text-white">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </GlassCard>

          ))}

        </div>

      </Container>
    </section>
  );
}