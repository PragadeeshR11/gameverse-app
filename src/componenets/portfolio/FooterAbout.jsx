import { socials } from '../../../gamedata.js';
import { useRef } from 'react';
import useActiveNav from '../../hooks/useActiveNav.js';
import useReveal from '../../hooks/useReveal.js';

export default function Contact() {
  const secRef = useRef();
  useActiveNav(secRef, 'contact', 0.6);
  const isVisible = useReveal(secRef);

  return (
    <footer
      id="contact"
      ref={secRef}
      className={`portfolio pb-8 transition-all duration-700 ease-in
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="inline-block border border-dashed border-gray-600 px-4 sm:px-6 py-3 mb-6 sm:mb-8">
        <span className="text-sm font-medium text-pink-500/70 tracking-widest uppercase">
          Contact
        </span>
      </div>
      <div className="flex flex-col lg:flex-row py-4 sm:py-6 mb-16 sm:mb-28 gap-8">
        <div className="w-full lg:basis-1/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Available For
            <br /> New <br />
            opportunities
          </h1>
        </div>
        <div className="w-full lg:basis-2/3 flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex lg:self-end">
            <p className="max-w-lg text-sm sm:text-[17px] font-light text-gray-400 break-words">
              Actively exploring Frontend and React Developer opportunities where I can contribute
              modern UI engineering, scalable component architecture, and user-focused web
              experiences.
              <br />
              <br />
              <span className="subtleAccent text-sm md:text-[15px]">
                Email:{' '}
                <a href="mailto:r.pragadeesh11@gmail.com" className="hover:brightness-80 break-all">
                  r.pragadeesh11@gmail.com
                </a>
              </span>
            </p>
          </div>

          <div className="flex flex-col w-full sm:w-auto">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <div key={social.id} className="border-y border-dashed border-zinc-800 py-3">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socials break-words"
                  >
                    <Icon className="inline-block mx-1.5 shrink-0" /> {social.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="font-extralight text-xs text-center text-gray-500 border-b border-white/10 pb-2">
        © 2026 Pragadeesh. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
