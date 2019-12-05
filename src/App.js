import React from 'react';
import { withRouter } from 'react-router';
// import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import './app.scss'

function App() {
  return (
    <div className = 'app'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default withRouter(App);
