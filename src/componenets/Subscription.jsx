import SubCard from '../UI/SubCard';
import { plans } from '../../gamedata.js';
import { PlusCard, UltimateCard } from './Layouts.jsx';

export default function Subsription() {
  return (
    <section id="subsription">
      <h2 className="sec-head">Decided to Dive-In</h2>
      <p className="sub-text pl-1">
        Unlock seamless access to a wide range of games across platforms
      </p>

      <div className="bg-[linear-gradient(135deg,#160516,#1d071c,#2a0a28)] mt-4 mx-10 p-6 rounded-4xl">
        <div className="relative mt-2">
          <div className="absolute right-30 flex justify-end gap-2 border border-pink-100 rounded-2xl font-light">
            <button className="px-2.5 py-1 bg-[#7f1c3e] rounded-2xl ">Monthly</button>
            <button className="px-2.5 py-1 rounded-2xl">Annual</button>
          </div>
        </div>
        <div className="sub flex pt-18">
          <div className="w-2/5 flex  justify-center mt-12">
            <p className="font-bold text-gray-300 text-[56px] leading-17 ">
              Pick <br /> your <br />
              <span className="bg-gradient-to-r from-[#d52d6e] to-[#8b2c9f] bg-clip-text text-transparent ">
                Gameverse
              </span>
              <br /> plan <br /> &rarr;
            </p>
          </div>
          <div className="sub-card flex w-3/5 gap-16 justify-center items-center pr-20 ">
            <PlusCard>
              {plans
                .filter((plan) => plan.name === 'Plus')
                .map((plan) => (
                  <SubCard key={plan.name} plan={plan} />
                ))}
            </PlusCard>
            <UltimateCard>
              {plans
                .filter((plan) => plan.name === 'Ultimate')
                .map((plan) => (
                  <SubCard key={plan.name} plan={plan} />
                ))}
            </UltimateCard>
          </div>
        </div>
      </div>
    </section>
  );
}
