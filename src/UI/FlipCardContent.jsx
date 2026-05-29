export default function FlipCardContent({ genre }) {
  const Icon = genre.icon;
  return (
    <div className="flex-1 relative overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${genre.img})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,3,12,0.92),rgba(6,3,12,0.65),transparent)]" />

      <div className="absolute px-8 py-12">
        <h2 className="font-semibold text-4xl text-amber-50 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          {genre.title}
        </h2>
        <p className=" text-gray-300 my-2.5 max-w-[520px]">{genre.description}</p>
        {genre.id === '5' && (
          <a
            href="#subscriptions"
            className="actionBtn bg-amber-50 text-black mt-6 ml-2 px-6 py-2 rounded-3xl "
          >
            Dive In &darr;
          </a>
        )}
        {genre.id != '5' && (
          <Icon className=" absolute w-10 h-auto  text-gray-400 -bottom-48 -right-9 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
        )}
      </div>
    </div>
  );
}
