import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaShieldAlt,
  FaSearch,
  FaDatabase,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    title: "Lead Generation Intern",
    company: "GAO Tek Inc.",
    period: "Feb 2026 - May 2026",
    icon: <FaBriefcase />,
    color: "text-blue-400",

    achievements: [
      "Generated B2B leads using professional research tools",
      "Performed market research and company profiling",
      "Collected and verified prospect data",
      "Worked with CRM workflows and sales pipelines",
      "Collaborated with an international remote team",
    ],

    technologies: [
      "Lead Generation",
      "Data Mining",
      "Market Research",
      "CRM",
      "LinkedIn",
    ],
  },

  {
    title: "SIEM Detection Engineering Lab",
    company: "Personal Cybersecurity Project",
    period: "2026 - Present",
    icon: <FaShieldAlt />,
    color: "text-cyan-400",

    achievements: [
      "Built enterprise Wazuh SIEM lab",
      "Configured Sysmon log collection",
      "Created detection rules",
      "Mapped detections to MITRE ATT&CK",
      "Performed threat hunting exercises",
    ],

    technologies: [
      "Wazuh",
      "Sysmon",
      "MITRE ATT&CK",
      "Ubuntu",
      "Kali Linux",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#09090B] py-32"
    >
      <Container>

        <SectionHeading
          title="Experience"
          subtitle="Professional experience and practical cybersecurity work that shaped my technical journey."
        />

        <div className="space-y-10">
                      {experiences.map((exp, index) => (

            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <GlassCard className="relative overflow-hidden p-8 md:p-10">

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-violet-500" />

                <div className="grid gap-10 lg:grid-cols-3">

                  {/* Left */}

                  <div>

                    <div className={`mb-6 text-5xl ${exp.color}`}>
                      {exp.icon}
                    </div>

                    <h3 className="text-3xl font-black text-white">
                      {exp.title}
                    </h3>

                    <p className="mt-3 text-xl text-blue-400">
                      {exp.company}
                    </p>

                    <p className="mt-2 text-zinc-500">
                      {exp.period}
                    </p>

                  </div>

                  {/* Right */}

                  <div className="lg:col-span-2">

                    <h4 className="mb-5 text-xl font-bold text-white">
                      Key Contributions
                    </h4>

                    <div className="space-y-4">

                      {exp.achievements.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-4"
                        >

                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />

                          <p className="leading-7 text-zinc-300">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                    <div className="mt-10">

                      <h4 className="mb-5 text-xl font-bold text-white">
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-3">

                        {exp.technologies.map((tech) => (

                          <Badge key={tech}>
                            {tech}
                          </Badge>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </GlassCard>

            </motion.div>

          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >

            <GlassCard className="p-10">

              <div className="grid gap-8 text-center md:grid-cols-3">

                <div>

                  <FaSearch className="mx-auto text-5xl text-blue-400" />

                  <h3 className="mt-5 text-4xl font-black text-white">
                    2+
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Years of Learning
                  </p>

                </div>

                <div>

                  <FaDatabase className="mx-auto text-5xl text-cyan-400" />

                  <h3 className="mt-5 text-4xl font-black text-white">
                    15+
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Projects Completed
                  </p>

                </div>

                <div>

                  <FaChartLine className="mx-auto text-5xl text-violet-400" />

                  <h3 className="mt-5 text-4xl font-black text-white">
                    20+
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    Technologies Explored
                  </p>

                </div>

              </div>

            </GlassCard>

          </motion.div>
                  </div>

      </Container>

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-200px] top-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="absolute right-[-200px] bottom-20 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[180px]" />

      </div>

    </section>
  );
}