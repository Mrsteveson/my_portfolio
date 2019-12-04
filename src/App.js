import React from 'react';
import { withRouter } from 'react-router';
// import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
// import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Header />
      <About />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default withRouter(App);
