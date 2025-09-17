import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <About />
        <MyProjects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App