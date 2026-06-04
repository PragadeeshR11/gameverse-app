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
      className="portfolio h-screen  flex flex-col items-center justify-center"
    >
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold">
          <span>{animatedWord}</span>
          <span className="animate-blink font-thin">|</span>
          <br /> Developer
        </h1>
        <p className="subtleAccent text-sm sm:text-base mt-6 pl-1.5">
          3.5 Years Experience • Frontend Development • React • JavaScript
        </p>
        <div className="max-w-8xl mx-auto flex justify-end my-10">
          <button className="actionBtn w-full sm:w-auto flex items-center text-gray-300 px-6.5 py-2.5 hover:font-normal hover:scale-[1.02]">
            <span>Resume</span> <RiDownloadLine className="inline-block text-lg ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
