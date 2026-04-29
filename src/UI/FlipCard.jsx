import { genres } from '../../gamedata.js';

export default function FlipCard({}) {
  //   const Icon = genres.icon;
  return (
    <section ref={sectionRef} style={{ height: `${genres.length * 100}vh` }} className="relative">
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ background: current.bg, transition: 'background 0.6s ease' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${current.accent}22 0%, transparent 70%)`,
            transition: 'background 0.6s ease',
          }}
        />

        {/* Progress indicator */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
          {genres.map((g, i) => (
            <div
              key={i}
              className="rounded-sm"
              style={{
                width: i === index ? '3px' : '2px',
                height: i === index ? '32px' : '16px',
                background: i === index ? current.accent : 'rgba(255,255,255,0.2)',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Genre counter top-left */}
        <div
          className="absolute top-10 left-10 font-mono text-[11px] tracking-[0.2em] uppercase opacity-80"
          style={{ color: current.accent, transition: 'color 0.4s ease' }}
        >
          {String(index + 1).padStart(2, '0')} / {String(genres.length).padStart(2, '0')}
        </div>

        {/* 3D Card scene */}
        <div style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}>
          <div
            className="relative"
            style={{
              width: 'min(420px, 88vw)',
              height: 'min(560px, 75vh)',
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg) scale(${scale})`,
              willChange: 'transform',
            }}
          >
            <CardFace genre={front} isFront={true} accent={front.accent} />
            <CardFace genre={back} isFront={false} accent={back.accent} />
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
          style={{ opacity: Math.max(0, 1 - displayState.progress * 12) }}
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
            scroll
          </span>
          <div
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
          />
        </div>
      </div>
    </section>
  );
}

function CardFace({ genre, isFront, accent }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-end overflow-hidden"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: isFront ? 'rotateY(0deg)' : 'rotateY(180deg)',
        borderRadius: '24px',
        border: `1px solid ${accent}33`,
        background: genre.bg,
      }}
    >
      {/* Emoji area */}
      <div className="flex-1 flex items-center justify-center text-[96px] relative">
        <div
          className="absolute w-[200px] h-[200px] rounded-full"
          style={{
            background: `${accent}15`,
            border: `1px solid ${accent}25`,
          }}
        />
        <span className="relative z-10">{genre.emoji}</span>
      </div>

      {/* Bottom content */}
      <div
        className="px-8 pt-8 pb-10"
        style={{
          borderTop: `1px solid ${accent}22`,
          background: `linear-gradient(to bottom, transparent, ${genre.bg}ee)`,
        }}
      >
        <p
          className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-90 mb-2.5"
          style={{ color: accent }}
        >
          {genre.subtitle}
        </p>
        <h2
          className="font-serif font-bold text-white leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
        >
          {genre.title}
        </h2>
        <p className="font-serif text-[0.95rem] text-white/55 leading-relaxed italic">
          {genre.description}
        </p>
      </div>
    </div>
  );
}
