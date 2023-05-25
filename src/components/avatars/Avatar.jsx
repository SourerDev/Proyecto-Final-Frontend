export function Avatar({ className, avatar, name, active }) {
  return (
    <picture
      className={`grid place-content-center w-16 h-auto relative overflow-hidden ${className}`}
    >
      <img className="rounded-full" src={avatar} alt={name} />
      {active && (
        <span className="absolute bg-green-400 right-[15%] bottom-[5%] w-[23%] aspect-square rounded-full z-50 border border-white"></span>
      )}
    </picture>
  );
}
