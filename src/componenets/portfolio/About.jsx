import { LuLink } from 'react-icons/lu';
import { useRef } from 'react';
import useActiveNav from '../../hooks/useActiveNav';
import useReveal from '../../hooks/useReveal';
import { socials } from '../../../gamedata';

export default function About() {
  const secRef = useRef();
  useActiveNav(secRef, 'about', 0.5);
  const isVisible = useReveal(secRef);

  return (
    <section
      id="about"
      ref={secRef}
      className={`portfolio flex flex-col lg:flex-row mb-0 lg:mb-12 scroll-mt-28 transition-all duration-700 ease-in
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="leftPanel w-full lg:basis-3/4 ">
        <div className="max-w-3xl">
          <span className="subtleAccent text-sm font-light tracking-wider">A little about me</span>
          <p className="text-lg md:text-xl lg:text-2xl font-light whitespace-pre-line">
            Hi, I'm Pragadeesh, a Software Engineer with 3.5 years of experience delivering
            frontend-focused enhancements, UI customization, and feature development for enterprise
            web applications.
            <br />
            <br />
            Specialized in modern frontend development through hands-on React projects built with
            reusable components, Hooks, Context API, API integration, routing, authentication flows,
            and responsive UI design.
            <br />
            <br />
            Passionate about creating clean, scalable, and user-focused web experiences. Currently
            seeking Frontend Developer and React Developer opportunities.
          </p>
          <br />
          <p className="subtleAccent tracking-wide">
            React • JavaScript • Tailwind CSS • Context API • Redux • React Router • REST APIs • UI
            Development • Git • Responsive Design • Debugging • Frontend Engineering
          </p>
        </div>
      </div>
      <div className="rightPanel w-full lg:max-w-64 mx-auto lg:mx-10 mt-8 lg:mt-4 p-6 rounded-4xl bg-[linear-gradient(135deg,rgba(50,50,50,0.12),rgba(15,15,15,0.04))] ">
        <div className="flex flex-col gap-8 lg:gap-14">
          <div className="flex flex-col gap-1.5">
            {socials.map((social) => {
              if (social.id != 4) {
                return (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socials"
                  >
                    <LuLink className="inline-block text-sm mx-1.5" /> {social.name}
                  </a>
                );
              }
            })}
          </div>
          <p className="font-light text-base">
            Email <br />
            <a href="mailto:r.pragadeesh11@gmail.com" className="socials">
              r.pragadeesh11@gmail.com
            </a>
          </p>
          <p className="text-muted font-light text-base">
            Experience
            <br />
            <span>Software Engineer</span>
            <br />
            <span>Cognizant [3.5 year]</span>
          </p>
          <p className="text-muted font-light text-base">
            Location
            <br />
            <span>Bengaluru / Open to Relocation</span>
          </p>
        </div>
      </div>
    </section>
  );
}
