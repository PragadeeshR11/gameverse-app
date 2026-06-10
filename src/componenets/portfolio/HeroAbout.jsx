import { useRef } from 'react';
import { RiDownloadLine } from 'react-icons/ri';
import useActiveNav from '../../hooks/useActiveNav';
import useTypewriter from '../../hooks/useTypeWriter';

const WORDS = ['Frontend', 'React', 'UI'];

export default function HeroAbout() {
  const secRef = useRef();

  const animatedWord = useTypewriter(WORDS);
  useActiveNav(secRef, '', 0.4);

  return (
    <section
      ref={secRef}
      id="heroAbout"
      className="portfolio min-h-screen flex flex-col items-center justify-center py-16 sm:py-20"
    >
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold">
          <span>{animatedWord}</span>
          <span className="animate-blink font-thin">|</span>
          <br /> Developer
        </h1>
        <p className="subtleAccent text-xs sm:text-sm md:text-base mt-4 sm:mt-6 pl-0 sm:pl-1.5 max-w-xl mx-auto sm:mx-0">
          3.5 Years Experience • Frontend Development • React • JavaScript
        </p>
        <div className="w-full flex justify-center sm:justify-start my-8 sm:my-10">
          <a
            href="/resume/Pragadeesh_R_React_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="actionBtn w-full sm:w-auto flex items-center justify-center text-gray-300 px-6 py-2.5 hover:font-normal hover:scale-[1.02]"
          >
            <span>Resume</span> <RiDownloadLine className="inline-block text-lg ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
