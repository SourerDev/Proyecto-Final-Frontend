import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { icons } from "../../images";

export function ModalNav({ signIn, session}) {
  const userType = session.userType
  
  const { HeartBorder, Lightning } = icons;
  return (
    <Popover className="relative bg-white">
      <Popover.Button className=" outline-0 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-inset">
        <span className="sr-only">Menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
          className="fixed inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <div className="min-h-[500px] divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
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
                  {signIn && (
                    <Link to={"/user"} className="">
                      <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                        is Logged
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
                  {userType === "logged" && (
                    <>
                      <Link to="/user/be-premium" className="">
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
                  {(userType === "admin" ||
                    userType === "premium") && (
                    <Link to="/dashboard" className="">
                      <Popover.Button className="flex w-full items-center rounded-md p-3 hover:bg-gray-50  text-gray-600 hover:text-gray-900 border border-white  hover:border hover:border-gray-200">
                        <Lightning
                          width={"24"}
                          fill="#8d6b06ce"
                          hover={"#8d6b06ce"}
                        />
                        <span className="pl-3">Dashboard</span>
                      </Popover.Button>
                    </Link>
                  )}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                {signIn ? (
                  <>
                    <Popover.Button className="w-full text-center font-semibold bg-red-600/80 rounded p-2 text-red-900 hover:bg-red-700/75 hover:text-white">
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
                      <Link to="/sign-in">
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
