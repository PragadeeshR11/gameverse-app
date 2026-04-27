import { useRef, useEffect, useState } from 'react';
import { masonary } from '../../gamedata';
import { Layout } from '../UI/Layouts';

export default function Collection() {
  const colRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const rawProgress = useRef(0);
  const smoothProgress = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const computeRaw = () => {
      const rect = colRef.current?.getBoundingClientRect();
      if (!rect) return 0;
      const vh = window.innerHeight;
      const totalScroll = rect.height - vh;
      const shrinkStart = -(totalScroll * 0.2);
      const shrinkEnd = -totalScroll;

      if (rect.top > shrinkStart) return 0;
      return Math.min(1, Math.max(0, (rect.top - shrinkStart) / (shrinkEnd - shrinkStart)));
    };

    const tick = () => {
      rawProgress.current = computeRaw();
      smoothProgress.current += (rawProgress.current - smoothProgress.current) * 0.08;

      if (Math.abs(rawProgress.current - smoothProgress.current) > 0.0001) {
        setProgress(smoothProgress.current);
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <section id="collection" ref={colRef} className="col relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="masonary relative will-change-transform scale-115"
          style={{
            transform: `scale(${1 - progress * 0.4})`,
          }}
        >
          <div
            className="overflow-hidden"
            style={{
              clipPath: `inset(${progress * 35}% ${progress * 10}% ${progress * 35}% ${progress * 10}% round ${progress * 400}px)`,
            }}
          >
            <div className="columns-3 gap-1 transform -rotate-25">
              {masonary.map((img, i) => (
                <img key={i} src={img} className="mb-4 w-full rounded-lg" />
              ))}
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: `rgba(0,0,0,${progress * 0.6})` }}
            />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
          <div
            style={{
              clipPath: `inset(${(1 - progress) * 100}% 0% 0% 0%)`,
              transition: 'none',
            }}
          >
            <p
              className="text-white font-black uppercase text-center leading-none select-none"
              style={{
                //   fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontSize: '76px',
                transform: `translateY(${(1 - progress) * 100}px)`,
                transition: 'none',
              }}
            >
              {['Biggest', 'Game', 'Collection'].map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <span
                    className="block"
                    style={{
                      transform: `translateY(${(1 - progress) * 100}%)`,
                      transition: 'none',
                    }}
                  >
                    {word}
                  </span>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
