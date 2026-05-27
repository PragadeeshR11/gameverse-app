import GameCard from './GameCard';

export default function Carousel({ marqueeDir, games }) {
  return (
    <div className="gameCards scrollbar-hide ">
      {[0].map((row) => (
        <div
          key={row}
          className="flex gap-6"
          style={{
            animation: `${marqueeDir} 60s linear infinite`,
          }}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ))}
    </div>
  );
}
