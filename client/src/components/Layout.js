import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './LandingPage/NavBar';
//import Logo from './LandingPage/Logo';
import ShootingStars from './Animations/ShootingStars';
import CameraClicks from './Animations/CameraClicks';
import Asteroids from './Animations/Asteroids';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <ShootingStars />
      <CameraClicks />
      <Asteroids />
      <NavBar />
      
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;