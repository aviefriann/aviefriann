import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tools />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;