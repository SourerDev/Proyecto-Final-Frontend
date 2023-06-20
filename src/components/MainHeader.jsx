import PropTypes from 'prop-types'

export function MainHeader({ className, children }) {
  return (
    <div
      className={`h-screen min-h-[500px] bg-[url('https://img.freepik.com/foto-gratis/familia-moviendose-usando-cajas_1157-35480.jpg?w=2000')] bg-cover bg-no-repeat bg-center ${className}`}
    >
      {children}
    </div>
  )
}

//
MainHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
