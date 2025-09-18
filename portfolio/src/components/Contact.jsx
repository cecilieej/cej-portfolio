import React, { useRef, useEffect, useState } from 'react'

const Contact = () => {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="section"
      ref={sectionRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)'
      }}
    >
      <div className="container">
        <div className="section-content flex flex-col items-center text-center">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out, I love to receive mail from real people. <br />
          </p>
          <div className="contact-content flex flex-col md:flex-row items-center gap-8 justify-center">
            <img
              src="/src/assets/cej_september_nobg_color.PNG"
              alt="Cecilie Ellegaard Jacobsen"
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-6"
            />
            <div className="contact-info text-center">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:cecilieej@outlook.com">cecilieej@outlook.com</a>
              </div>
              <div className="contact-item">
                <h4>Location</h4>
                <p>Odense, Denmark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact