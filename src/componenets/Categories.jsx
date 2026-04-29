import FlipCard from '../UI/FlipCard';
import { useState, useEffect, useRef } from 'react';
import { genres } from '../../gamedata.js';

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function Categories() {
  const catRef = useRef(null);
  const rafRef = useRef(null);

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
    <section id="categories" ref={catRef} className="relative h-[400vh]">
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ background: current.bg, transition: 'background 0.6s ease' }}
      >
        <div className="absolute inset-0 flex flex-col justify-center gap-8 overflow-hidden pointer-events-none select-none">
          {[0, 1, 2, 3, 4, 5, 6].map((row) => (
            <div
              key={row}
              className="flex whitespace-nowrap"
              style={{
                animation: `${row % 2 === 0 ? 'marqueeLeft' : 'marqueeRight'} 20s linear infinite`,
              }}
            >
              {Array(8)
                .fill('VARIOUS GENRES OF GAMES · ')
                .map((text, i) => (
                  <span
                    key={i}
                    className="text-[clamp(2rem,4vw,3.5rem)]  text-pink-900/40 uppercase tracking-tight mr-6"
                    style={{
                      //   color: 'transparent',
                      // CHANGE: accent color at low opacity so it shifts per card
                      //   WebkitTextStroke: `1px ${current.accent}30`,
                      transition: 'all 0.6s ease',
                    }}
                  >
                    {text}
                  </span>
                ))}
            </div>
          ))}
        </div>

        {/* CHANGE: marquee keyframes injected via style tag.
            marqueeLeft scrolls left, marqueeRight scrolls right for alternating rows. */}
        <style>{`
          @keyframes marqueeLeft {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            from { transform: translateX(-50%); }
            to   { transform: translateX(0); }
          }
        `}</style>

        {/* 3D scene wrapper */}
        <div
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Outer static tilt — gives the "lying screen" look */}
          <div
            style={{
              transform: `rotateX(${tilt}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Inner scroll-driven X-axis flip */}
            <div
              className="relative  w-[680px] h-[420px] [transform-style:preserve-3d] will-change-transform rounded-lg "
              style={{ transform: `rotateX(${rotation}deg) scale(${scale})` }}
            >
              <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                {/* FRONT FACE */}

                <div
                  className="absolute inset-0 flex flex-col rounded-lg overflow-hidden

                bg-[linear-gradient(135deg,#0b020b,#140514,#1a071c)]

                shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)]"
                  style={{
                    backfaceVisibility: 'hidden',

                    WebkitBackfaceVisibility: 'hidden',

                    transform: 'rotateX(0deg)',
                  }}
                >
                  <CardContent genre={front} />
                </div>

                {/* BACK FACE */}

                <div
                  className="absolute inset-0 flex flex-col rounded-lg overflow-hidden

                bg-[linear-gradient(135deg,#0b020b,#140514,#1a071c)]

                shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)]"
                  style={{
                    backfaceVisibility: 'hidden',

                    WebkitBackfaceVisibility: 'hidden',

                    transform: 'rotateX(180deg)',
                  }}
                >
                  <CardContent genre={back} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardContent({ genre }) {
  const Icon = genre.icon;
  return (
    <div className="flex-1 relative overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${genre.img})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,5,20,0.8),rgba(10,5,20,0.4),transparent)] " />

      <div className="absolute px-8 py-12">
        <h2 className="font-semibold text-4xl text-amber-50 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          {genre.title}
        </h2>
        <p className=" text-gray-300 my-2.5 max-w-[520px]">{genre.description}</p>
        {genre.id === '5' ? (
          <Icon className=" absolute w-12 h-auto  text-gray-400 -bottom-55 -right-27 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
        ) : (
          <Icon className=" absolute w-10 h-auto  text-gray-400 -bottom-48 -right-9 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
        )}
      </div>
    </div>
  );
}

//  className="flipcard backface-hidden absolute inset-0 flex flex-col background border-b-36 border-amber-50 rounded-lg overflow-hidden
//        bg-[linear-gradient(135deg,#0b020b,#140514,#1a071c)] shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)]"
//       style={{ transform: isFront ? 'rotateX(0deg)' : 'rotateX(180deg)' }}
