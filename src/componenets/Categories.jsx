import HoverCard from '../UI/HoverCard';
import { genres } from '../../gamedata.js';

export default function Categories() {
  return (
    <section id="categories">
      <h2 className="sec-head">Dive into various Genres</h2>
      <div className="hoverCards grid grid-cols-2 gap-18 justify-items-center mx-28 pt-20">
        {genres.map((genre) => (
          <HoverCard key={genres.id} genre={genre} />
        ))}
      </div>
    </section>
  );
}
