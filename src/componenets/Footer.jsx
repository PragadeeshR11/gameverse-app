import { useRef, useEffect, useState, use } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection';
import useActiveNav from '../hooks/useActiveNav';
import { useNavigate } from 'react-router-dom';

// dynamic styling added with scroll
export default function Footer() {
  const footRef = useRef();
  const navigate = useNavigate();
  const [isBottom, setBottom] = useState(false);

  useActiveNav(footRef, 'credits', 0);

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
    <footer id="footer" ref={footRef} className="relative py-10 overflow-hidden">
      <div className="w-full flex justify-center items-start mb-36">
        <ul className="flex gap-10 text-muted tracking-wider">
          <a className="socials">GitHub</a>
          <a className="socials">LinkedIn</a>
          <a className="socials">Resume</a>
          <a
            onClick={() => navigate('/aboutme')}
            className="socials text-pink-500/70 hover:brightness-80"
          >
            Meet the Developer &rarr;{' '}
          </a>
        </ul>
      </div>
      <div className="absolute -bottom-10 left-35 w-full flex justify-center">
        <h1
          className="text-[10rem] font-black leading-none text-transparent opacity-40 whitespace-nowrap select-none pointer-events-none"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
        >
          GAMEVERSE
        </h1>
      </div>
      <p className="font-light text-xs text-left text-gray-500 ml-4">© 2026 Gameverse</p>
    </footer>
  );
}
