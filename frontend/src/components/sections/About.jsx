import { motion } from "framer-motion";
import {
  FaUserShield,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaShieldAlt,
  FaBrain,
  FaGlobe,
} from "react-icons/fa";

import profileImage from "../../assets/images/profile.jpeg";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  {
    number: "15+",
    label: "Projects",
    icon: <FaCode />,
  },
  {
    number: "20+",
    label: "Technologies",
    icon: <FaLaptopCode />,
  },
  {
    number: "5+",
    label: "Domains",
    icon: <FaShieldAlt />,
  },
];

const interests = [
  "Cybersecurity",
  "Detection Engineering",
  "Threat Hunting",
  "SIEM",
  "Python",
  "React",
  "Linux",
  "Cloud Security",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#09090B]"
    >
      <Container>

        <SectionHeading
          title="About Me"
          subtitle="Building secure applications, automating workflows, and engineering practical cybersecurity solutions."
        />

        <div className="grid gap-12 lg:grid-cols-5">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >

            <GlassCard className="overflow-hidden p-8">

              <img
                src={profileImage}
                alt="Sanowar Hussain"
                className="mx-auto h-80 w-72 rounded-3xl object-cover"
              />

              <div className="mt-8 text-center">

                <h3 className="text-3xl font-black text-white">
                  Sanowar Hussain
                </h3>

                <p className="mt-2 text-zinc-400">
                  Cybersecurity Enthusiast
                </p>

              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <Badge>B.Tech CSE</Badge>

                <Badge>Python</Badge>

                <Badge>React</Badge>

                <Badge>FastAPI</Badge>

              </div>

            </GlassCard>

            <GlassCard className="mt-8 p-8">

              <div className="flex items-center gap-4">

                <FaGraduationCap className="text-3xl text-blue-400" />

                <div>

                  <h4 className="font-bold text-white">
                    Education
                  </h4>

                  <p className="text-zinc-400">
                    B.Tech in Computer Science &
                    Engineering
                  </p>

                </div>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <FaBrain className="text-3xl text-blue-400" />

                <div>

                  <h4 className="font-bold text-white">
                    Current Focus
                  </h4>

                  <p className="text-zinc-400">
                    Detection Engineering,
                    Threat Hunting & SIEM
                  </p>

                </div>

              </div>

            </GlassCard>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-3"
          >
                        <GlassCard className="p-10">

              <div className="flex items-center gap-4">

                <FaUserShield className="text-3xl text-blue-400" />

                <h3 className="text-3xl font-black text-white">
                  Who I Am
                </h3>

              </div>

              <p className="mt-8 leading-8 text-lg text-zinc-300">
                I am a Computer Science student passionate about
                Cybersecurity, Detection Engineering, Threat Hunting,
                Secure Software Development and Backend Engineering.
                My primary focus is building practical security
                projects that combine programming with defensive
                security.
              </p>

              <p className="mt-6 leading-8 text-lg text-zinc-300">
                I enjoy creating SIEM detection labs, automation
                scripts, full-stack applications and solving
                real-world security challenges using Python,
                FastAPI, React and Linux.
              </p>

            </GlassCard>


            <div className="grid gap-6 md:grid-cols-3">

              {stats.map((item) => (

                <GlassCard
                  key={item.label}
                  className="group p-8 text-center"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400 transition-all duration-300 group-hover:scale-110">

                    {item.icon}

                  </div>

                  <h2 className="mt-6 text-5xl font-black text-white">

                    {item.number}

                  </h2>

                  <p className="mt-3 text-zinc-400">

                    {item.label}

                  </p>

                </GlassCard>

              ))}

            </div>


            <GlassCard className="p-10">

              <div className="flex items-center gap-4">

                <FaGlobe className="text-3xl text-blue-400" />

                <h3 className="text-3xl font-black text-white">
                  Areas of Interest
                </h3>

              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                {interests.map((item) => (

                  <Badge key={item}>
                    {item}
                  </Badge>

                ))}

              </div>

            </GlassCard>


            <GlassCard className="p-10">

              <h3 className="text-3xl font-black text-white">
                Journey
              </h3>

              <div className="mt-10 space-y-8">

                <div className="flex gap-6">

                  <div className="mt-2 h-4 w-4 rounded-full bg-blue-500" />

                  <div>

                    <h4 className="font-bold text-white">
                      2023
                    </h4>

                    <p className="mt-2 text-zinc-400">
                      Started programming with Java and explored
                      computer science fundamentals.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="mt-2 h-4 w-4 rounded-full bg-cyan-400" />

                  <div>

                    <h4 className="font-bold text-white">
                      2024
                    </h4>

                    <p className="mt-2 text-zinc-400">
                      Built responsive web applications using
                      HTML, CSS, JavaScript and React.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="mt-2 h-4 w-4 rounded-full bg-violet-400" />

                  <div>

                    <h4 className="font-bold text-white">
                      2025
                    </h4>

                    <p className="mt-2 text-zinc-400">
                      Focused on Python, FastAPI, databases,
                      backend development and automation.
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div className="mt-2 h-4 w-4 rounded-full bg-green-400" />

                  <div>

                    <h4 className="font-bold text-white">
                      2026
                    </h4>

                    <p className="mt-2 text-zinc-400">
                      Building SIEM Detection Engineering Labs,
                      Threat Hunting workflows and enterprise
                      cybersecurity projects.
                    </p>

                  </div>

                </div>

              </div>

            </GlassCard>
                      </motion.div>

        </div>

      </Container>

      {/* Decorative Blur */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-200px] top-32 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute right-[-180px] bottom-20 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[170px]" />

      </div>

    </section>
  );
}