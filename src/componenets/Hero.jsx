import { useRef, useState, useEffect } from 'react';

//gameverse title scaling logic added
export default function Hero() {
  const heroRef = useRef(null);
  const [progress, setProgress] = useState(0);

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
    <section ref={heroRef} id="hero" className="relative overflow-x-hidden">
      <div className="title text-center">
        <h2
          className="audiowide text-9xl mt-48 mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          style={{
            transform: `scale(${1 + smooth * 1.3})
            translateY(${-smooth * 60}px)`,
            opacity: 1 - smooth * 1.3,
          }}
        >
          Gameverse
        </h2>
        <p className="text-lg font-thin text-muted tracking-wider">
          Interactive interface for discovering and exploring games
        </p>
        <a href="#explore" className="actionBtn inline-block mt-10 px-9 py-3">
          Explore Games &rarr;
        </a>
      </div>
    </section>
  );
}
