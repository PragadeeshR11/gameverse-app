import FlipCardContent from './FlipCardContent';

export default function FlipCard({ current, tilt, rotation, scale, front, back }) {
  const rows = [...Array(window.innerWidth < 768 ? 12 : 16).keys()];
  return (
    <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidde">
      <div className="absolute inset-0 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 overflow-hidden pointer-events-none select-none">
        {rows.map((row) => (
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

      <div style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }}>
        <div style={{ transform: `rotateX(${tilt}deg)`, transformStyle: 'preserve-3d' }}>
          <div
            className="relative w-[320px] h-[220px] sm:w-[420px] sm:h-[260px] md:w-[580px] md:h-[340px] lg:w-[680px] lg:h-[420px] 
            rounded-2xl [transform-style:preserve-3d] will-change-transform "
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
