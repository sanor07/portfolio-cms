import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  const timeline = [
    {
      type: "work",
      title: "Lead Generation Intern",
      organization: "GAO Tek Inc.",
      duration: "2026",
      description:
        "Worked on lead generation, market research, CRM management and data mining while collaborating with an international team.",
    },
    {
      type: "project",
      title: "SIEM Detection Engineering Lab",
      organization: "Personal Project",
      duration: "2026 - Present",
      description:
        "Building an enterprise SIEM environment using Wazuh, Sysmon, Kali Linux and Windows for attack simulation and threat detection.",
    },
    {
      type: "education",
      title: "Bachelor of Technology",
      organization: "Computer Science & Engineering",
      duration: "2023 - Present",
      description:
        "Learning software engineering, networking, cybersecurity and modern application development.",
    },
  ];

  return (
    <section id="experience" className="bg-[#09090B] py-32">
      <Container>
        <SectionHeading
          title="Experience & Journey"
          subtitle="A timeline of my learning, projects and professional experience."
        />

        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10" />

          {timeline.map((item, index) => (
            <div key={index} className="relative mb-10 flex gap-8">

              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">

                {item.type === "education" ? (
                  <FaGraduationCap />
                ) : (
                  <FaBriefcase />
                )}

              </div>

              <GlassCard className="flex-1 p-8">

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-blue-400">
                      {item.organization}
                    </p>
                  </div>

                  <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300">
                    {item.duration}
                  </span>

                </div>

                <p className="mt-6 leading-8 text-zinc-400">
                  {item.description}
                </p>

              </GlassCard>

            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}