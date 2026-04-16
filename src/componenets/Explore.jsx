import ExploreLayout from '../UI/Explorelayout.jsx';
import { exploreItems } from '../../gamedata.js';

export default function Explore() {
  return (
    <section id="explore" className="h-[300vh]">
      <h2 className="sec-head  audiowide">Xplore and Xperience</h2>
      {/* <p className="text-gray-400 text-sm mx-6 mt-2"></p> */}
      <div className="sticky h-[80vh] top-0 flex items-center justify-between px-6">
        <ExploreLayout exploreItem={exploreItems[0]} />
      </div>
    </section>
  );
}
