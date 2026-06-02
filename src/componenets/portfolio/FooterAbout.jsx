import { socials } from '../../../gamedata.js';

export default function Contact() {
  const Icon = socials.icon;
  return (
    <footer className=" max-w-7xl mx-auto">
      <div className="inline-block border border-dashed border-gray-600 px-6 py-3 mb-8">
        <span className="text-sm font-medium text-pink-500/70 tracking-widest uppercase">
          Contact
        </span>
      </div>
      <div className="flex py-6 mb-28">
        <div className="basis-1/3">
          <h1 className="font-bold text-5xl leading-tight ">
            Available For
            <br /> New <br />
            opportunities
          </h1>
        </div>
        <div className="flex basis-2/3  justify-between">
          <div className="flex  self-end">
            <p className="max-w-lg text-[17px] font-light text-gray-400">
              Actively exploring Frontend and React Developer opportunities where I can contribute
              modern UI engineering, scalable component architecture, and user-focused web
              experiences.
              <br />
              <br />
              <span className="text-[15px]">Email: r.pragadeesh11@gmail.com</span>
            </p>
          </div>

          <div className="flex flex-col ">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <div className="border-y border-dashed border-zinc-800 py-3">
                  <a key={social.id} className="socials">
                    <Icon className="inline-block  mx-1.5" /> {social.name}
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
