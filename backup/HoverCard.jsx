export default function HoverCard({ genre }) {
  const Icon = genre.icon;

  return (
    <div className="hoverCard group perspective-[1000px] w-full h-[240px]">
      <div
        className="relative w-full h-full bg-[linear-gradient(135deg,#0b020b,#140514,#1a071c)] border border-pink-300/40 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] rounded-lg 
        transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:rotateY(0deg)] [transform-style:preserve-3d] 
        group-hover:scale-[1.02] group-hover:[transform:rotateY(180deg)] delay-100"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.04),transparent_60%)]" />

        <div className="flip-front absolute inset-0 flex justify-self-center overflow-hidden ">
          <Icon className="w-12 h-auto opacity-80 text-gray-300 transition-all duration-300" />
        </div>

        <div className="flip-back absolute inset-0 rounded-lg  border border-[#ff2d75] shadow-[0_0_12px_rgba(255,45,117,0.6)] overflow-hidden">
          <div
            className="absolute inset-0 opacity-27.5 bg-cover bg-center"
            style={{ backgroundImage: `url(${genre.img})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,5,20,0.8),rgba(10,5,20,0.4),transparent)] " />

          <div className="absolute p-6">
            <h2 className="font-semibold text-2xl text-amber-50 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] ">
              {genre.title}
            </h2>
            <p className=" text-gray-300 my-2.5">{genre.description}</p>
            <Icon className="absolute w-7 h-auto  text-gray-400 -bottom-18 right-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
