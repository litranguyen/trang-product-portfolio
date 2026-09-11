import { skills } from "@/content/skills";

export default function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skills.map((group) => (
        <section key={group.id} className="skills-group">
          <h3 className="skills-group-label">{group.label}</h3>

          <ul className="skill-tags">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {group.note ? <p className="skills-group-note">{group.note}</p> : null}
        </section>
      ))}
    </div>
  );
}
