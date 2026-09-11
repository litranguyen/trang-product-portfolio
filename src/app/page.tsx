import SectionHead from "@/components/home/SectionHead";
import IntroBlock from "@/components/home/IntroBlock";
import ProjectGrid from "@/components/home/ProjectGrid";
import ExperienceList from "@/components/home/ExperienceList";
import SkillsGrid from "@/components/home/SkillsGrid";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";

export default function Home() {
  return (
    <main className="home">
      {/* Intro and about are one block — see src/content/intro.ts */}
      <IntroBlock />

      <section className="projects-section" id="work" aria-labelledby="h-work">
        <SectionHead
          id="h-work"
          number="01"
          label="Projects"
          meta={`${projects.length} PROJECTS`}
        />
        <ProjectGrid />
      </section>

      <section
        className="experience-section"
        id="experience"
        aria-labelledby="h-experience"
      >
        <SectionHead
          id="h-experience"
          number="02"
          label="Experience"
          meta={`${experience.length} COMPANIES`}
        />
        <ExperienceList />
      </section>

      <section className="skills-section" id="skills" aria-labelledby="h-skills">
        <SectionHead id="h-skills" number="03" label="Skills" />
        <SkillsGrid />
      </section>
    </main>
  );
}
