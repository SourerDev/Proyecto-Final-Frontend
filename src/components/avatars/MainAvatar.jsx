import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadUserInfo } from '../../redux/actions'
import { Icon } from '../../assets'
import { useSelector } from 'react-redux'

export function MainAvatar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.session)

  return (
    <Popover className="relative bg-white ">
      <Popover.Button className=" border-1 focus:border-1 inline-flex  h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-gray-100">
        <span className="sr-only">user</span>
        <img className="h-full w-full rounded-full" src={user?.photo} alt="" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-full right-1/4 z-50 w-36 origin-top-right transform transition"
        >
          <div className="flex flex-col divide-y-2 divide-gray-50 rounded-lg bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5">
            <h1 className="w-full text-center text-lg">
              {(user.userName &&
                (user.userName.length > 15
                  ? user.userName.slice(0, 10) + '...'
                  : user.userName)) ||
                'Username'}
            </h1>
            <div className="flex w-full flex-col py-1">
              <Link to={'/profile'} className="">
                <Popover.Button className="flex w-full py-1 text-center text-gray-500 hover:text-gray-900">
                  <Icon.User width="25" hover={'#e5e5e5'} />
                  <span className="pl-2">Ver perfil</span>
                </Popover.Button>
              </Link>
              <Link to={`/favorites/${user.idUser}`}>
                <Popover.Button className="flex w-full py-1 text-center">
                  <Icon.HeartBorder
                    width="25"
                    hover={'#ea2d98'}
                    fill="#9c9c9c"
                  />
                  <span className="pl-2">Favoritos</span>
                </Popover.Button>
              </Link>
              {user?.userType === 'userLogged' && (
                <Link to={'/bePremium'} className="">
                  <Popover.Button className="w-full py-1 text-center">
                    <span className="bg- flex rounded-lg bg-yellow-300/75 p-1 text-yellow-700 hover:bg-yellow-300/20">
                      <Icon.Lightning
                        width={'24'}
                        fill="#8d6b06ce"
                        hover={'#8d6b06ce'}
                      />
                      <span className="pl-2"> Premium</span>
                    </span>
                  </Popover.Button>
                </Link>
              )}
              {(user?.userType === 'admin' ||
                user?.userType === 'userPremiun') && (
                <Link to={'/dashboard'} className="">
                  <Popover.Button className="w-full py-1 text-center">
                    <span className="bg-  flex rounded-lg p-1  text-gray-500 hover:text-gray-900">
                      <Icon.Lightning
                        width={'24'}
                        fill="#8d6b06ce"
                        hover={'#8d6b06ce'}
                      />
                      <span className="pl-2">Dashboard </span>
                    </span>
                  </Popover.Button>
                </Link>
              )}
            </div>

            <Link to="/home">
              <Popover.Button
                onClick={() => dispatch(loadUserInfo({}))}
                className="flex w-full text-gray-500 hover:text-red-600"
              >
                <Icon.Exit
                  className="pt-1"
                  width="24"
                  height={'24'}
                  fill="#9c9c9c"
                  hover={'#a42222'}
                />
                <span className="pl-2">Cerrar sesión</span>
              </Popover.Button>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
