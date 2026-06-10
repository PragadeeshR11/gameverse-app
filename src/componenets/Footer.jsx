import { useRef, useEffect, useState } from 'react';
import useActiveNav from '../hooks/useActiveNav';
import { useNavigate } from 'react-router-dom';
import { socials } from '../../gamedata';

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
    <footer id="footer" ref={footRef} className="relative py-10 px-4 sm:px-6 overflow-hidden">
      <div className="w-full flex justify-center items-start mb-16 sm:mb-20 md:mb-36">
        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10 text-muted tracking-wider text-center sm:text-left">
          {socials.map((social) => {
            if (social.id != 4) {
              return (
                <li key={social.id}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socials"
                  >
                    {social.name}
                  </a>
                </li>
              );
            }
          })}
          <li>
            <button
              type="button"
              onClick={() => navigate('/portfolio')}
              className="socials text-pink-500/70 hover:brightness-80"
            >
              Meet the Developer &rarr;
            </button>
          </li>
        </ul>
      </div>

      <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-10 inset-x-0 flex justify-center lg:justify-end lg:px-16 overflow-hidden pointer-events-none">
        <h1
          className="font-black leading-none text-transparent opacity-40 select-none text-[clamp(3rem,18vw,10rem)]"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
          aria-hidden="true"
        >
          GAMEVERSE
        </h1>
      </div>
      <p className="relative z-10 font-light text-xs text-center lg:text-left text-gray-500 lg:ml-4">
        © 2026 Gameverse
      </p>
    </footer>
  );
}
