import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import './App.css';
import TypingEffect from "./components/TypingEffect";
import PhraseConveyor from "./components/PhraseConveyor";

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
        <PhraseConveyor />
        <Feedbacks />
        <div className="wave"><p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl"><TypingEffect /></p></div>
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
