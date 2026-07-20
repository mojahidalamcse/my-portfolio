import { Hero } from "./hero";
import { SkillSection } from "./skill";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { BlogSection } from "./blog";

export function HomeView() {
  return (
    <div className="space-y-20">
      <Hero />
      <SkillSection />
      <Experience />
      <Projects />
      <BlogSection />
    </div>
  );
}
