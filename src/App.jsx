import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Products from './components/Products';
import Education from './components/Education';
import Footer from './components/Footer';
import Support from './components/Support';
import About from './components/About';
import Auth from './components/Auth';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Features />
              <Products />
              <Pricing />
              <Education />
            </>
          }
        />

        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/education" element={<Education />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
