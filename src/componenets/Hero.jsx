import { useRef, useState, useEffect } from 'react';
import useActiveNav from '../hooks/useActiveNav';

export default function Hero() {
  const heroRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useActiveNav(heroRef, '', 0.1);

  useEffect(() => {
    const handleScroll = () => {
      const rect = heroRef.current.getBoundingClientRect();
      const start = rect.height * 0.4;

      const progress = Math.min(1, Math.max(0, (start - rect.top) / rect.height));
      setProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const smooth = progress * progress;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-x-hidden flex justify-center items-center px-4 sm:px-6 -mt-14 sm:-mt-16 lg:mt-0"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center w-full max-w-5xl">
        <h2
          className="audiowide text-[clamp(2.5rem,12vw,9rem)] leading-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          style={{
            transform: `scale(${1 + smooth * 1.3})
            translateY(${-smooth * 60}px)`,
            opacity: 1 - smooth * 1.3,
          }}
        >
          Gameverse
        </h2>
        <p className="w-full max-w-xs sm:max-w-md md:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg font-light lg:font-extralight text-muted tracking-wider">
          Interactive interface for discovering and exploring games
        </p>
        <a
          href="#explore"
          className="actionBtn bg-amber-50 text-black inline-block mt-4 lg:mt-6 px-2.5 md:px-7.5 py-2 md:py-3 "
        >
          Explore Games &rarr;
        </a>
      </div>
    </section>
  );
}
