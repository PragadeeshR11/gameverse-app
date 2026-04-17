import ExploreLayout from '../UI/Explorelayout.jsx';
import { exploreItems } from '../../gamedata.js';
import { useState } from 'react';

export default function Explore() {
  const [activeSec, setActiveSec] = useState(0);
  return (
    <section id="explore" className="h-[300vh]">
      <h2 className="sec-head  audiowide">Xplore and Xperience</h2>
      <div className="sticky h-[80vh] top-0 flex items-center justify-between px-6">
        <ExploreLayout exploreItem={exploreItems[activeSec]} />
      </div>
    </section>
  );
}
