import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {loadUserInfo} from "../../redux/actions"

export default function UserIcon({ user }) {
  const dispatch = useDispatch()
  return (
    <Popover className="relative bg-white ">
      <Popover.Button className=" w-12 h-12 border-1  rounded-full inline-flex items-center justify-center bg-white hover:bg-gray-100 focus:border-1">
        <span className="sr-only">user</span>
        <img className="w-full h-full rounded-full" src={user.photo} alt="" />
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
          className="absolute top-full right-1/4 origin-top-right transform transition z-50 w-36"
        >
          <div className="flex flex-col divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-2">
            <h1 className="text-center w-full text-lg">{user.name || "Username"}</h1>
            <div className="w-full flex flex-col py-1">
              <Link to={"/user"} className="w-full py-1 text-gray-500 hover:text-gray-900 text-center">
                Ver perfil
              </Link>
              <Link to="/bePremium" className="w-full py-1 text-center">
                <span className="bg-yellow-300/75 text-yellow-700 bg- rounded-lg p-1 hover:bg-yellow-300/20">
                  Premium
                </span>
              </Link>
            </div>

            <Popover.Button
              onClick={() => dispatch(loadUserInfo({}))}
              className="hover:text-red-600 text-gray-500"
            >
              <span>Cerrar sesión</span>
            </Popover.Button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
