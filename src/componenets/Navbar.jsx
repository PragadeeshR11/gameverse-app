import Logo from '../assets/logo/gameverselogo.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { use, useState } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { href: '#popular', label: 'Popular', section: 'popular' },
  { href: '#explore', label: 'Explore', section: 'explore' },
  { href: '#subscriptions', label: 'Subscriptions', section: 'sub' },
  { href: '#footer', label: 'Beyond', section: 'credits' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { activeSec } = use(ActiveSecCntxt);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky sticky-nav">
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[0.75fr_3fr_0.75fr]">
        <div className="lg:justify-self-end shrink-0">
          <button
            className="transition-all duration-300 hover:scale-110 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <img src={Logo} alt="gameverse-logo" className="w-8 h-8 md:w-12 md:h-12" />
          </button>
        </div>

        <nav
          className="hidden lg:block font-light text-gray-400/70 justify-self-center"
          aria-label="Main"
        >
          <ul className="flex flex-wrap justify-center gap-3 md:gap-8">
            {navLinks.map(({ href, label, section }) => (
              <li key={href}>
                <a
                  id="nav"
                  href={href}
                  className={`transition-colors duration-500 ease-out ${activeSec === section ? 'text-[#f8f9fa]' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:justify-self-start shrink-0">
          <button
            onClick={() => navigate('/portfolio')}
            className="hidden lg:block actionBtn font-light text-gray-300 px-3 py-0.5 hover:font-normal hover:scale-[1.02]"
          >
            About Me
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl p-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="lg:hidden border-t border-white/10 mt-3 px-4 sm:px-6 pb-4"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4 text-gray-300 mt-2">
            {navLinks.map(({ href, label, section }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 transition-colors duration-300 ${activeSec === section ? 'text-[#f8f9fa]' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  navigate('/portfolio');
                  setMenuOpen(false);
                }}
                className="actionBtn w-full sm:w-fit text-sm bg-amber-50 text-black px-4 py-2"
              >
                About Me
              </button>
            </li>
          </ul>
          <hr className="max-w-2xl border-zinc-700/30 my-2 " />
        </nav>
      )}
    </header>
  );
}
