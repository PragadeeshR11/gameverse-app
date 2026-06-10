export default function FlipCardContent({ genre }) {
  const Icon = genre.icon;
  return (
    <div className="flex-1 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${genre.img})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,3,12,0.92),rgba(6,3,12,0.65),transparent)]" />

      <div className="absolute inset-0 flex flex-col  px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12">
        <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-amber-50 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          {genre.title}
        </h2>
        <p className="text-[11px] sm:text-xs md:text-[13px] font-light lg:text-base lg:font-normal text-gray-300/80 my-2 sm:my-2.5 max-w-full sm:max-w-[260px] md:max-w-[420px] lg:max-w-[520px] line-clamp-4 sm:line-clamp-none">
          {genre.description}
        </p>
        {genre.id === '5' && (
          <a
            href="#subscriptions"
            className="hidden actionBtn md:inline-block bg-amber-50 text-black mt-4 sm:mt-6 ml-0 sm:ml-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-3xl w-fit"
          >
            Dive In &darr;
          </a>
        )}
        {genre.id != '5' && (
          <Icon className="hidden sm:block absolute w-8 sm:w-10 h-auto text-gray-400 bottom-4 right-4 sm:-bottom-12 sm:-right-6 md:bottom-4 md:right-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
        )}
      </div>
    </div>
  );
}
