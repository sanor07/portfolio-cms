import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

export default function Certifications() {
  const certificates = [
    {
      title: "Google Digital Marketing",
      issuer: "Google",
      year: "2026",
    },
    {
      title: "Cybersecurity Internship",
      issuer: "GAO Tek Inc.",
      year: "2026",
    },
    {
      title: "NPTEL Computer Networks",
      issuer: "NPTEL",
      year: "2026",
    },
    {
      title: "Privacy & Security in Online Social Media",
      issuer: "NPTEL",
      year: "2026",
    },
  ];

  return (
    <section id="certifications" className="bg-[#09090B] py-32">
      <Container>
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and learning achievements."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <GlassCard
              key={certificate.title}
              className="group p-8 transition hover:-translate-y-2"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-3xl text-blue-400">
                <FaAward />
              </div>

              <h3 className="text-xl font-bold text-white">
                {certificate.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {certificate.issuer}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  {certificate.year}
                </span>

                <FaExternalLinkAlt className="cursor-pointer text-zinc-500 transition group-hover:text-blue-400" />
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}