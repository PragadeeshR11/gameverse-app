export default function ExploreLayout({ exploreItem }) {
  return (
    <div className="flex w-full ">
      <div className="lpan w-2/5 pr-12 py-2 ml-10">
        <h2 className="text-2xl font-medium text-[#dee2e6]  tracking-wide">{exploreItem.title}</h2>
        <p className=" text-lg font-normal text-[#868e96] leading-relaxed my-3">
          {exploreItem.description}
        </p>
      </div>

      <div className="rpan relative w-fit max-w-[900px] justify-items-center mx-10 overflow-hidden">
        <img
          src={exploreItem.img}
          className="aspect-video w-full object-cover  border border-white/5 rounded-lg shadow-[0_0_40px_rgba(168,85,247,0.15)]
          transition-all duration-300 bg-[linear-gradient(to_left,rgba(10,5,20,0.55),rgba(10,5,20,0.25),transparent)]  hover:scale-[1.02]"
          alt="explore-img"
        />
        <div
          className="absolute inset-0 rounded-lg bg-[linear-gradient(to_left,rgba(10,5,20,0.35),rgba(168,85,247,0.15),transparent)] 
          opacity-80 pointer-events-none"
        />
      </div>
    </div>
  );
}
