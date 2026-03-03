import Image from "next/image";
import content from "@/content";

export default function About() {
  const { title, paragraphs, skills } = content.about;
  const { profileImage } = content.assets;
  const { name } = content.person;

  return (
    <section id="about" className="min-h-[50vh] md:min-h-screen pt-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 text-gray-300 space-y-4">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="grid grid-cols-2 gap-2 pt-4">
            {skills.map((skillGroup, idx) => (
              skillGroup.items.map((item, itemIdx) => (
                <p key={`${idx}-${itemIdx}`} className="flex items-center gap-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">➤</span>
                  {item}
                </p>
              ))
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="object-cover grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
