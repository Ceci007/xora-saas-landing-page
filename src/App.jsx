import React from 'react'
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import FaqSection from './sections/FaqSection';
import Testimonials from './sections/Testimonials';
import Download from './sections/Download';

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FaqSection />
      <Testimonials />
      <Download />
    </main>
  )
}

export default App;
