import React, { useState } from 'react'

const Experience = () => {
  const [expanded, setExpanded] = useState(null)
  const experiences = [
    {
      id: 1,
      title: "Organizational Learning",
      company: "Aalborg University",
      period: "2020 - 2023",
      description: "Focus on development of and innovation in organizations, as well as business theory and knowledge about how to plan and handle organizational change.",
      skills: ["Management of corporate change", "Intra- and inter-organizational learning", "Organizational Psychology", "Human Resource Management"]
    },
    {
      id: 2,
      title: "Digitalization and Application Development",
      company: "Aalborg University",
      period: "2023 - 2025",
      description: "Built a thorough and broad understanding of IT on top of my bachelor's degree. Focused on system development, databases and data modeling, programming, familiarity with version control systems and digitalization and implementation of IT systems in companies.",
      skills: ["C", "Python", "Java", "SQL", "JavaScript", "React", "HTML/CSS", "Tailwind", "Git workflows", "CI/CD Pipelines", "Agile Methodologies", "Scrum", "Jira", "Figma"]
    },
    {
      id: 3,
      title: "Personal Projects & Freelance",
      company: "Things I've worked on since graduation",
      period: "2025 - Present",
      description: "Working towards bridging gaps in technologies not learned through university. Learning C#, .NET, RESTful APIs, HTTP protocols, Next.js and responsive web design to challenge myself.",
      skills: ["React", "TypeScript", "Next.js", "C#", ".NET", "RESTful APIs"]
    }
  ]

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-content">
          <h2>Education</h2>
          <p>Here's a timeline of my education and journey towards web and software development.</p>
          
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`experience-item cursor-pointer transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400`}
                onClick={() => handleToggle(exp.id)}
                style={{
                  transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
                }}
              >
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-period">{exp.period}</div>
                <div
                  className={`experience-details`}
                  style={{
                    maxHeight: expanded === exp.id ? 500 : 0,
                    opacity: expanded === exp.id ? 1 : 0,
                    overflow: 'hidden',
                    transform: expanded === exp.id ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)'
                  }}
                >
                  <p className="experience-description">{exp.description}</p>
                  <div className="project-tech">
                    {exp.skills.map((skill, index) => (
                      <span key={index} className="tech-tag">{skill}</span>
                    ))}
                  </div>
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