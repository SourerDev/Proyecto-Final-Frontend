export function Avatar({ className, avatar, name, active }) {
  return (
    <picture
      className={`relative grid h-auto w-16 place-content-center overflow-hidden ${className}`}
    >
      <img className="rounded-full" src={avatar} alt={name} />
      {active && (
        <span className="absolute right-[15%] bottom-[5%] z-50 aspect-square w-[23%] rounded-full border border-white bg-green-400"></span>
      )}
    </picture>
  )
}
Avatar.propTypes = {
  name: String,
  className: String,
  avatar: String,
  active: Boolean,
}
