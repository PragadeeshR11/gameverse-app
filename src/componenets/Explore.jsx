import ExploreLayout from '../UI/Explorelayout.jsx';
import { exploreItems } from '../../gamedata.js';
import { ExplrLayout } from '../UI/Layouts.jsx';
import Categories from './Categories.jsx';
import { useEffect, useState, useRef, use } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection.jsx';
import useActiveNav from '../hooks/useActiveNav.js';

export default function Explore() {
  const [activeExplrSec, setActiveExplrSec] = useState(0);
  const explRef = useRef(null);

  //Nav Active section
  useActiveNav(explRef, 'explore', 0.1, true);

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
        setActiveExplrSec(step);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeExplrSec]);

  return (
    <section
      id="explore"
      ref={explRef}
      className="relative h-[180vh] md:h-[190vh] lg:h-[300vh] scroll-mt-18"
    >
      <ExplrLayout>
        <h2 className="sec-head mt-6 pb-6 lg:pb-0">
          Xplore <br />
          and Xperience
        </h2>
        <div className="sticky top-0 py-4 hidden lg:block ">
          <div className="h-screen flex items-center justify-between px-4 lg:px-6 xl:px-10">
            <ExploreLayout exploreItems={exploreItems} activeSec={activeExplrSec} />
          </div>
        </div>

        {/* mobile static version */}
        <div className="lg:hidden px-3 sm:px-4 py-6 sm:py-8 space-y-8 sm:space-y-12">
          {exploreItems.map((item, i) => (
            <div key={i} className=" border border-white/10 rounded-xl overflow-hidden bg-white/2">
              <img src={item.img} alt={item.title} className="w-full aspect-video object-cover" />
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-medium text-[#dee2e6] mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm leading-6 sm:leading-7 text-[#868e96]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ExplrLayout>
    </section>
  );
}
