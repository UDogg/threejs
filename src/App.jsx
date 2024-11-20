// App.js
import React, { useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from './components';
import './App.css';
import TypingEffect from './components/TypingEffect';
import PhraseConveyor from './components/PhraseConveyor';

const App = () => {
  // Reference to the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Get the canvas and its context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array to hold all droplets
    let droplets = [];

    // Droplet class definition
    class Droplet {
      constructor(x, y, radius, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = speedY;
      }

      // Update droplet position
      update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
          this.y = 0 - this.radius;
          this.x = Math.random() * canvas.width;
        }
      }

      // Draw the droplet
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(173,216,230,0.5)';
        ctx.fill();
        ctx.closePath();
      }
    }

    // Initialize droplets
    function initDroplets() {
      for (let i = 0; i < 200; i++) { // Adjust the number for density
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 3 + 2;
        let speedY = Math.random() * 2 + 1;
        droplets.push(new Droplet(x, y, radius, speedY));
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      droplets.forEach((droplet) => {
        droplet.update();
        droplet.draw();
      });
      requestAnimationFrame(animate);
    }

    // Start the animation
    initDroplets();
    animate();

    // Update canvas size on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary mx-auto'>
        {/* Background and navigation */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center flex justify-center'>
          <Navbar />
          <Hero />
        </div>

        {/* Main content */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <PhraseConveyor />
        <Feedbacks />

        {/* Typing effect */}
        <div className='wave'>
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl'>
            <TypingEffect />
          </p>
        </div>

        {/* Contact and footer */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>

        {/* Canvas for the water droplet effect */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none', // Allows interaction with underlying elements
            zIndex: 9999, // Adjust to position the canvas correctly in your layout
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
