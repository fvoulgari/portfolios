import content from "@/content";

export default function Contact() {
  const { title, description, email, buttonText } = content.contact;

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        {title}
      </h2>
      <p className="text-gray-400 mb-8 max-w-xl">
        {description}
      </p>

      <a
        href={`mailto:${email}`}
        className="inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
      >
        <span className="block rounded-md px-8 py-3 light:bg-white dark:bg-black text-white font-semibold">
          {buttonText}
        </span>
      </a>
    </section>
  );
}
