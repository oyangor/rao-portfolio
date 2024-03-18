import './App.scss'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import particles from './utils/particles'


import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'


function App() {

  const location = useLocation()
  //console.log(location);


  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const renderparticlesInHomePage = location.pathname === '/'


  return (
    <div className='App' >
      {/* particle js */}
      {
        init && renderparticlesInHomePage && <Particles
          id="tsparticles"
          options={particles}
          particlesLoaded={particlesLoaded}
        />
      }

      {/* navbar */}
      <Navbar className=' bg-yellow-300' />

      <div className='App_main-page-content'>
        {/* main page content */}
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/resume' element={<Resume />} />
          <Route index path='/skills' element={<Skills />} />
          <Route index path='/portfolio' element={<Portfolio />} />
          <Route index path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
