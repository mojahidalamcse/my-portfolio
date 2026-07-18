import { Hero } from "./hero";
import { SkillSection } from "./skill";
import { Experience } from "./experience";

export function HomeView() {
  return (
    <div className="space-y-20">
      <Hero />
      <SkillSection />
      <Experience />
    </div>
  );
}
