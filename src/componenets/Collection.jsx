import { useRef, useEffect, useState } from 'react';
import { masonary } from '../../gamedata';

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
      const shrinkStart = -(totalScroll * 0.5);
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
    <section id="collection" ref={colRef} className="relative h-[200vh]">
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
              clipPath: `inset(${progress * 33}% ${progress * 10}% ${progress * 33}% ${progress * 10}% round ${progress * 400}px)`,
            }}
          >
            <div className="columns-3 gap-1 transform -rotate-25">
              {masonary.map((img, i) => (
                <img key={i} src={img} className="mb-4 w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: progress * 0.6 }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{
            opacity: progress,
          }}
        >
          <p
            className="text-white font-black uppercase text-center leading-none select-none"
            style={{
              //   fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontSize: '80px',
              transform: `translateY(${(1 - progress) * 100}px)`,
              transition: 'none',
            }}
          >
            Biggest
            <br />
            Game <br />
            Collection
          </p>
        </div>
      </div>
    </section>
  );
}
