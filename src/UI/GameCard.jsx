export default function GameCard({ game }) {
  return (
    <div
      className="relative group w-[300px] h-[300px] border border-gray-400/40 rounded-lg transition-all duration-300
      flex-shrink-0 cursor-pointer overflow-hidden hover:border-white/50 shadow-[0_6px_20px_rgba(0,0,0,0.5)] 
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
    >
      <img
        src={game.img}
        className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0.25)),linear-gradient(to_bottom,rgba(0,0,0,0.2),transparent)]
        opacity-100 rounded-lg transition duration-300 group-hover:bg-[linear-gradient(to_right,rgba(6,3,12,0.92),rgba(6,3,12,0.65),transparent)]"
      >
        <div className="absolute bottom-3 left-3 transition duration-300 group-hover:opacity-0 ">
          <h3 className="text-white text-sm font-semibold">{game.title}</h3>
          <p className="text-gray-300 text-xs">{game.year}</p>
        </div>
        <button
          className="actionBtn absolute top-32.5 left-24 bg-amber-50 text-[#212529] font-medium text-sm px-4.5 py-1.5 rounded-3xl opacity-0 
          transition-all duration-300 scale-70 group-hover:opacity-100 group-hover:scale-105"
        >
          Subscribe+
        </button>
      </div>
    </div>
  );
}
