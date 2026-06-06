import { TiTick } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

export default function SubCard({ plan, isAnnual }) {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="font-semibold text-3xl md:text-4xl text-gray-200 tracking-wider">
        {plan.name}
      </h2>
      <p className="font-extralight text-sm text-muted mt-3">
        {!isAnnual ? 'Monthly' : 'Yearly'} Price
      </p>
      <p
        key={isAnnual ? 'yearly' : 'monthly'}
        className="font-semibold text-3xl md:text-4xl text-gray-200 tracking-wider py-1 animate-price"
      >
        <span className="font-extralight text-muted text-lg">$ </span>
        {!isAnnual ? plan.monthly : plan.yearly}
      </p>
      <p className="font-thin text-xs text-muted tracking-normal">Pause or cancel anytime</p>
      <button
        onClick={() => navigate('/join', { state: { plan: plan.name } })}
        className={`subBtn border border-gray-300/60 rounded-2xl py-1.5 px-10 md:px-16 lg:px-20 mx-2 my-6 transition-transform duration-300 
            ${plan.name === 'Ultimate' ? ' bg-gray-200 text-black ' : ''}`}
      >
        Get Now
      </button>
      <h4 className="font-medium text-gray-200 mt-4 mb-3">Includes</h4>
      <ul className="text-muted font-light text-xs lg:text-sm leading-relaxed">
        {plan.features.map((item, idx) => (
          <li className="flex gap-2" key={idx}>
            <TiTick className="mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {plan.name === 'Ultimate' && (
        <label
          className="absolute -top-3 -right-4 px-4 py-1 text-[11px] font-semibold tracking-wider rounded-full 
          bg-[linear-gradient(135deg,rgba(213,45,110,0.9),rgba(139,44,159,0.9))] backdrop-blur-md text-white shadow-[0_0_20px_rgba(213,45,110,0.4)]"
        >
          Best Value
        </label>
      )}
    </>
  );
}

//bg-[linear-gradient(135deg,#1a071c_0%,#2a0a28_30%,#4a123d_65%,#7a1f4f_100%)]
