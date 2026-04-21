export default function HoverCard({ genre }) {
  const Icon = genre.icon;
  return (
    <div className="relative hoverCard w-full h-[260px] border border-[#ff2d75] shadow-[0_0_12px_rgba(255,45,117,0.6)] ">
      <div className="absolute inset-0 front flex justify-self-center">
        <Icon className="w-12 h-auto opacity-70 text-gray-400" />
      </div>
      <div className="absolute rear opacity-0">
        <h2>{genre.title}</h2>
        <p>{genre.description}</p>
        <img src={genre.img} alt="genre-img" />
      </div>
    </div>
  );
}
