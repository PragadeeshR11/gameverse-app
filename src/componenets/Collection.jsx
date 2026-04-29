import { useRef, useEffect, useState } from 'react';
import { Layout } from '../UI/Layouts';
import { Masonary, Masonarytext } from '../UI/Masonary';

export default function Collection() {
  const [progress, setProgress] = useState(0);
  const colRef = useRef(null);
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
        <Masonary progress={progress} />
        <Masonarytext progress={progress} />
      </div>
    </section>
  );
}
