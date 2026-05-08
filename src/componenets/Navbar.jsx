import Logo from '../assets/logo/gameverselogo.png';

//sticky nav and scroll logic
export default function Navbar() {
  return (
    <div
      className="sticky top-0 w-full text-[17px] pt-4 pb-2 grid grid-cols-[0.75fr_3fr_0.75fr] items-center z-10
      bg-[linear-gradient(to_bottom,rgba(6,3,15,0.9),rgba(6,3,15,0.65),transparent)] backdrop-blur-md"
    >
      <div className="logo justify-self-end">
        <button
          className="transition-all duration-300 hover:scale-110 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={Logo} alt="gameverse-logo" className="w-12 h-12" />
        </button>
      </div>
      <div className="font-light text-gray-400/70 justify-self-center">
        <ul className="btn flex gap-8">
          <a id="nav" href="#popular">
            Popular
          </a>
          <a id="nav" href="#explore">
            Explore
          </a>
          <a id="nav" href="#subscriptions">
            Subscriptions
          </a>
          <a id="nav" href="#footer">
            About
          </a>
        </ul>
      </div>
      <div className="auth font-light text-gray-400/70 justify-self-start">
        <ul className="flex gap-3 ">
          <button>Login</button>
          <button className="actionBtn px-2.5 py-0.5 font-normal">Sign up</button>
        </ul>
      </div>
    </div>
  );
}
