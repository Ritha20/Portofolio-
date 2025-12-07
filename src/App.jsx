import React from 'react';
 import Navigation from "./components/Navigation"
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
export default function App() {
  return (
    <div>
      <Navigation />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
