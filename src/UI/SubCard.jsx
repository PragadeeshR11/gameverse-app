import { TiTick } from 'react-icons/ti';

export default function SubCard({ plan, activePlan }) {
  return (
    <>
      <h2 className="font-semibold text-4xl text-gray-200 tracking-wider">{plan.name}</h2>
      <p className="font-extralight text-sm  text-gray-400 mt-3">Monthly price</p>
      <p
        key={activePlan ? 'yearly' : 'monthly'}
        className="font-semibold text-4xl text-gray-200 tracking-wider py-1 animate-price"
      >
        <span className="font-extralight text-gray-400 text-lg">$ </span>
        {!activePlan ? plan.monthly : plan.yearly}
      </p>
      <p className="font-thin text-xs  text-gray-400 tracking-normal">Pause or cancel anytime</p>
      <button
        className={`subBtn  border border-gray-300/60 rounded-2xl py-1.5 px-20 mx-2 my-6 transition-transform duration-300 
            ${plan.name === 'Ultimate' ? ' bg-gray-200 text-black ' : ''}`}
      >
        Get Now
      </button>
      <h4 className="font-medium text-gray-200 mt-4 mb-3">Includes</h4>
      <ul className="text-gray-300/80 font-light text-sm leading-relaxed">
        {plan.features.map((i, idx) => (
          <li className="flex gap-2" key={idx}>
            <TiTick className="mt-1" />
            <span> {i}</span>
          </li>
        ))}
      </ul>
      {plan.name === 'Ultimate' && (
        <label
          className="absolute -top-3 -right-4 px-4 py-1 text-[11px] tracking-wider font-semibold rounded-full 
          bg-[linear-gradient(135deg,rgba(213,45,110,0.9),rgba(139,44,159,0.9))] backdrop-blur-md text-white shadow-[0_0_20px_rgba(213,45,110,0.4)]"
        >
          Best Value
        </label>
      )}
    </>
  );
}

//bg-[linear-gradient(135deg,#1a071c_0%,#2a0a28_30%,#4a123d_65%,#7a1f4f_100%)]
