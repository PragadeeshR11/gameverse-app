import { useRef, useState } from 'react';
import ExploreCarousel from '../UI/ExploreCarousel.jsx';
import { exploreItems } from '../../gamedata.js';
import useActiveNav from '../hooks/useActiveNav.js';

export default function Explore() {
  const explRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useActiveNav(explRef, 'explore', 0.2, true);

  return (
    <section id="explore" ref={explRef} className="relative scroll-mt-18">
      <div className="min-h-screen flex flex-col">
        <div
          className="flex-shrink-0 flex flex-col gap-4 sm:gap-6
          px-4 sm:px-8 lg:px-10 xl:px-14
          pt-6 sm:pt-8
          pb-6 sm:pb-10 lg:pb-14"
        >
          <h2
            className="text-[clamp(40px,6vw,70px)] sm:text-[clamp(50px,5vw,70px)] 2xl:text-[clamp(70px,4vw,110px)]
            font-medium leading-[1.1] tracking-tight text-[#dee2e6] flex-shrink-0"
          >
            Explore &
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div
            className="max-w-[280px] sm:max-w-[340px] xl:max-w-[400px] 2xl:max-w-[480px]
            text-muted text-sm lg:text-base md:self-end tracking-widest pt-1 relative min-h-[64px] sm:min-h-[88px]"
          >
            <p>
              Step into immersive worlds, cinematic adventures, and next-generation gaming
              experiences.
            </p>
          </div>
        </div>

        <div
          className="flex-1 aspect-[3/4] sm:aspect-auto min-h-[55vh] sm:min-h-[65vh] lg:min-h-[75vh] mx-4 sm:mx-8 lg:mx-10 xl:mx-14
          mb-4 rounded-2xl overflow-hidden relative"
        >
          <ExploreCarousel exploreItems={exploreItems} onSlideChange={setActiveSlide} />
        </div>
      </div>
    </section>
  );
}
