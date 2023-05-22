import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUserInfo } from "../../redux/actions";
import {icons} from "../../images"
import { useSelector } from "react-redux";

export function MainAvatar() {
  const dispatch = useDispatch();
  const {HeartBorder,User, Exit,Lightning} = icons;
  const user = useSelector((state) => state.user.session)
  
  return (
    <Popover className="relative bg-white ">
      <Popover.Button className=" w-12 h-12 border-1  rounded-full inline-flex items-center justify-center bg-white hover:bg-gray-100 focus:border-1">
        <span className="sr-only">user</span>
        <img className="w-full h-full rounded-full" src={user?.photo} alt="" />
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
            <h1 className="text-center w-full text-lg">
              {user.userName && (user.userName.length > 15 ? user.userName.slice(0,10) + "...":user.userName) || "Username"}
            </h1>
            <div className="w-full flex flex-col py-1">
              <Link to={"/user"} className="">
                <Popover.Button className="flex w-full py-1 text-gray-500 hover:text-gray-900 text-center">
                  <User width="25" hover={"#e5e5e5"}/>
                  <span className="pl-2">Ver perfil</span>
                </Popover.Button>
              </Link>
              <Link to={`/favorites/${user.idUser}`}>
              <Popover.Button className="flex w-full py-1 text-center">
                  <HeartBorder width="25" hover={"#ea2d98"} fill="#9c9c9c"/>
                  <span className="pl-2">Favoritos</span>
              </Popover.Button>
              </Link>
              {(user?.userType === "userLogged")&&<Link to={"/bePremium"} className="">
                <Popover.Button className="w-full py-1 text-center">
                  <span className="flex bg-yellow-300/75 text-yellow-700 bg- rounded-lg p-1 hover:bg-yellow-300/20">
                    <Lightning width={"24"} fill="#8d6b06ce" hover={"#8d6b06ce"}/>
                    <span className="pl-2"> Premium</span>
                  </span>
                </Popover.Button>
              </Link>}
              {(user?.userType === "admin" || user?.userType === "userPremiun")&&<Link to={"/dashboard"} className="">
                <Popover.Button className="w-full py-1 text-center">
                  <span className="flex  bg- rounded-lg p-1  text-gray-500 hover:text-gray-900">
                    <Lightning width={"24"} fill="#8d6b06ce" hover={"#8d6b06ce"}/>
                    <span className="pl-2">Dashboard </span>
                  </span>
                </Popover.Button>
              </Link>}
            </div>

            <Link to="/home">
              <Popover.Button
                onClick={() => dispatch(loadUserInfo({}))}
                className="w-full hover:text-red-600 text-gray-500 flex"
              >
                <Exit className="pt-1" width="24" height={"24"} fill="#9c9c9c" hover={"#a42222"}/>
                <span className="pl-2">Cerrar sesión</span>
              </Popover.Button>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
