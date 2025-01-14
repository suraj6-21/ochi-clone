import About from './About';
import Cards from './Cards';
import Eyes from './components/Eyes';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Featured from './Featured';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

    const locomotiveScroll = new LocomotiveScroll;
     

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App