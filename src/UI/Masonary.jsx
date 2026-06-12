import { masonary } from '../../gamedata';

export function Masonary({ progress }) {
  return (
    <div
      className="masonary relative w-full max-w-full will-change-transform scale-[1.75] sm:scale-125 md:scale-[1.45] lg:scale-115"
      style={{
        transform: `scale(${1 - progress * 0.4})`,
      }}
    >
      <div
        className="overflow-hidden w-full"
        style={{
          clipPath: `inset(${progress * 37}% ${progress * 12}% ${progress * 37}% ${progress * 12}% round ${progress * 400}px)`,
        }}
      >
        <div className="columns-2 sm:columns-3 gap-1 transform -rotate-[20deg] sm:-rotate-15 md:-rotate-[18deg] lg:-rotate-25">
          {masonary.map((img, i) => (
            <img key={i} src={img} alt="" className="mb-2 sm:mb-4 w-full rounded-lg" />
          ))}
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(0,0,0,${progress * 0.6})` }}
        />
      </div>
    </div>
  );
}

export function Masonarytext({ progress }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden px-4">
      <div
        style={{
          clipPath: `inset(${(1 - progress) * 100}% 0% 0% 0%)`,
          transition: 'none',
        }}
      >
        <p
          className="text-white font-black uppercase text-center leading-none select-none text-[clamp(1.5rem,8vw,4rem)]"
          style={{
            transform: `translateY(${(1 - progress) * 100}px)`,
            transition: 'none',
          }}
        >
          {['Your', 'Next', 'Adventure'].map((text, i) => (
            <div key={i} className="overflow-hidden">
              <span
                className="block"
                style={{
                  transform: `translateY(${(1 - progress) * 100}%)`,
                  transition: 'none',
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}
