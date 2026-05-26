import FlipCard from '../UI/FlipCard';
import { useState, useEffect, useRef, use } from 'react';
import { genres } from '../../gamedata.js';
import useActiveNav from '../hooks/useActiveNav.js';

//new flip logic has beed added instead of hover card
function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function Categories() {
  const catRef = useRef(null);
  const rafRef = useRef(null);

  useActiveNav(catRef, 'explore', 0.1);

  const rawProgress = useRef(0);
  const smoothProgress = useRef(0);

  const [displayState, setDisplayState] = useState({
    progress: 0,
    index: 0,
    rotation: 0,
    scale: 1,
    tilt: 0,
  });

  useEffect(() => {
    const computeRaw = () => {
      const rect = catRef.current?.getBoundingClientRect();
      if (!rect) return 0;
      const vh = window.innerHeight;
      const totalScroll = rect.height - vh;
      if (rect.top > 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / totalScroll));
    };

    const tick = () => {
      rawProgress.current = computeRaw();
      smoothProgress.current = lerp(smoothProgress.current, rawProgress.current, 0.07);

      const p = smoothProgress.current;
      const totalItems = genres.length;
      const totalTransitions = totalItems - 1;

      const rawIndex = p * totalTransitions;
      const clampedRawIndex = Math.min(rawIndex, totalTransitions);
      const index = Math.min(Math.floor(clampedRawIndex), totalItems - 1);
      const segmentProgress = clampedRawIndex - Math.floor(clampedRawIndex);

      // CHANGE: easeInOutQuad applied to segmentProgress so each card
      // decelerates into a flat rest position — gives snap feel per card
      const eased =
        segmentProgress < 0.5
          ? 2 * segmentProgress * segmentProgress
          : 1 - Math.pow(-2 * segmentProgress + 2, 2) / 2;

      // CHANGE: rotation now uses eased progress so it snaps at 0 and 180
      // instead of linear lerp which never truly settled
      //   const rotation = index * 180 + eased * 180;
      const rotation = eased * 180;
      const midFlipDip = Math.sin(eased * Math.PI);
      const scale = 1 - midFlipDip * 0.06;

      // CHANGE: tilt is now dynamic — 0 at rest, peaks mid-flip only.
      // Previously tilt was a static offset so first/last cards were always tilted.
      const tilt = midFlipDip * 14;

      setDisplayState({ progress: p, index, rotation, scale, tilt });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const { index, rotation, scale, tilt } = displayState;

  // CHANGE: front/back now derived from rotation directly (floor(rotation/180))
  // instead of using `index` — fixes 2nd/3rd card overlap where index and the
  // actual visible face fell out of sync mid-section
  const front = genres[index];
  const isLast = index === genres.length - 1;
  const back = isLast ? genres[index] : genres[index + 1];

  const normalizedRot = ((rotation % 360) + 360) % 360;
  const showingBack = normalizedRot > 90 && normalizedRot < 270;
  const current = isLast ? front : showingBack ? back : front;

  return (
    <section id="categories" ref={catRef} className="relative h-[400vh] ">
      <FlipCard
        current={current}
        tilt={tilt}
        rotation={rotation}
        scale={scale}
        front={front}
        back={back}
      />
    </section>
  );
}
