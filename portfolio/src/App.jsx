import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';
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
        <Analytics />
      </main>
      
      <Footer />
    </div>
  )
}

export default App