import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TokenSection from './components/TokenSection';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <TokenSection />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;