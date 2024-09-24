import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/LandingPage/Home';
import AboutUs from './components/LandingPage/AboutUs';
import Achievements from './components/LandingPage/Achievements';
import Portfolio from './components/LandingPage/Portfolio';
import AdminLogin from './components/Login/AdminLogin';
import DevLogin from './components/Login/DevLogin';
import ClientLogin from './components/Login/ClientLogin';
import AdminHome from './pages/AdminHome';
import DevHome from './pages/DevHome';
import ClientHome from './pages/ClientHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dev-login" element={<DevLogin />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/dev-home" element={<DevHome />} />
        <Route path="/client-home" element={<ClientHome />} />
      </Routes>
    </Router>
  );
};

export default App;