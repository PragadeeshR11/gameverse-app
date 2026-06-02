import { LuLink } from 'react-icons/lu';
import { useRef } from 'react';
import useActiveNav from '../../hooks/useActiveNav';
import useReveal from '../../hooks/useReveal';

export default function About() {
  const secRef = useRef();
  useActiveNav(secRef, 'about', 0.5);
  const isVisible = useReveal(secRef);

  return (
    <section
      id="about"
      ref={secRef}
      className={`max-w-7xl mx-auto flex pb-12 scroll-mt-28 transition-all duration-700 ease-in
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="leftPanel basis-3/4">
        <div className="max-w-3xl">
          <span className="text-pink-500/70 text-sm font-light tracking-wider">
            A little about me
          </span>
          <p className="font-light text-2xl whitespace-pre-line">
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
          <p className="text-pink-500/70  tracking-wide">
            React • JavaScript • Tailwind CSS • Context API • Redux • React Router • REST APIs • Git
            <br />• Responsive Design • UI Development • Debugging • Frontend Engineering
          </p>
        </div>
      </div>
      <div className="rightPanel w-64 bg-[linear-gradient(135deg,rgba(50,50,50,0.12),rgba(15,15,15,0.04))] mt-4 mx-10 p-6 rounded-4xl">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-1">
            <a className="socials">
              <LuLink className="inline-block text-sm mx-1.5" />
              <span>GitHub</span>
            </a>
            <a className="socials">
              <LuLink className="inline-block text-sm mx-1.5" />
              <span>Linked-In</span>
            </a>
            <a className="socials">
              <LuLink className="inline-block text-sm mx-1.5" />
              <span>Resume</span>
            </a>
          </div>
          <p className="text-muted font-light text-base ">
            Email <br />
            <span>r.pragadeesh11@gmail.com</span>
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
