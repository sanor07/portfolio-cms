import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";
import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function About() {
  const stats = [
    { value: "15+", label: "Projects" },
    { value: "10+", label: "Certificates" },
    { value: "30+", label: "Technologies" },
    { value: "1+", label: "Years Learning" },
  ];

  const focus = [
    "Detection Engineering",
    "SOC Operations",
    "SIEM & Wazuh",
    "Threat Hunting",
    "Cloud Security",
    "Python Automation",
  ];

  return (
    <section id="about" className="bg-[#09090B] py-32">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Building secure systems, detection rules and modern applications."
        />

        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">

          {/* LEFT */}

          <GlassCard className="p-8">

            <img
              src="https://placehold.co/400x500"
              alt="profile"
              className="mb-6 w-full rounded-2xl"
            />

            <h2 className="text-3xl font-bold text-white">
              Sanowar Hussain
            </h2>

            <p className="mt-2 text-blue-400">
              Cybersecurity Enthusiast
            </p>

            <div className="mt-6 space-y-4 text-zinc-400">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                India
              </div>

              <div className="flex items-center gap-3">
                <FaGraduationCap />
                B.Tech CSE
              </div>

              <div className="flex items-center gap-3">
                <FaBriefcase />
                Open to Opportunities
              </div>

            </div>

            <div className="mt-8">
              <Button className="w-full">
                Download Resume
              </Button>
            </div>

          </GlassCard>

          {/* RIGHT */}

          <div className="space-y-8">

            <GlassCard className="p-8">

              <div className="flex items-center gap-3">

                <FaShieldAlt className="text-blue-400 text-2xl"/>

                <h3 className="text-2xl font-bold text-white">
                  Who I Am
                </h3>

              </div>

              <p className="mt-6 leading-8 text-zinc-400">

                I'm a Computer Science student passionate about
                Cybersecurity, Detection Engineering,
                SIEM platforms, Linux, Cloud Security,
                Python Automation and Full Stack Development.

                I enjoy building practical security projects that
                solve real-world problems instead of just following tutorials.

              </p>

            </GlassCard>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

              {stats.map((item) => (

                <GlassCard
                  key={item.label}
                  className="p-6 text-center"
                >

                  <h2 className="text-4xl font-black text-blue-400">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    {item.label}
                  </p>

                </GlassCard>

              ))}

            </div>

            {/* Current Focus */}

            <GlassCard className="p-8">

              <div className="flex items-center gap-3">

                <FaBullseye className="text-cyan-400"/>

                <h3 className="text-2xl font-bold text-white">
                  Current Focus
                </h3>

              </div>

              <div className="mt-6 flex flex-wrap gap-4">

                {focus.map((item) => (

                  <div
                    key={item}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-blue-300"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </GlassCard>

            {/* Current Projects */}

            <GlassCard className="p-8">

              <h3 className="mb-6 text-2xl font-bold text-white">
                Currently Building
              </h3>

              <div className="space-y-5">

                {[
                  "SIEM Detection Engineering Lab",
                  "Portfolio CMS",
                  "ReconX OSINT Framework",
                ].map((project) => (

                  <div
                    key={project}
                    className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                  >

                    <FaCheckCircle className="text-green-400"/>

                    <span className="text-white">
                      {project}
                    </span>

                  </div>

                ))}

              </div>

            </GlassCard>

          </div>

        </div>

      </Container>
    </section>
  );
}