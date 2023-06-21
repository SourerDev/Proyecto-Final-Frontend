import PropTypes from 'prop-types'

export function GoBackButton({ className, children, ...props }) {
  const goBack = () => {
    window.history.back()
  }
  return (
    <button
      {...props}
      className={`whitespace-nowrap border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm  ${className}`}
      onClick={goBack}
    >
      {children || 'Volver'}
    </button>
  )
}

GoBackButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
