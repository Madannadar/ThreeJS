import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/hero'
import About from './sections/About'
import Project from './sections/Project';
import Clients from './sections/Clients';

const App = () => {
  return (
    <main className='max-w 7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Clients />
    </main>
  )
}

export default App