import React from 'react'

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Aku-Log",
      description: "An acupuncture patient logging site with user authentication, patient data logging and admin dashboard. Built with React and Firebase.",
      technologies: ["React", "Vite", "HTML/CSS", "Firebase"],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "TODO: Dopamine Clicker",
      description: "A fun clicker game where users can earn points by clicking and purchasing upgrades. Built with React, Vite, and Express.",
      technologies: ["React", "Vite", "Netlify", "Express"],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    },
    // description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    {
      id: 3,
      title: "EcoHour",
      description: "A responsive planning dashboard that displays real-time electricity prices, and interactive maps using MinStrøm's API.",
      technologies: ["Android Studio", "Java", "MinStrøm API", "HTML/CSS"],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Data Entry Optimization Tool",
      description: "A tool designed during my 8th semester to streamline data entry processes and reduce manual input errors for an engineering company. Built with Python.",
      technologies: ["Python", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "TODO: Movie Website",
      description: "A movie discovery platform that allows users to search for and explore movies. Built with React, TMDB API, and CSS3.",
      technologies: ["C#", ".NET", "TMDB API", "React", "Vite", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "The site you're viewing right now! A clean, responsive portfolio website built with React and Vite. Features smooth animations and a nice dark mode for your (and my own) viewing pleasure.",
      technologies: ["React", "Vite", "Netlify"],
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/api/placeholder/400/250"
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-content">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on.</p>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      backgroundColor: '#f3f4f6'
                    }}
                  />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.demoUrl} 
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProjects