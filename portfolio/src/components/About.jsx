import React from 'react'

const About = () => {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <div className="section-content">
          <h1 className="hero-title">
            Hello! I'm Cecilie Ellegaard Jacobsen. Check out what I'm working on here.
          </h1>
          <p className="hero-subtitle">
            I am an aspiring full-stack developer with a passion for digitalization.
            I try my best to make things with ❤️. <br />
            I'm also a video game enthusiast and movie lover.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="/CEJ_CV_ENG.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Check my CV
            </a>
          </div>
             
          <div className="skills-preview">
            <h3>Technologies I work with:</h3>
            <div className="tech-tags">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">HTML + CSS</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Android</span>
              <span className="tech-tag">ML algorithms</span>
              <span className="tech-tag">RESTful APIs</span>
              <span className="tech-tag">C#</span>
              <span className="tech-tag">.NET</span>
              <span className="tech-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About