import { masonary } from '../../gamedata';

export function Masonary({ progress }) {
  return (
    <div
      className="masonary relative will-change-transform scale-115"
      style={{
        transform: `scale(${1 - progress * 0.4})`,
      }}
    >
      <div
        className="overflow-hidden"
        style={{
          clipPath: `inset(${progress * 35}% ${progress * 10}% ${progress * 35}% ${progress * 10}% round ${progress * 400}px)`,
        }}
      >
        <div className="columns-3 gap-1 transform -rotate-25">
          {masonary.map((img, i) => (
            <img key={i} src={img} className="mb-4 w-full rounded-lg" />
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
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
      <div
        style={{
          clipPath: `inset(${(1 - progress) * 100}% 0% 0% 0%)`,
          transition: 'none',
        }}
      >
        <p
          className="text-white font-black uppercase text-center leading-none select-none"
          style={{
            fontSize: '76px',
            transform: `translateY(${(1 - progress) * 100}px)`,
            transition: 'none',
          }}
        >
          {['Biggest', 'Game', 'Collection'].map((text, i) => (
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
