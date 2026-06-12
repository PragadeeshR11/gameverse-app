import HeroAbout from '../componenets/portfolio/HeroAbout';
import About from '../componenets/portfolio/About';
import AboutMeNav from '../componenets/portfolio/AboutMeNav';
import Projects from '../componenets/portfolio/Projects';
import Contact from '../componenets/portfolio/FooterAbout';
import { useEffect } from 'react';

export default function PortFolio() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <>
      <AboutMeNav />
      <HeroAbout />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
