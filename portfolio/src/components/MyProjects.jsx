import React from 'react'

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Aku-Log",
      description: "An acupuncture patient logging site with user authentication, patient data logging and admin dashboard. Built with React and Firebase.",
      technologies: ["JS", "React", "Vite", "HTML/CSS", "Firebase"],
      demoUrl: "https://aku-log.netlify.app",
      showDemo: true,
      githubUrl: "https://github.com/cecilieej/akupunktur-app",
      showGithub: true,
      imageUrl: "/aku-log.png"
    },
    {
      id: 2,
      title: "Dopamine Clicker",
      description: "In progress. A clicker-style game that will stimulate your senses as you earn dopamine points. Built with React and Vite.",
      technologies: ["JS", "React", "Vite", "HTML/CSS", "Netlify"],
      demoUrl: "#",
      showDemo: true,
      githubUrl: "https://github.com/cecilieej/dopamine-clicker",
      showGithub: true,
      imageUrl: "/placeholder.png"
    },
    // description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    {
      id: 3,
      title: "EcoHour",
      description: "Calendar designed for households to optimize energy usage during low-cost hours by displaying real-time electricity prices. Built with Java in Android Studio.",
      technologies: ["Android", "Java", "MinStrøm API", "HTML/CSS"],
      demoUrl: "#",
      showDemo: false,
      githubUrl: "https://github.com/targot19/P8",
      showGithub: true,
      imageUrl: "\ecohour.png"
    },
    {
      id: 4,
      title: "Data Entry Optimization Tool",
      description: "A tool designed during my 8th semester to streamline data entry processes and reduce manual input errors for an engineering company working with PLM systems in M365. Built with Python.",
      technologies: ["Python", "Pandas", "ScikitLearn", "SQL"],
      demoUrl: "#",
      showDemo: false,
      githubUrl: "#",
      showGithub: false,
      imageUrl: "/PLM-solution.png"
    },
    {
      id: 5,
      title: "Movie Website",
      description: "In progress. A platform for myself and friends to import their Letterboxd data to get an overview of which movies they have in common. To be built with C#, .NET, Next.js and React.",
      technologies: ["C#", ".NET", "Next.js", "React", "Vite", "Tailwind CSS"],
      demoUrl: "#",
      showDemo: false,
      githubUrl: "#",
      showGithub: false,
      imageUrl: "/placeholder.png"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "The site you're viewing right now! A simple portfolio website built with React and Vite. Also featuring a nice dark mode for your (and my own) viewing pleasure.",
      technologies: ["JS", "React", "Vite", "HTML/CSS", "Vercel"],
      demoUrl: "https://cecilieej.vercel.app",
      showDemo: true,
      githubUrl: "https://github.com/cecilieej/cej-portfolio",
      showGithub: true,
      imageUrl: "/cecilieej_sceenshot.png"
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-content">
          <h2>Projects</h2>
          <p>Here are some of my projects, both completed and in-progress.</p>
          
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
                  {project.showDemo && (
                    <a 
                    href={project.demoUrl} 
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  )}
                  
                  {project.showGithub && (
                    <a 
                    href={project.githubUrl} 
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  )}
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