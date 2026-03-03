"use client";
import { useState } from "react";
import content from "@/content";

const experiences = content.experience;

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="min-h-[50vh] md:min-h-[90vh] pt-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Experience
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
        <div className="hidden md:flex flex-col space-y-2 border-l border-gray-700">
          {experiences.map((exp, index) => (
            <button
              key={`${exp.company}-${index}`}
              onClick={() => setActive(index)}
              className={`pl-4 py-2 text-left transition border-l-4 ${
                active === index
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500 font-semibold"
                  : "text-gray-400 border-transparent hover:text-black dark:hover:text-white"
              }`}
            >
              <div>
                {exp.company}
                {exp.company === "Unicorn Domain" && (
                  <span className="ml-2 text-xs text-gray-500">
                    ({exp.role.includes("DevOps") ? "DevOps" : "Backend"})
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500">{exp.period}</div>
            </button>
          ))}
        </div>

        <div className="md:hidden relative -mx-6 px-6 mb-6">
          <div className="flex space-x-6 overflow-x-auto pb-2 snap-x">
            {experiences.map((exp, index) => (
              <button
                key={`${exp.company}-mobile-${index}`}
                onClick={() => setActive(index)}
                className={`relative whitespace-nowrap snap-start transition pb-2 ${
                  active === index
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-semibold"
                    : "text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {exp.company}
                {active === index && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 rounded"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 text-gray-300">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            {experiences[active].role}{" "}
            <a
              href={experiences[active].companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:underline"
            >
              @ {experiences[active].company}
            </a>
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {experiences[active].period}
          </p>

          <ul className="list-disc pl-6 space-y-2">
            {experiences[active].highlights.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
