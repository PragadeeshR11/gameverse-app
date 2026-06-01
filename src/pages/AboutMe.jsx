import HeroAbout from '../componenets/portfolio/HeroAbout';
import About from '../componenets/portfolio/About';
import AboutMeNav from './AboutMeNav';
import Projects from '../componenets/portfolio/Projects';
import Contact from '../componenets/portfolio/FooterAbout';

export default function AboutMe() {
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
