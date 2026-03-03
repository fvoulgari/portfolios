import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-[50vh] md:min-h-screen pt-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 text-gray-300 space-y-4">
          <p>
            I’m <span className="font-semibold">Spyros</span>, a Senior DevOps Engineer based in Dublin.
             I design and operate the infrastructure that helps engineering teams move fast without breaking things.
          </p>

          <p>
            I started out building backend services in Java and Spring Boot, which gave me a solid foundation in how software actually runs in production.
             Over time I moved deeper into infrastructure, Linux systems and cloud-native environments. Today that background shapes how I approach platform work: 
             <span className="font-semibold"> with the same care for clean architecture and maintainability that good software demands.</span>
          </p>

          <p>
            Outside of work I build things that scratch my own itches. A container-native CI/CD platform in Go with autoscaling runners.
             A React-based RSS reader.
             A lightweight CLI password manager in Go that stores credentials with AES encryption.
          </p>

          <p>
            I care about <span className="font-semibold">automation</span>,{" "}
            <span className="font-semibold">reliability</span> and systems that don't get in the way,
             infrastructure that is simple, predictable and built to scale.
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
              src="/profile.png"
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
