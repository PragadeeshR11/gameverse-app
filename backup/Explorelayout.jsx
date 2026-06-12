export default function ExploreLayout({ exploreItems, activeSec }) {
  return (
    <div className="flex w-full gap-6 xl:gap-12 min-w-0">
      <div className="lpan w-2/5 max-w-[420px] pr-4 xl:pr-12 py-2 ml-4 xl:ml-10 shrink-0">
        <div className="absolute w-[2px] h-32 bg-white/10 rounded-full mr-6 overflow-hidden ">
          <div
            className="w-full bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500  transition-all duration-500 
            ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_15px_rgba(236,72,153,0.6)]"
            style={{
              height: `${((activeSec + 1) / exploreItems.length) * 100}%`,
            }}
          />
        </div>

        <div className="relative w-full ml-4">
          {exploreItems.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] drop-shadow-[0_0_12px_rgba(168,85,247,0.2)]
              ${activeSec === i ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 blur-[1px] pointer-events-none'}`}
            >
              <h2
                className={`text-2xl xl:text-3xl font-medium text-[#dee2e6] tracking-wide transition-all duration-500 delay-75
                ${activeSec === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              >
                {item.title}
              </h2>
              <p
                className={`text-sm xl:text-[17px] font-normal text-[#868e96] leading-7 xl:leading-8 my-4 transition-all duration-500 delay-200
                ${activeSec === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rpan relative w-full min-w-0 max-w-[980px] aspect-video overflow-hidden">
        {exploreItems.map((item, i) => (
          <img
            key={i}
            src={item.img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl
            transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_60px_rgba(168,85,247,0.12)] hover:scale-[1.02]
            ${activeSec === i ? 'opacity-100 scale-100 blur-0 z-10' : 'opacity-0 scale-[1.02] blur-[1px] z-0'}`}
          />
        ))}

        <div
          className="absolute inset-0 rounded-lg bg-[linear-gradient(to_left,rgba(10,5,20,0.35),rgba(168,85,247,0.15),transparent)] 
          opacity-80  pointer-events-none"
        />
      </div>
    </div>
  );
}
