import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//components
import { ModalNav } from './ModalNav.jsx'
import { MainAvatar } from '../avatars/MainAvatar.jsx'

export function Nav({ rutes = true, login = true, className }) {
  const view = useSelector((state) => state.app.viewNav)
  const { signIn, session } = useSelector((state) => state.user)
  const userType = session?.userType

  if (!view) return null

  return (
    <div className={`-mx-auto sticky top-0 z-50 max-h-[75px] ${className}`}>
      <nav className="relative flex items-center justify-between md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/" className="flex items-center">
            <span className="sr-only">Properties & You</span>
            <img
              className="h-8 w-auto sm:h-10 md:w-10"
              src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
              alt=""
            />
            <span className="mx-2 text-xl sm:text-2xl md:hidden xl:block">Properties & You</span>
          </Link>
        </div>

        {rutes && (
          <ul className="hidden space-x-10 md:flex">
            <li>
              <Link
                to="/home"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                VENTA
              </Link>
            </li>

            <li>
              <Link
                to="/home"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                ALQUILER
              </Link>
            </li>

            <li>
              <Link
                to="/home"
                className="W-40 text-center text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <span className="m-0 p-0">PROPIEDADES</span>
              </Link>
            </li>

            {userType === 'logged' && (
              <li>
                <Link
                  to="/user/be-premium"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  PREMIUM
                </Link>
              </li>
            )}

            {(userType === 'admin' || userType === 'premium') && (
              <Link
                to="/dashboard"
                className="W-40 text-center text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <span className="m-0 p-0">DASHBOARD</span>
              </Link>
            )}
            <li>
              <Link
                to="/about-us"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                NOSOTROS
              </Link>
            </li>
          </ul>
        )}
        <div className="hidden items-center justify-end md:flex md:flex-1">
          {signIn ? (
            <MainAvatar />
          ) : (
            login && (
              <Link
                to="/sign-in"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Iniciar Sesión
              </Link>
            )
          )}
        </div>

        <div className="-my-2 -mr-2 md:hidden">
          <ModalNav signIn={signIn} session={session} />
        </div>
      </nav>
    </div>
  )
}

Nav.propTypes = {
  rutes: PropTypes.bool,
  login: PropTypes.bool,
  className: PropTypes.string,
}
