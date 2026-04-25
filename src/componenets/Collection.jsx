import { useRef, useEffect, useState } from 'react';
import { masonary } from '../../gamedata';

export default function Collection() {
  const colRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = colRef.current.getBoundingClientRect();
      const vh = window.innerHeight; //835
      const totalScroll = rect.height - vh;

      const shrinkStart = -(totalScroll * 0.5);
      const shrinkEnd = -totalScroll;

      let scrollProgress = 0;
      if (rect.top <= shrinkStart) {
        scrollProgress = (rect.top - shrinkStart) / (shrinkEnd - shrinkStart);
        scrollProgress = Math.min(1, Math.max(0, scrollProgress));
      }

      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="collection" ref={colRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="masonary relative transition-all duration-300 will-change-transform scale-115"
          style={{
            transform: `scale(${1 - progress * 0.4})`,
          }}
        >
          <div
            className="overflow-hidden"
            style={{
              clipPath: `inset(${progress * 52.5}% ${progress * 25}% ${progress * 52.5}% ${progress * 25}% round ${progress * 400}px)`,
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
          style={{ opacity: progress * 0.5 }}
        />
      </div>
    </section>
  );
}
