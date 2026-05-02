import { useRef, useEffect, useState } from 'react';

export default function Footer() {
  const footRef = useRef(null);
  const [isBottom, setBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = footRef.current.getBoundingClientRect();

      if (rect.top <= window.innerHeight * 0.8) {
        setBottom(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="footer" ref={footRef}>
      <div className="flex justify-between items-start max-w-7xl mx-auto mb-10">
        <div>
          <a
            href="#root"
            className="font-semibold text-4xl bg-gradient-to-r from-[#d52d6e] to-[#8b2c9f] bg-clip-text text-transparent brightness-85
            cursor-pointer hover:brightness-110 hover:drop-shadow-2xl"
          >
            Gameverse
          </a>
          <p className="max-w-[420px] font-light text-sm text-muted py-2 leading-5">
            A curated gaming experience built with React,
            <br />
            designed around immersive UI and fluid motion experiences.
          </p>
        </div>
        <div className="text-right">
          <h2
            className="font-semibold text-3xl pb-1.5 bg-gradient-to-r from-[#ff4d8d] via-[#d52d6e] to-[#8b2c9f] 
          bg-clip-text text-transparent brightness-85"
          >
            Pragadeesh R
          </h2>
          <p className="font-light text-sm text-muted ">Frontend Developer</p>
          <p className="font-light text-sm text-muted ">React | UI/UX | Motion Design</p>
          <ul
            className={`flex gap-4.5 mt-1 pt-1.5 border-t border-white/15 brightness-80 transition-all duration-700 delay-400 ease-out   
            ${isBottom ? 'text-[#ff4d8d]' : 'text-muted'}`}
          >
            <a id="socials">LinkedIn</a>
            <a id="socials">GitHub</a>
            <a id="socials">Portfolio</a>
          </ul>
        </div>
      </div>
      <p className="font-extralight text-xs text-center text-gray-500 border-b border-white/10 pb-2">
        © 2026 Gameverse — Built by Pragadeesh
      </p>
    </footer>
  );
}
