import React from 'react';
 import Navigation from "./components/Navigation"
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
export default function App() {
  return (
    <div>
      <Navigation />
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}
