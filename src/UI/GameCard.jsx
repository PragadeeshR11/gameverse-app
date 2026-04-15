export default function GameCard({ game }) {
  return (
    <div
      className="relative group w-[480px] aspect-video flex-shrink-0 cursor-pointer overflow-hidden border border-white/10 rounded-lg  transition-all duration-300 
      hover:border-white/60  hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
    >
      <img
        src={game.img}
        className="w-full h-full object-cover rounded-lg  transition-all duration-300 group-hover:scale-105 group-hover:brightness-75 "
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
      opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"
      >
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white text-sm font-semibold">{game.title}</h3>
          <p className="text-gray-300 text-xs">{game.year}</p>
        </div>
      </div>
    </div>
  );
}
