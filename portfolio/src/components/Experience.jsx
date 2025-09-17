import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Personal Projects & Freelance",
      company: "Things I've worked on since graduation",
      period: "2025 - Present",
      description: "Working towards bridging gaps in technologies not learned through university. Learning C#, .NET, RESTful APIs, HTTP protocols, Next.js and responsive web design to challenge myself.",
      skills: ["React", "TypeScript", "Next.js", "C#", ".NET", "RESTful APIs"]
    },
    {
      id: 2,
      title: "Digitalization and Application Development",
      company: "Aalborg University",
      period: "2023 - 2025",
      description: " Here I have built a thorough and broad understanding of IT on top of my bachelor's degree in Organizational Learning. We build a broad foundation of IT skills, but among other things focused on system development, databases and data modeling, programming in JavaScript, SQL, Python, Java, C, etc. and digitalization and implementation of IT systems in companies.",
      skills: ["C", "Python", "Java", "SQL", "JavaScript", "React", "HTML/CSS", "Tailwind", "Git workflows", "CI/CD Pipelines", "Agile Methodologies", "Scrum", "Jira", "Figma"]
    },
    {
      id: 3,
      title: "Organizational Learning",
      company: "Aalborg University",
      period: "2020 - 2023",
      description: "Built responsive websites and web applications using HTML, CSS, and JavaScript. Learned modern development practices and gained experience with version control systems. Contributed to various client projects.",
      skills: ["HTML/CSS", "Umbraco", "R", "JavaScript"]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-content">
          <h2>Education</h2>
          <p>Here's a timeline of my education and journey towards web and software development.</p>
          
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-period">{exp.period}</div>
                <p className="experience-description">{exp.description}</p>
                <div className="project-tech">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience