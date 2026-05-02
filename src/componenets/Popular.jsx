import { games } from '../../gamedata.js';
import GameCard from '../UI/GameCard';

export default function Popular() {
  return (
    <section id="popular" className="scroll-mt-18">
      <h2 className="sec-head">Popular</h2>
      <p className="sub-text">Trending games across all platforms</p>

      <div className="gameCards slide1 scrollbar-hide ">
        {[0].map((row) => (
          <div
            key={row}
            className="flex gap-6"
            style={{
              animation: 'marqueeLeft 60s linear infinite',
            }}
          >
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ))}
      </div>
      <div className="gameCards slide2 scrollbar-hide">
        {[0].map((row) => (
          <div
            key={row}
            className="flex gap-6"
            style={{
              animation: 'marqueeRight 60s linear infinite',
            }}
          >
            {games
              .slice()
              .reverse()
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
