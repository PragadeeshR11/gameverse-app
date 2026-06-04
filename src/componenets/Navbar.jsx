import Logo from '../assets/logo/gameverselogo.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { use, useState } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const { activeSec } = use(ActiveSecCntxt);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky sticky-nav flex justify-between lg:grid lg:grid-cols-[0.75fr_3fr_0.75fr] px-8 md:px-0">
      <div className="justify-self-end">
        <button
          className="transition-all duration-300 hover:scale-110 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={Logo} alt="gameverse-logo" className="w-8 h-8 md:w-12 md:h-12" />
        </button>
      </div>
      <div className="font-light text-gray-400/70 justify-self-center">
        <ul className="hidden lg:flex gap-3 md:gap-8">
          <a
            id="nav"
            href="#popular"
            className={`transition-colors duration-500 ease-out ${activeSec === 'popular' ? 'text-[#f8f9fa]' : ''}`}
          >
            Popular
          </a>
          <a
            id="nav"
            href="#explore"
            className={`transition-colors duration-500 ease-out ${activeSec === 'explore' ? 'text-[#f8f9fa]' : ''}`}
          >
            Explore
          </a>
          <a
            id="nav"
            href="#subscriptions"
            className={`transition-colors duration-500 ease-out ${activeSec === 'sub' ? 'text-[#f8f9fa]' : ''}`}
          >
            Subscriptions
          </a>
          <a
            id="nav"
            href="#footer"
            className={`transition-colors duration-500 ease-out ${activeSec === 'credits' ? 'text-[#f8f9fa]' : ''}`}
          >
            Beyond
          </a>
        </ul>
      </div>
      <div className="justify-self-start">
        <button
          onClick={() => navigate('/aboutme')}
          className="hidden lg:block actionBtn font-light text-gray-300 px-3 py-0.5 hover:font-normal hover:scale-[1.02]"
        >
          About Me
        </button>

        {/* Mobile*/}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden col-span-full mt-4 px-4">
          <div className="flex flex-col gap-4 text-gray-300">
            <a href="#popular" onClick={() => setMenuOpen(false)}>
              Popular
            </a>
            <a href="#explore" onClick={() => setMenuOpen(false)}>
              Explore
            </a>
            <a href="#subscriptions" onClick={() => setMenuOpen(false)}>
              Subscriptions
            </a>
            <a href="#footer" onClick={() => setMenuOpen(false)}>
              Beyond
            </a>

            <button
              onClick={() => {
                navigate('/aboutme');
                setMenuOpen(false);
              }}
              className="w-fit text-sm bg-amber-50 text-black rounded-2xl px-1.5 py-0.5 "
            >
              About Me
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
