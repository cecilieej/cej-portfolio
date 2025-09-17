import React from 'react'

const About = () => {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <div className="section-content">
          <h1 className="hero-title">
            Hello, I'm  [ C e c e ]
          </h1>
          <p className="hero-subtitle">
            Aspiring full-stack developer with a passion for digitalization through 
            modern web technologies. I try my best to make things with ❤️. I'm also a 
            video game enthusiast and movie lover.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
             
          <div className="skills-preview">
            <h3>Technologies I work with:</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">C#</span>
              <span className="tech-tag">HTML + CSS</span>
              <span className="tech-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About