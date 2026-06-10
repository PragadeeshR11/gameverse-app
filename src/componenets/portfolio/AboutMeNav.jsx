import { use, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { ActiveSecCntxt } from '../../context/ActiveSection';

const navLinks = [
  { href: '#about', label: 'About', section: 'about' },
  { href: '#projects', label: 'Projects', section: 'projects' },
  { href: '#contact', label: 'Contact', section: 'contact' },
];

export default function AboutMeNav() {
  const { activeSec } = use(ActiveSecCntxt);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky sticky-nav">
      <div className="flex justify-between items-center gap-4 px-4 sm:px-6 md:px-12">
        <button
          type="button"
          className="font-semibold text-left shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Pragadeesh<span className="text-pink-700 text-2xl sm:text-3xl">.</span>
        </button>

        <nav className="hidden md:block font-light text-gray-400/70" aria-label="Portfolio">
          <ul className="flex flex-wrap justify-end gap-4 md:gap-8">
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl p-1 shrink-0"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden border-t border-white/10 mt-3 px-4 sm:px-6"
          aria-label="Portfolio mobile"
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
          </ul>
          <hr className="max-w-2xl border-zinc-700/30 my-2 " />
        </nav>
      )}
    </header>
  );
}
