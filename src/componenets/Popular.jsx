import { games } from '../../gamedata.js';
import GameCard from '../UI/GameCard';

export default function Popular() {
  return (
    <section id="popular">
      <h2 className="sec-head">Popular</h2>
      <p className="sub-text">Trending games across all platforms</p>

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
