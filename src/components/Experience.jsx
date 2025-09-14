"use client";
import { useState } from "react";

const experiences = [
  {
    company: "Viva.com",
    role: "DevOps Engineer",
    period: "Nov 2023 – Present",
    highlights: [
      "Migrated Azure DevOps agents to Kubernetes with autoscaling, eliminating CI queue times.",
      "Built monitoring tools for mobile app availability and rollout across POS terminals.",
      "Automated POS fleet updates, cutting release time from 4h to 10m across 24 countries.",
      "Day-to-day: CI/CD optimisation, automation, infra monitoring, SRE-style reliability work.",
    ],
  },
  {
    company: "LiNK",
    role: "Backend Software Engineer (Part-Time)",
    period: "Nov 2023 – Present",
    highlights: [
      "Architected and implemented backend systems (Spring Boot / Quarkus) for CRM and roommate matching apps.",
      "Designed core APIs and DB schemas; mentored juniors; owned backend scalability.",
    ],
  },
  {
    company: "Unicorn Domain",
    role: "DevOps Engineer",
    period: "Mar 2023 – Nov 2023",
    highlights: [
      "Designed AWS architectures for web apps to improve scalability and cost efficiency.",
      "Built GitHub Actions CI/CD pipelines for reproducible, faster deployments.",
      "Managed & monitored Kubernetes clusters to maintain high availability.",
    ],
  },
  {
    company: "Unicorn Domain",
    role: "Backend Software Engineer",
    period: "May 2022 – Mar 2023",
    highlights: [
      "Developed RESTful APIs with Java Spring Boot integrated with cloud services.",
      "Containerised apps with Docker; deployed to AWS via Kubernetes & Helm.",
      "Automated builds with Bitbucket Pipelines; provisioned AWS infra with Terraform.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left side - Company list */}
        <div className="flex flex-col space-y-2 border-l border-gray-700">
          {experiences.map((exp, index) => (
            <button
              key={`${exp.company}-${exp.role}-${index}`}
              onClick={() => setActive(index)}
              className={`pl-4 py-2 text-left transition border-l-4 ${
                active === index
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500 font-semibold"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              {exp.company}
              {exp.company === "Unicorn Domain" && (
                <span className="ml-2 text-xs text-gray-500">
                  ({exp.role.includes("DevOps") ? "DevOps" : "Backend"})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Right side - Active job details */}
        <div className="md:col-span-2 text-gray-300">
          <h3 className="text-xl font-semibold text-white">
            {experiences[active].role}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              @ {experiences[active].company}
            </span>
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {experiences[active].period}
          </p>

          <ul className="list-disc pl-6 space-y-2">
            {experiences[active].highlights.map((item, i) => (
              <li key={i} className="text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
