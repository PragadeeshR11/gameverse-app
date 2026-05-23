import { use, useEffect, useRef } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection.jsx';
import { games } from '../../gamedata.js';
import GameCard from '../UI/GameCard';

export default function Popular() {
  const secRef = useRef();
  const { setActiveSec } = use(ActiveSecCntxt);

  useEffect(() => {
    const activeNavSec = function (entries) {
      const [entry] = entries;

      if (entry.isIntersecting) setActiveSec('popular');
      else setActiveSec('');
    };

    const navObserver = new IntersectionObserver(activeNavSec, {
      root: null,
      threshold: 0.4,
      rootMargin: '-90px',
    });

    if (secRef.current) {
      navObserver.observe(secRef.current);
    }

    return () => navObserver.disconnect();
  }, []);

  return (
    <section ref={secRef} id="popular" className="scroll-mt-18">
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
