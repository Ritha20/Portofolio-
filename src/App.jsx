import React from 'react';
 import Navigation from "./components/Navigation"
import About from './components/About';
import Hero from './components/Hero';
export default function App() {
  return (
    <div>
      <Navigation />
      <Hero/>
      <About/>
    </div>
  )
}
