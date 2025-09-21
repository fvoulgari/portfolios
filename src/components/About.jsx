import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 text-gray-300 space-y-4">
          <p>
            I’m <span className="text-white font-semibold">Spyros</span> — a backend engineer and
            DevOps enthusiast who loves solving problems with clean code and smart infrastructure.
          </p>

          <p>
            I started out building backend services in Java and Spring Boot, then moved into DevOps
            roles with Docker, Kubernetes, AWS, Azure, and CI/CD pipelines. Today I combine both
            worlds: coding backend systems in Go and managing infrastructure to help teams ship
            faster and safer.
          </p>

          <p>
            I’ve designed scalable systems at{" "}
            <span className="text-white font-semibold">Viva.com</span>, architected backend APIs at{" "}
            <span className="text-white font-semibold">LiNK</span>, and built AWS/Azure pipelines at{" "}
            <span className="text-white font-semibold">Unicorn Domain</span>.
          </p>

          <p>
            Outside of work, I enjoy experimenting with personal projects — like a container-native
            CI/CD platform in Go with autoscaling runners, and an RSS reader with an Astro.js frontend.
          </p>

          <p>
            I value <span className="text-white font-semibold">simplicity</span>,{" "}
            <span className="text-white font-semibold">reliability</span>, and tools that solve real
            problems without unnecessary complexity.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-4">
            <p className="flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">➤</span>
              Golang / Java / Spring Boot
            </p>
            <p className="flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">➤</span>
              Docker & Kubernetes
            </p>
            <p className="flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">➤</span>
              AWS & Azure
            </p>
            <p className="flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">➤</span>
              Terraform & Ansible
            </p>
            <p className="flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">➤</span>
              Linux Administration
            </p>
            <p className="flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">➤</span>
              CI/CD
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src="/profile.jpg"
              alt="Spyros Mouchlianitis"
              fill
              className="object-cover grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
