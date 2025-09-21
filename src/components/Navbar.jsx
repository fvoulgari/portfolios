"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80 transition"
>
          SM
        </a>

        <div className="space-x-6">
          <a
            href="#about"
            className="text-gray-300 hover:text-transparent hover:bg-clip-text
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-transparent hover:bg-clip-text
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-transparent hover:bg-clip-text
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-transparent hover:bg-clip-text
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition"
          >
            Contact
          </a>

          <a
            href="/CV-Spyros-Mouchlianitis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
            >
            <span className="block rounded-md px-4 py-2 bg-black text-white font-semibold text-sm">
              Resume
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
