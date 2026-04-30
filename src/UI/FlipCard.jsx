import FlipCardContent from './FlipCardContent';

export default function FlipCard({ current, tilt, rotation, scale, front, back }) {
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
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
                  className="text-[clamp(2rem,4vw,3.5rem)] font-medium uppercase tracking-tight mr-6"
                  style={{ color: `${current.textclr}`, transition: 'all 0.6s ease' }}
                >
                  {text}
                </span>
              ))}
          </div>
        ))}
      </div>

      {/* 3D scene wrapper */}
      <div style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }}>
        {/* Outer static tilt — gives the "lying screen" look */}
        <div style={{ transform: `rotateX(${tilt}deg)`, transformStyle: 'preserve-3d' }}>
          {/* Inner scroll-driven X-axis flip */}
          <div
            className="relative  w-[680px] h-[420px] rounded-2xl [transform-style:preserve-3d] will-change-transform  "
            style={{ transform: `rotateX(${rotation}deg) scale(${scale})` }}
          >
            <div className="absolute inset-0 [transform-style:preserve-3d] ">
              {/* FRONT FACE */}
              <div className="flipfront absolute inset-0 flex flex-col rounded-2xl overflow-hidden ">
                <FlipCardContent genre={front} />
              </div>

              {/* BACK FACE */}
              <div className="flipback absolute inset-0 flex flex-col rounded-2xl overflow-hidden ">
                <FlipCardContent genre={back} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
