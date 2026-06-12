import { useEffect, useRef, useState, useCallback } from 'react';
import PillSlider from '../util/Slider.jsx';

const INTERVAL = 7000;

export default function ExploreCarousel({ exploreItems, onSlideChange }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);
  const tx0 = useRef(null);

  const goTo = useCallback(
    (idx) => {
      const next = ((idx % exploreItems.length) + exploreItems.length) % exploreItems.length;
      setCurrent(next);
      onSlideChange?.(next);
      cancelAnimationFrame(rafRef.current);
      setProgress(0);
      startRef.current = null;
    },
    [exploreItems.length, onSlideChange]
  );

  useEffect(() => {
    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const pct = Math.min(100, ((now - startRef.current) / INTERVAL) * 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(0);
        startRef.current = null;
        setCurrent((prev) => {
          const next = (prev + 1) % exploreItems.length;
          onSlideChange?.(next);
          return next;
        });
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current, exploreItems.length, onSlideChange]);

  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-2xl touch-pan-y"
      onTouchStart={(e) => {
        tx0.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (tx0.current === null) return;
        const dx = e.changedTouches[0].clientX - tx0.current;
        if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
        tx0.current = null;
      }}
    >
      <div
        className="flex h-full transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          width: `${exploreItems.length * 100}%`,
          transform: `translateX(-${(current * 100) / exploreItems.length}%)`,
        }}
      >
        {exploreItems.map((item, i) => (
          <div
            key={i}
            style={{ width: `${100 / exploreItems.length}%` }}
            className="h-full relative flex-shrink-0"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover object-center sm:object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,2,15,0.72)] via-[rgba(5,2,15,0.35)] to-transparent pointer-events-none" />

            <div
              className={`absolute bottom-[4.5rem] sm:bottom-14 left-0 right-0
                px-4 sm:px-6 lg:px-8
                flex items-end justify-between
                transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              <div className="max-w-[min(440px,85%)] lg:max-w-[min(560px,60%)] 2xl:max-w-[min(640px,50%)]">
                <h3 className="text-[clamp(18px,2.8vw,38px)] 2xl:text-[clamp(28px,2vw,52px)] font-medium text-white leading-[1.15] mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-[clamp(12px,1.1vw,14px)] 2xl:text-[clamp(14px,0.8vw,18px)] leading-7 text-white/58 max-w-[min(340px,100%)] 2xl:max-w-[min(480px,100%)]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pill slider*/}
      <div className="absolute bottom-0 left-0 right-0 pb-3 sm:pb-4 flex justify-center z-20">
        <PillSlider count={exploreItems.length} current={current} onChange={goTo} />
      </div>
    </div>
  );
}
