import GameCard from './GameCard';

export default function Carousel({ marqueeDir, games }) {
  return (
    <div className="gameCards scrollbar-hide w-full max-w-full">
      <div
        className="flex gap-3 md:gap-6 w-max min-w-full"
        style={{
          animation: `${marqueeDir} 60s linear infinite`,
        }}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
