import PropTypes from 'prop-types'

export function Card({ className, children }) {
  return (
    <div
      className={`h-auto min-w-[50px] border bg-white px-4 py-2 ${className}`}
    >
      {children}
    </div>
  )
}


Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}