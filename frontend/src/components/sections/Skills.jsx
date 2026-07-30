import { motion } from "framer-motion";

import {
  FaShieldAlt,
  FaPython,
  FaReact,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
const categories = [
  {
    title: "Cybersecurity",
    icon: <FaShieldAlt />,
    color: "text-blue-400",
    skills: [
      "SIEM",
      "Threat Hunting",
      "Wazuh",
      "Sysmon",
      "Windows Event Logs",
      "MITRE ATT&CK",
      "Detection Engineering",
      "Incident Response",
    ],
  },

  {
    title: "Programming",
    icon: <FaCode />,
    color: "text-green-400",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "C",
      "SQL",
    ],
  },

  {
    title: "Frontend",
    icon: <FaReact />,
    color: "text-cyan-400",
    skills: [
      "React",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
      "Responsive Design",
    ],
  },

  {
    title: "Backend",
    icon: <SiFastapi />,
    color: "text-violet-400",
    skills: [
      "FastAPI",
      "REST API",
      "Authentication",
      "JWT",
      "SQLite",
      "PostgreSQL",
    ],
  },

  {
    title: "Tools",
    icon: <FaDocker />,
    color: "text-orange-400",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "VMware",
      "VirtualBox",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[#09090B]"
    >
      <Container>

        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies, frameworks and cybersecurity tools I use to build secure and scalable solutions."
        />

        <div className="grid gap-8 lg:grid-cols-2">
                      {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              <GlassCard className="h-full p-8">

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl ${category.color}`}
                  >
                    {category.icon}
                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      Professional Skills
                    </p>

                  </div>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <Badge key={skill}>
                      {skill}
                    </Badge>

                  ))}

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

        <div className="mt-20">

          <GlassCard className="p-10">

            <h3 className="text-center text-3xl font-black text-white">
              Technology Stack
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-center leading-8 text-zinc-400">
              My work combines software engineering with cybersecurity,
              focusing on building secure, scalable, and automated
              systems using modern development tools and defensive
              security technologies.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">

              <div className="text-center">

                <FaPython className="mx-auto text-5xl text-yellow-400" />

                <h4 className="mt-4 font-semibold text-white">
                  Python
                </h4>

              </div>

              <div className="text-center">

                <FaReact className="mx-auto text-5xl text-cyan-400" />

                <h4 className="mt-4 font-semibold text-white">
                  React
                </h4>

              </div>

              <div className="text-center">

                <SiFastapi className="mx-auto text-5xl text-green-400" />

                <h4 className="mt-4 font-semibold text-white">
                  FastAPI
                </h4>

              </div>

              <div className="text-center">

                <SiPostgresql className="mx-auto text-5xl text-blue-400" />

                <h4 className="mt-4 font-semibold text-white">
                  PostgreSQL
                </h4>

              </div>

              <div className="text-center">

                <FaDocker className="mx-auto text-5xl text-blue-400" />

                <h4 className="mt-4 font-semibold text-white">
                  Docker
                </h4>

              </div>

              <div className="text-center">

                <FaLinux className="mx-auto text-5xl text-yellow-500" />

                <h4 className="mt-4 font-semibold text-white">
                  Linux
                </h4>

              </div>

              <div className="text-center">

                <FaGitAlt className="mx-auto text-5xl text-orange-500" />

                <h4 className="mt-4 font-semibold text-white">
                  Git
                </h4>

              </div>

              <div className="text-center">

                <FaDatabase className="mx-auto text-5xl text-purple-400" />

                <h4 className="mt-4 font-semibold text-white">
                  Databases
                </h4>

              </div>

            </div>

          </GlassCard>

        </div>

      </Container>

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-180px] top-24 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute right-[-180px] bottom-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[180px]" />

      </div>

    </section>
  );
}