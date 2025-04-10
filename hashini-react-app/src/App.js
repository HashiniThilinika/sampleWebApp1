// import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import Services from './pages/Services';
import Header from './pages/Header';
import HomeSlider from './pages/HomeSlider';
import StatsSection from './pages/Stats';
import Testimonials from './pages/Testimonials';
import Clients from './pages/Clients';
import News from './pages/News';

import React from 'react';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
        <div>
          <Header />
          <HomeSlider />
          <Welcome />
          <Services />
          <StatsSection />
          <Testimonials />
          <Clients />
          <News />
          <Footer />
        </div>
    </div>
  );
}

export default App;
