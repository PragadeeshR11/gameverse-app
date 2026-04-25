import ExploreLayout from '../UI/Explorelayout.jsx';
import { exploreItems } from '../../gamedata.js';
import { ExplrLayout } from '../UI/Layouts.jsx';
import { useEffect, useState, useRef } from 'react';

export default function Explore() {
  const [activeSec, setActiveSec] = useState(0);
  const explRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = explRef.current.getBoundingClientRect();
      // const scrollProgress = -rect.top / rect.height;
      const scrollProgress = Math.min(
        1,
        Math.max(0, -rect.top / (rect.height - window.innerHeight))
      );

      // if (scrollProgress < 0.33) setActiveSec(0);
      // else if (scrollProgress < 0.66) setActiveSec(1);
      // else setActiveSec(2);
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const step = Math.min(
          exploreItems.length - 1,
          Math.floor(scrollProgress * exploreItems.length)
        );
        setActiveSec(step);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSec]);

  return (
    <section id="explore" ref={explRef} className="h-[300vh] relative">
      <ExplrLayout>
        <h2 className="sec-head mt-6">
          Xplore <br />
          and Xperience
        </h2>
        <div className="sticky h-screen top-0 flex items-center justify-between px-6">
          <ExploreLayout exploreItems={exploreItems} activeSec={activeSec} />
        </div>
      </ExplrLayout>
    </section>
  );
}
