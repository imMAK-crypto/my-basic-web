import { useState } from 'react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Collections } from './components/Collections';
import { About } from './components/About';
import { InstagramFeed } from './components/InstagramFeed';
import { Featured3D } from './components/Featured3D';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { useLenis } from './hooks/useLenis';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll
  useLenis();

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-tm-bg text-tm-text">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      {!isLoading && (
        <>
          <Cursor />
          <Navbar />

          <main>
            <Hero />
            <Marquee />
            <Collections />
            <Featured3D />
            <About />
            <InstagramFeed />
            <Contact />
          </main>

          <FloatingWhatsApp />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
