import React from 'react';

import './App.scss';

import Navbar from './components/navbar';
import Hero from './components/hero';
import WhoAmI from './components/whoami';
import ListComponent from './components/listcomponent';
import Contact from './components/contact';
import Foot from './components/foot';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <WhoAmI />
      <ListComponent />
      <Contact />
      <Foot />
    </React.Fragment>
  );
}

export default App;
