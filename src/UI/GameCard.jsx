import { split } from 'postcss/lib/list';

export default function GameCard({ game }) {
  return (
    <div
      className="relative group w-[140px] h-[240px] md:w-[160px] lg:w-[300px] md:h-[300px] border border-gray-400/40 rounded-lg 
      shrink-0 cursor-pointer overflow-hidden hover:border-white/50 shadow-[0_6px_20px_rgba(0,0,0,0.5)] 
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
    >
      <img
        src={game.background_image}
        className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
        opacity-100 rounded-lg transition duration-300 group-hover:bg-[linear-gradient(to_right,rgba(6,3,12,0.92),rgba(6,3,12,0.65),transparent)]"
      >
        <div className="absolute bottom-3 left-3 transition duration-300 group-hover:opacity-0 ">
          <h3 className="text-white text-sm font-semibold">{game.name}</h3>
          <p className="text-gray-300 text-xs">{game.released?.split('-')[0]}</p>
        </div>
        <a
          href="#subscriptions"
          className="actionBtn absolute bg-amber-50 text-black top-32.5 left-24 font-medium text-sm px-4.5 py-1.5 opacity-0 
          scale-70 group-hover:opacity-100 group-hover:scale-105"
        >
          Subscribe+
        </a>
      </div>
    </div>
  );
}
