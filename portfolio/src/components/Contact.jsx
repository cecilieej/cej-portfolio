import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-content">
          <h2>Get In Touch With Me</h2>
          <p>
            I'm always up for a chat or a coffee! Feel free to reach out, 
            I love to receive mail from real people.
          </p>
          
          <div className="contact-content flex flex-col md:flex-row items-center gap-8">
            <img
              src="/src/assets/cej_september_nobg_color.PNG"
              alt="Cecilie Ellegaard Jacobsen"
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-6"
            />
            <div className="contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:cecilieej@outlolok.com">cecilieej@outlook.com</a>
              </div>
              <div className="contact-item">
                <h4>Location</h4>
                <p>Odense, Denmark</p>
              </div>
              <div className="contact-item">
                <h4>Availability</h4>
                <p>Open to new opportunities</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact