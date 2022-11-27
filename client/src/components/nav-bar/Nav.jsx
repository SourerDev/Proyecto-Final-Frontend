import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserIcon from "../user-icon/UserIcon.jsx";
import { loadUserInfo, filterProperties } from "../../redux/actions";
import { icons } from "../../images/index.js";

export default function Nav({ rutes = true, login = true }) {
  const dispatch = useDispatch();
  const { user, properties } = useSelector((state) => state);

  const { Lightning, HeartBorder } = icons;

  const setFilters = (type) => {
    const prop = filterProperties(properties, type);
    console.log("Nav»", prop);
  };

  return (
    <Popover className="relative bg-white ">
      <div className="-mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="sr-only">Properties & You</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
                alt=""
              />
              <span className="mx-2 text-xl sm:text-2xl">Properties & You</span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className=" outline-0 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-inset">
              <span className="sr-only">Menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {rutes && (
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link
                to="/home"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                onClick={() => setFilters("Venta")}
              >
                VENTA
              </Link>
              <Link
                to="/home"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                ALQUILER
              </Link>
              <Link
                to="/home"
                className="W-40 text-base text-center font-medium text-gray-500 hover:text-gray-900"
              >
                {/* <span className="p-0 m-0">TODAS LAS </span>
                <br className="p-0 m-0"/> */}
                <span className="p-0 m-0">PROPIEDADES</span>
              </Link>
              <Link
                to="/home"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                PREMIUM
              </Link>
              {/* BACKEND TRABAJANDO */}
              <Link
                to="/dashboard"
                className="W-40 text-base text-center font-medium text-gray-500 hover:text-gray-900"
              >
                <span className="p-0 m-0">DASHBOARD</span>
              </Link>
              {/* BACKEND TRABAJANDO */}
            </Popover.Group>
          )}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {user.email ? (
              <UserIcon user={user} />
            ) : (
              login && (
                <Link
                  to="/login"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Iniciar Sesión
                </Link>
              )
            )}
          </div>
        </div>
      </div>

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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
                    alt="Your Company"
                  />
                  <span className="mx-2 text-xl sm:text-2xl">
                    Properties & You
                  </span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="outline-0 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="flex flex-col">
                  {user.email && (
                    <Link to={"/user"} className="">
                      <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={user.photo}
                          alt="No Found"
                        />
                        <span className="mx-2">
                          {user.userName || "Username"}
                        </span>
                      </Popover.Button>
                    </Link>
                  )}

                  <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50  text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                    <span>VENTA</span>
                  </Popover.Button>
                  <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50  text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                    <span>ALQUILER</span>
                  </Popover.Button>
                  <Link to="/home" className="">
                    <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50  text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                      <span>TODAS LAS PROPIEDADES</span>
                    </Popover.Button>
                  </Link>
                  {user.email && (
                    <>
                      <Link to="/home" className="">
                        <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50  text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                          <Lightning
                            width={"24"}
                            fill="#8d6b06ce"
                            hover={"#8d6b06ce"}
                          />
                          <span className="pl-3">Acceso Premium</span>
                        </Popover.Button>
                      </Link>
                      <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50  text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                        <HeartBorder
                          width="25"
                          hover={"#ea2d98"}
                          fill="#9c9c9c"
                        />

                        <span className="pl-3">Favoritos</span>
                      </Popover.Button>
                    </>
                  )}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                {user.email ? (
                  <>
                    <Popover.Button
                      className="w-full text-center font-semibold bg-red-600/80 rounded p-2 text-red-900 hover:bg-red-700/75 hover:text-white"
                      onClick={() => dispatch(loadUserInfo({}))}
                    >
                      <span className="">Cerrar Sesión</span>
                    </Popover.Button>
                  </>
                ) : (
                  <>
                    <Link to="/signup">
                      <Popover.Button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        Acceder
                      </Popover.Button>
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Tienes cuenta?{" "}
                      <Link to="/login">
                        <Popover.Button className="text-indigo-600 hover:text-indigo-500">
                          Iniciar Sesión
                        </Popover.Button>
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
