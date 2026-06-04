import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import useReveal from '../../hooks/useReveal';
import useActiveNav from '../../hooks/useActiveNav';
import gameverseHero from '../../assets/gameImg/gameversehero.png';
import gameversepop from '../../assets/gameImg/gameversepop.png';

export default function Projects() {
  const navigate = useNavigate();
  const secRef = useRef();
  const isVisible = useReveal(secRef);

  useActiveNav(secRef, 'projects', 0.2);

  return (
    <section
      id="projects"
      ref={secRef}
      className={`portfolio scroll-mt-18 transition-all duration-700 ease-in
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <p className="text-pink-500/70 text-center tracking-widest mb-6">What I've Built</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14">
        Featured <br /> Projects
      </h2>
      {/* ── Header Row ── */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Gameverse</h2>
          <p className="text-sm lg:text-base text-gray-500">
            A React-based gaming platform built for immersive and responsive experiences.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="actionBtn text-sm font-semibold tracking-widest px-2 py-2 lg:px-4.5 lg:py-3.5">
            GitHub
          </button>
          <button
            onClick={() => navigate('/')}
            className="actionBtn bg-amber-50 text-black text-xs lg:text-sm font-semibold tracking-widest px-2 py-2 lg:px-4.5"
          >
            VIEW GAMEVERSE
          </button>
        </div>
      </div>

      {/* ── Two-column Image Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Left image card */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black">
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-800">
            <img src={gameverseHero} alt="gameverse-hero" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Right image card */}
        <div className="rounded-xl border border-gray-700 p-4 bg-black">
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-800">
            <img src={gameversepop} alt="gameverse-pop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ── Stats Row (4 cards) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { value: '15+', label: 'REUSABLE COMPONENTS' },
          {
            value: `Route-Based
            Architecture`,
            label: 'CLIENT-SIDE NAVIGATION',
          },
          { value: 'API Driven', label: 'REAL-TIME GAME DATA' },
          {
            value: `Responsive
            UI Design`,
            label: 'ADAPTIVE LAYOUT ACROSS DEVICES',
          },
        ].map(({ value, label }) => (
          <div key={label} className="rounded-xl border border-gray-700 bg-gray-900/40 p-6">
            <p className="text-2xl font-bold whitespace-pre-line leading-tight mb-3">{value}</p>
            <p className="text-xs text-gray-400 font-light tracking-widest">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Body: Left content + Right sidebar ── */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column */}
        <div className="flex-1 min-w-0 space-y-8">
          {/* Project Overview */}
          <div>
            <h3 className="text-sm font-bold tracking-widest">PROJECT OVERVIEW</h3>
            <hr className="max-w-2xl border-zinc-700/30 my-2 " />
            <p className="max-w-2xl text-gray-600 text-sm leading-relaxed">
              A modern React-based gaming interface designed to deliver curated content, dynamic
              interactions, and interactive user experiences through a component-driven interface.
              Built with a focus on reusable architecture, client-side routing, responsive design,
              and API-driven content rendering to ensure scalability, maintainability, and seamless
              cross-device experiences.
            </p>
          </div>

          {/* The Problem */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-4">WHY GAMEVERSE ?</h3>
            <hr className="max-w-2xl border-zinc-700/30 my-2 " />
            <p className="max-w-2xl text-gray-600 text-sm leading-relaxed">
              Many gaming platforms prioritize content volume over user experience, resulting in
              cluttered interfaces and limited visual engagement. Gameverse was created to explore
              how modern frontend architecture, reusable component design, and responsive interfaces
              can deliver a more immersive and seamless user experience.
            </p>
          </div>

          {/* experience hightlights*/}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-4">Experience Highlights</h3>
            <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Scroll-Driven Discovery',
                  desc: 'Interactive content transitions powered by scroll-based animations and state-driven rendering.',
                },
                {
                  title: 'Live Content Integration',
                  desc: 'API-driven rendering of real-time gaming content and platform updates.',
                },
                {
                  title: 'Infinite Carousel Experience',
                  desc: 'Animated game showcases designed to surface trending content dynamically.',
                },
                {
                  title: 'Modern React Architecture',
                  desc: 'Reusable components, custom Hooks, Context API, routing, and action-based forms.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-xl border border-gray-700 bg-gray-900/40 p-6">
                  <p className="font-semibold text-sm mb-2">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-4">TECHNICAL CHALLENGES</h3>
            <div className="max-w-3xl rounded-xl border border-gray-700 bg-gray-900/40 overflow-hidden">
              <div className="p-5 border-b border-gray-700">
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Challenge:</span> Building a content-rich gaming
                  platform that combines dynamic data rendering, scroll-based interactions,
                  responsive layouts, and multi-page navigation within a cohesive user experience.
                </p>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Solution:</span> Adopted reusable component
                  architecture, custom Hooks, Context-based state management, and modular routing
                  patterns to create a scalable frontend system capable of supporting complex UI
                  interactions and future enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-full lg:max-w-90 shrink-0 space-y-4">
          {/* Architecture & Tech Stack */}
          <div className="rounded-xl border border-gray-700 bg-gray-900/40 p-6">
            <h3 className="text-sm font-bold tracking-widest mb-5">
              ARCHITECTURE &amp; TECH STACK
            </h3>
            {[
              { label: 'Frontend', tags: ['React', 'JavaScript (ES6+)', 'TailwindCSS'] },
              { label: 'State Management', tags: ['Context-API', 'React Hooks'] },
              { label: 'Navigation', tags: ['React Router', 'useActionState'] },
              { label: 'Data Integration', tags: ['Rest APIs', 'Async Rendering'] },
            ].map(({ label, tags }) => (
              <div key={label} className="mb-4">
                <p className="text-xs text-gray-400 font-semibold tracking-widest mb-2">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs border border-gray-700 rounded-md px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Learnings */}
          <div className="rounded-xl border  border-gray-700 bg-gray-900/40 p-6">
            <h3 className="text-sm font-bold tracking-widest mb-4">KEY LEARNINGS</h3>
            <ul className="space-y-3">
              {[
                'Component-driven architecture, state management patterns, and API-driven application development.',
                'Building scalable frontend solutions through custom Hooks, client-side routing and reusable UI systems',
              ].map((item) => (
                <li key={item} className="text-sm text-gray-600 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Future Roadmap */}
          <div className="rounded-xl border border-gray-700 bg-gray-900/40 p-6">
            <h3 className="text-sm font-bold tracking-widest mb-4">FUTURE SCOPE</h3>
            <ul className="space-y-3">
              {[
                'Introduce search, filtering, and category-based exploration capabilities.',
                'Integrate authentication workflows and personalized profile management.',
                'Leverage additional API integrations to enrich content depth and improve data coverage.',
              ].map((item) => (
                <li key={item} className="text-sm text-gray-600 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
// <div className="h-px bg-white/10 mt-4" />
