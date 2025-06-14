import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Hero from './components/Hero';
import './App.css';
import Footer from './components/Footer';
import Hackathons from './pages/Hackathons';
import Blog from './pages/Blog';
import EJGraph from './components/EJGraph';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero/>
      <About/>
      <Hackathons/>
      <EJGraph/>
      <Projects />
      
      <Blog/>
      <Footer />
    </div>
  );
}

export default App;
