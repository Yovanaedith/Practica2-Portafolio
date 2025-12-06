import React from 'react';

const skillsList = [
  { name: 'JavaScript / React', category: 'Frontend', level: 'Avanzado' },
  { name: 'HTML5 / CSS3', category: 'Frontend', level: 'Avanzado' },
  { name: 'Node.js / Express', category: 'Backend', level: 'Intermedio' },
  { name: 'MongoDB / SQL', category: 'Bases de Datos', level: 'Intermedio' },
  { name: 'Git / GitHub', category: 'Herramientas', level: 'Avanzado' },
  { name: 'Scrum / Metodologías Ágiles', category: 'Metodología', level: 'Avanzado' },
];

const Skills = () => {
  const groupedSkills = skillsList.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <section className="skills-section">
      <h2>Habilidades Técnicas 🧠</h2>
      <div className="skills-container">
        {Object.keys(groupedSkills).map((category) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {groupedSkills[category].map((skill) => (
                <li key={skill.name} title={`Nivel: ${skill.level}`}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
