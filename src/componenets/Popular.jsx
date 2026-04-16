import { games } from '../../gamedata.js';
import GameCard from '../UI/GameCard';

export default function Popular() {
  return (
    <section id="popular">
      <h2 className="sec-head audiowide">Popular</h2>
      <p className="text-gray-400 text-sm mx-16 mt-2">Trending games across all platforms</p>

      <div className="gameCards slide1 scrollbar-hide">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="gameCards slide2 scrollbar-hide">
        {games
          .slice()
          .reverse()
          .map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
      </div>
    </section>
  );
}
