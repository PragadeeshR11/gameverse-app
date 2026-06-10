import { useEffect, useRef, useState } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection.jsx';
// import { games } from '../../gamedata.js';
// import GameCard from '../UI/GameCard';
import Carousel from '../UI/Carousel.jsx';
import useActiveNav from '../hooks/useActiveNav.js';
import { gameAPI } from '../services/gameAPI.js';

export default function Popular() {
  const secRef = useRef();

  const [latest, setLatest] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGames() {
      try {
        setLoading(true);

        const { latest, toprated } = await gameAPI();
        setLatest(latest);
        setTopRated(toprated);
      } catch (err) {
        setError('Unable to load games. Please try again later !!');
      } finally {
        setLoading(false);
      }
    }
    loadGames();
  }, []);
  useActiveNav(secRef, 'popular', 0.1);

  return (
    <section ref={secRef} id="popular" className="scroll-mt-18">
      <h2 className="sec-head">Popular</h2>
      <p className="sub-text text-center lg:text-justify">Trending games across all platforms</p>

      {error ? (
        <div className="flex justify-center items-center pt-20">
          <p className="subtleAccent text-sm md:text-base tracking-widest">{error}</p>
        </div>
      ) : (
        ''
      )}

      {isLoading ? (
        // <p className="text-muted text-center">Loading games...</p>
        <div className="gameCards">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-[140px] sm:w-[160px] lg:w-[300px] aspect-square shrink-0 rounded-lg bg-white/5 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          <Carousel games={latest} marqueeDir={'marqueeLeft'} />
          <Carousel games={topRated} marqueeDir={'marqueeRight'} />
        </>
      )}
    </section>
  );
}
