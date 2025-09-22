"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80 transition"
        >
          SM
        </a>
        <div className="flex items-center space-x-6">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`transition ${
                active === href.slice(1)
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
              }`}
            >
              {label}
            </a>
          ))}

          <a
            href="/CV-Spyros-Mouchlianitis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
          >
            <span className="block rounded-md px-4 py-2 light:bg-white dark:bg-black text-white font-semibold text-sm">
              Resume
            </span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
