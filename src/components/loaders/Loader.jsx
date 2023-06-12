import PropTypes from 'prop-types'

export function LoaderCard({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={`animate-pulse border border-gray-100 p-4 shadow ${className}`}
    >
      {children}
    </div>
  )
}

export function LoaderItem({ className }) {
  return <div className={`bg-slate-100 ${className}`}></div>
}

export function LoaderIcon( { className }) {
  return (
    <div className={`h-auto w-10 bg-white p-2 shadow grid place-content-center rounded ${className}`}>
      <svg
        className="w-full h-full animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="stroke-gray-400 opacity-25"
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
        ></circle>
        <path
          className="fill-blue-900 opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  )
}

//
LoaderCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
}
LoaderItem.propTypes = {
  className: PropTypes.string,
}
LoaderIcon.propTypes = {
  className: PropTypes.string,
}
