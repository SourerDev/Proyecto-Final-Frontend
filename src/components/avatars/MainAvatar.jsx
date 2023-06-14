import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { actionsUser } from '../../redux2.0/reducers'
import {
  UserIcon,
  BookmarkIcon,
  ArrowLeftOnRectangleIcon,
  RocketLaunchIcon,
  WindowIcon,
} from '@heroicons/react/24/outline'

export function MainAvatar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.session)

  return (
    <Popover className="relative grid place-content-center">
      <Popover.Button className=" border-1 focus:border-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-gray-100 border ">
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
          className="absolute top-full right-1/4 z-50 w-40 origin-top-right transform transition"
        >
          <div className="flex flex-col divide-y-2 divide-gray-50 rounded-lg bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5">
            <h1 className="w-full text-center text-lg">
              {(user.userName &&
                (user.userName.length > 15
                  ? user.userName.slice(0, 10) + '...'
                  : user.userName)) ||
                'Username'}
            </h1>
            <section className="flex w-full flex-col gap-y-1 py-1">
              <Link to="/profile">
                <Popover.Button className="flex w-full gap-x-2 py-1 text-center text-gray-500 hover:text-gray-900">
                  <UserIcon className="h-auto w-6" />
                  <span className="">Perfil</span>
                </Popover.Button>
              </Link>
              <Link to="/properties-saved">
                <Popover.Button className="flex w-full gap-x-2 py-1 text-center text-gray-500 hover:text-gray-900">
                  <BookmarkIcon className="h-auto w-6" />
                  <span className="">Favoritos</span>
                </Popover.Button>
              </Link>
              {user?.userType === 'logged' && (
                <Link to="/be-premium">
                  <Popover.Button className="flex w-full gap-x-1 rounded-lg bg-yellow-300/75 p-1 py-1 text-center text-yellow-700 hover:bg-yellow-300/20">
                    <RocketLaunchIcon className="h-auto w-6" />
                    <span>Premium</span>
                  </Popover.Button>
                </Link>
              )}
              {(user?.userType === 'admin' || user?.userType === 'premium') && (
                <Link to="/dashboard">
                  <Popover.Button className="flex w-full gap-x-2 py-1 text-center text-slate-600 hover:text-slate-700">
                    <WindowIcon className="h-auto w-6" />
                    <span>Dashboard</span>
                  </Popover.Button>
                </Link>
              )}
              <Link to="/home">
                <Popover.Button
                  className="flex w-full gap-x-1 py-1 text-center text-gray-500 hover:text-red-700"
                  onClick={() => {
                    dispatch(actionsUser.setUser({}))
                    dispatch(actionsUser.setSignIn(false))
                  }}
                >
                  <ArrowLeftOnRectangleIcon className="h-auto w-6" />
                  <span className="whitespace-nowrap pl-2">Salir</span>
                </Popover.Button>
              </Link>
            </section>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

/*
<Link to={'/profile'} className="">
                <Popover.Button className="flex w-full py-1 text-center text-gray-500 hover:text-gray-900">
                  <UserIcon />
                  <span className="pl-2">Perfil</span>
                </Popover.Button>
              </Link>
              <Link to={`/favorites/${user.idUser}`}>
                <Popover.Button className="flex w-full py-1 text-center">
                  <BookmarkIcon />
                  <span className="pl-2">Favoritos</span>
                </Popover.Button>
              </Link>
              {user?.idUser && (
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


              <Link to="/home">
              <Popover.Button
                onClick={() => {
                  dispatch(actionsUser.setUser({}))
                  dispatch(actionsUser.setSignIn(false))
                }}
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
*/
