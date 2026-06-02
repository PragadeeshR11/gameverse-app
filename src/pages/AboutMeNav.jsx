import { use } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection';
import { Outlet } from 'react-router-dom';

export default function AboutMeNav() {
  const { activeSec } = use(ActiveSecCntxt);
  return (
    <div
      className="sticky top-0 w-full text-[17px] pt-5 pb-2 items-center z-10
              bg-[linear-gradient(to_bottom,rgba(6,3,15,0.9),rgba(6,3,15,0.65),transparent)] backdrop-blur-md"
    >
      <div className="flex justify-between mx-12">
        <a className="font-semibold" onClick={() => window.scrollTo({ top: 0 })}>
          Pragadeesh<span className="text-pink-700 text-3xl">.</span>
        </a>

        <div className="font-light text-gray-400/70 justify-self-center">
          <ul className="flex gap-8">
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

      <Outlet />
    </div>
  );
}
