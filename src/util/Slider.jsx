import { useEffect, useRef } from 'react';

export default function PillSlider({ count, current, onChange }) {
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current || !thumbRef.current) return;
    const dots = sliderRef.current.querySelectorAll('.pill-dot');
    const dot = dots[current];
    if (!dot) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    const pad = 4;
    thumbRef.current.style.left = dotRect.left - sliderRect.left - pad + 'px';
    thumbRef.current.style.width = dotRect.width + pad * 2 + 'px';
  }, [current]);

  return (
    <div
      ref={sliderRef}
      className="relative inline-flex items-center gap-[16px] px-4.5 py-[8px] rounded-full
        bg-white/8 border border-white/10"
    >
      {/* Sliding pill thumb */}
      <div
        ref={thumbRef}
        className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-14px)] rounded-full
          bg-white/75 pointer-events-none z-0
          transition-[left,width] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      />

      {/* Dots */}
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          data-active={i === current}
          onClick={() => onChange(i)}
          className="pill-dot relative z-10 w-1.5 h-1.5 rounded-full flex-shrink-0
            bg-white/30 hover:bg-white/55 transition-colors duration-300 cursor-pointer
            border-0 outline-none p-0"
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
