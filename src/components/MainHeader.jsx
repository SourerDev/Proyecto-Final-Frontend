import PropTypes from 'prop-types'

export function MainHeader({ children }) {
  return (
    <div className="h-screen min-h-[500px] bg-[url('https://img.freepik.com/foto-gratis/familia-moviendose-usando-cajas_1157-35480.jpg?w=2000')] bg-cover bg-no-repeat">
      {children}
    </div>
  )
}

//
MainHeader.propTypes = {
  children: PropTypes.any,
}
