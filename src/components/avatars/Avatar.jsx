import PropTypes from 'prop-types'

export function Avatar({ className, avatar, name, active }) {
  if (avatar) return null

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
  className: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
}
