// App.jsx
import React, { useRef, useEffect, useState } from 'react';
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

// Import the custom cursor image
import cursorImage from './assets/s.jpeg';

const App = () => {
  // State for the cursor trail
  const [trail, setTrail] = useState([]);

  // Reference for the water droplet effect canvas
  const canvasRef = useRef(null);

  // Cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrail((prevTrail) => [
        ...prevTrail,
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now(),
        },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Remove the oldest trail element to create the fading effect
    const interval = setInterval(() => {
      setTrail((prevTrail) => prevTrail.slice(1));
    }, 30); // Adjust the interval for smoother fading

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Water droplet effect
  useEffect(() => {
    // Get the canvas and its context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array to hold droplets
    let droplets = [];

    // Droplet class
    class Droplet {
      constructor(x, y, radius, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = speedY;
      }

      update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
          this.y = 0 - this.radius;
          this.x = Math.random() * canvas.width;
        }
      }

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
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3 + 2;
        const speedY = Math.random() * 2 + 1;
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
      animationFrameId = requestAnimationFrame(animate);
    }

    // Start animation
    initDroplets();
    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div
        className='relative z-0 bg-primary mx-auto'
        style={{
          cursor: `url(${cursorImage}), auto`, // Set the custom cursor
        }}
      >
        {/* Water Droplet Effect Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />

        {/* Cursor Trail Elements */}
        {trail.map((point, index) => {
          const opacity = 1 - index / trail.length; // Fading effect
          const size = 10 + index * 0.5; // Size variation
          return (
            <div
              key={point.id}
              style={{
                position: 'fixed',
                left: point.x,
                top: point.y,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `rgba(128, 128, 128, ${opacity})`, // Grey color
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)', // Center the element
              }}
            ></div>
          );
        })}

        {/* Existing Components */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center flex justify-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <PhraseConveyor />
        <Feedbacks />
        <div className='wave'>
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl'>
            <TypingEffect />
          </p>
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
