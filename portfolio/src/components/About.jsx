import React from 'react'

const About = () => {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <div className="section-content">
          <h1
            className="
              hero-title
              bg-gradient-to-r
              from-blue-500
              via-green-300
              to-purple-600
              bg-clip-text
              text-transparent
              font-extrabold
              animate-gradient-x
            "
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-x 8s ease-in-out infinite',
              lineHeight: '1.3',
              marginTop: '5.5rem',
            }}
          >
            Hi! I'm Cecilie Ellegaard Jacobsen. Here's what I've been working on.
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
            <div className="scroller" data-speed="slow">
              <ul className="tag-list scroller__inner">
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>HTML + CSS</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Android</li>
                <li>System architecture</li>
                <li>Database management</li>
                <li>SQL</li>
                <li>ML algorithms</li>
                <li>RESTful APIs</li>
                <li>C#</li>
                <li>.NET</li>
                <li>Angular</li>
                <li>UX Design</li>
                <li>Figma</li>
                <li>Git workflows</li>
                <li>Agile methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About