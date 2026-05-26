import { plans } from '../../gamedata.js';
import { SubLayout } from '../UI/Layouts.jsx';
import { PlusCard, UltimateCard } from '../UI/Layouts.jsx';
import SubCard from '../UI/SubCard';
import { useState, useRef, useEffect, use } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection.jsx';
import useActiveNav from '../hooks/useActiveNav.js';

export default function Subsription() {
  const [isAnnual, setAnnual] = useState(false);
  const secRef = useRef();

  useActiveNav(secRef, 'sub', 0.4);

  return (
    <section ref={secRef} id="subscriptions" className="pb-24 scroll-mt-18">
      <SubLayout>
        <h2 className="sec-head">Decided to Dive-In</h2>
        <p className="sub-text pl-1">
          Unlock seamless access to a wide range of games across platforms
        </p>

        <div className="relative left-256 top-3 w-[180px] flex p-1 border border-pink-100 rounded-full">
          <div
            className={`absolute top-1 bottom-1  w-[calc(50%-4px)] bg-[#7f1c3e] rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isAnnual ? 'left-1/2' : 'left-1'}`}
          />
          <button
            className={`relative z-10 w-1/2 px-2.5 py-0.5 rounded-2xl  
                ${!isAnnual ? 'text-white' : 'text-white/60'}`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>

          <button
            className={`relative z-10 w-1/2 px-2.5 py-0.5 rounded-2xl  
                ${isAnnual ? 'text-white' : 'text-white/60'}`}
            onClick={() => setAnnual(true)}
          >
            Annual
          </button>
        </div>
        <div className="flex pt-18">
          <div className="w-2/5 flex justify-center mt-12">
            <p className="font-bold text-gray-300 text-[56px] leading-17 ">
              Pick <br /> your <br />
              <span className="bg-gradient-to-r from-[#d52d6e] to-[#8b2c9f] bg-clip-text text-transparent ">
                Gameverse
              </span>
              <br /> plan <br /> &rarr;
            </p>
          </div>
          <div className="sub-card relative flex w-3/5 gap-16 justify-center items-center pr-20 ">
            <PlusCard>
              {plans
                .filter((plan) => plan.name === 'Plus')
                .map((plan) => (
                  <SubCard key={plan.name} plan={plan} activePlan={isAnnual} />
                ))}
            </PlusCard>
            <UltimateCard>
              {plans
                .filter((plan) => plan.name === 'Ultimate')
                .map((plan) => (
                  <SubCard key={plan.name} plan={plan} activePlan={isAnnual} />
                ))}
            </UltimateCard>
          </div>
        </div>
      </SubLayout>
    </section>
  );
}
