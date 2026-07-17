import { Hero } from "./hero";
import { SkillSection } from "./skill";

export function HomeView() {
  return (
    <div className="space-y-20">
      <Hero />
      <SkillSection />
    </div>
  );
}
