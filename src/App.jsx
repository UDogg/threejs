import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary mx-auto'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center flex justify-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <p className="flex justify-center">Motion Graphics</p>
        <div className="wave"></div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
