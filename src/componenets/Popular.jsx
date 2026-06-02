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
        setError('Unable to load Games');
      } finally {
        setLoading(false);
      }
    }
    loadGames();
  }, []);
  useActiveNav(secRef, 'popular', 0.1);

  if (error) return <p> {error}</p>;

  return (
    <section ref={secRef} id="popular" className="scroll-mt-18">
      <h2 className="sec-head">Popular</h2>
      <p className="sub-text">Trending games across all platforms</p>

      {isLoading ? (
        <p className="text-muted">Loading games...</p>
      ) : (
        <>
          <Carousel games={latest} marqueeDir={'marqueeLeft'} />
          <Carousel games={topRated} marqueeDir={'marqueeRight'} />
        </>
      )}
    </section>
  );
}
