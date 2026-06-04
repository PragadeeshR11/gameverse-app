import { use } from 'react';
import { ActiveSecCntxt } from '../../context/ActiveSection';

export default function AboutMeNav() {
  const { activeSec } = use(ActiveSecCntxt);
  return (
    <div className="sticky sticky-nav">
      <div className="flex justify-between items-center mx-4 md:mx-12">
        <a className="font-semibold" onClick={() => window.scrollTo({ top: 0 })}>
          Pragadeesh<span className="text-pink-700 text-3xl">.</span>
        </a>

        <div className="font-light text-gray-400/70">
          <ul className="flex gap-4 md:gap-8">
            <a
              id="nav"
              href="#about"
              className={`transition-colors duration-500 ease-out ${activeSec === 'about' ? 'text-[#f8f9fa]' : ''}`}
            >
              About
            </a>
            <a
              id="nav"
              href="#projects"
              className={`transition-colors duration-500 ease-out ${activeSec === 'projects' ? 'text-[#f8f9fa]' : ''}`}
            >
              Projects
            </a>
            <a
              id="nav"
              href="#contact"
              className={`transition-colors duration-500 ease-out ${activeSec === 'contact' ? 'text-[#f8f9fa]' : ''}`}
            >
              Contact
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
