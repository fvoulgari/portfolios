import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import content from "@/content";

const componentMap = {
  hero: Hero,
  about: About,
  experience: Experience,
  projects: Projects,
  contact: Contact,
};

export default function Home() {
  const { sections } = content;
  const enabledSections = sections.order.filter(
    (section) => sections.enabled[section] !== false
  );

  return (
    <main>
      <Navbar />
      {enabledSections.map((section) => {
        const Component = componentMap[section];
        return Component ? <Component key={section} /> : null;
      })}
    </main>
  );
}
