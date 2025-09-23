export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2 text-base sm:text-lg font-medium">
        Hi, my name is
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Spyros Mouchlianitis.
      </h1>
      <h2 className="text-lg sm:text-xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        I write backend code – mostly in Go – and build tools that make life
        easier for developers and teams.
      </h2>
      <a
        href="#projects"
        className="inline-block rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
      >
        <span className="block rounded-md px-6 py-2 sm:px-8 sm:py-3 light:bg-white dark:bg-black text-white font-semibold text-sm sm:text-base">
          Check out my work
        </span>
      </a>
    </section>
  );
}
