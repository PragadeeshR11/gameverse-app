export default function GameCard({ game }) {
  return (
    <div
      className="relative group w-[140px] h-[240px] sm:w-[160px]  lg:w-[300px] md:aspect-square border border-gray-400/40 rounded-lg 
      shrink-0 cursor-pointer overflow-hidden hover:border-white/50 shadow-[0_6px_20px_rgba(0,0,0,0.5)] 
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
    >
      <img
        src={game.background_image}
        alt={game.name}
        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
        opacity-100 rounded-lg transition duration-300 group-hover:bg-[linear-gradient(to_right,rgba(6,3,12,0.92),rgba(6,3,12,0.65),transparent)]"
      >
        <div className="absolute bottom-3 left-3 right-3 transition duration-300 group-hover:opacity-0">
          <h3 className="text-white text-xs sm:text-sm font-semibold line-clamp-2">{game.name}</h3>
          <p className="text-gray-300 text-[10px] sm:text-xs">{game.released?.split('-')[0]}</p>
        </div>
        <a
          href="#subscriptions"
          className="actionBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-50 text-black font-medium text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 opacity-0 
          scale-90 group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap"
        >
          Subscribe+
        </a>
      </div>
    </div>
  );
}
