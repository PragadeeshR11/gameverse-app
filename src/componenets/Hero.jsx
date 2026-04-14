import Logo from '../assets/gameverselogo.png';

export default function Hero() {
  return (
    <section id="hero">
      <div className="header w-screen my-8  grid grid-cols-[0.75fr_3fr_0.75fr] items-center">
        <div className="logo justify-self-end">
          <button className="transition-all duration-300 hover:scale-110 cursor-pointer">
            <img src={Logo} alt="gameverse-logo" className="w-12 h-12" />
          </button>
        </div>
        <div className="navbar text-lg font-light text-[#868e96] justify-self-center">
          <ul className="btn flex gap-8">
            <button>Latest</button>
            <button>Explore</button>
            <button>Categories</button>
            <button>Subsriptions</button>
            <button>Collections</button>
          </ul>
        </div>
        <div className="auth text-lg font-light text-[#868e96] justify-self-start">
          <ul className="flex gap-3">
            <button>Login</button>
            <button className="signup bg-amber-50 text-[#212529] px-2 py-0.5 font-normal rounded-2xl">
              Sign up
            </button>
          </ul>
        </div>
      </div>
      <div className="title text-center">
        <h2 className="audiowide text-9xl mt-48 mb-8 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          Gameverse
        </h2>
        <p className="text-xl font-thin text-gray-400 tracking-wider">
          Interactive interface for discovering and exploring games
        </p>
        <button className="explr mt-12 px-9 py-3 rounded-3xl  bg-amber-50 text-[#212529]">
          Explore Games &rarr;
        </button>
      </div>
    </section>
  );
}
