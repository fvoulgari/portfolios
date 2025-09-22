export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Get In Touch
      </h2>
      <p className="text-gray-400 mb-8 max-w-xl">
        I’m always open to discussing new opportunities, interesting projects,
        or just having a chat about backend systems and DevOps.
        If you’d like to connect, drop me a message and I’ll get back to you.
      </p>

      <a
        href="mailto:spyros.mouchlianitis@gmail.com"
        className="inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
      >
        <span className="block rounded-md px-8 py-3 light:bg-white dark:bg-black text-white font-semibold">
          Say Hello
        </span>
      </a>
    </section>
  );
}
