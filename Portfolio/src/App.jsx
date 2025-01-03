import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/hero'
import About from './sections/About'
import Project from './sections/Project';

const App = () => {
  return (
    <main className='max-w 7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Project />
    </main>
  )
}

export default App