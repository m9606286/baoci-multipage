import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Announcement from '../components/Announcement';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Announcement />
      <About />
    </div>
  );
}
