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

//
LoaderCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
}
LoaderItem.propTypes = {
  className: PropTypes.string,
}
