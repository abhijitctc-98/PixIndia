import React from 'react';
import NavBar from '../components/LandingPage/NavBar';
//import Logo from '../components/LandingPage/Logo';
import Home from '../components/LandingPage/Home';
import AboutUs from '../components/LandingPage/AboutUs';
import Achievements from '../components/LandingPage/Achievements';
import Portfolio from '../components/LandingPage/Portfolio';
import ShootingStars from '../components/Animations/ShootingStars';
import CameraClicks from '../components/Animations/CameraClicks';
import Asteroids from '../components/Animations/Asteroids';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <ShootingStars />
      <CameraClicks />
      <Asteroids />
      <NavBar />
      
      <div className="container mx-auto px-4">
        <Home />
        <AboutUs />
        <Achievements />
        <Portfolio />
      </div>
    </div>
  );
};

export default LandingPage;