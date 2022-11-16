import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="relative bg-white flex flex-row shadow p-2 sm:p-4">
      <div className="flex justify-start lg:w-0 flex-1">
        <Link to={"/"}>
          <img
            className="h-8 w-auto sm:h-12"
            src="https://images.vexels.com/media/users/3/142719/isolated/preview/f07a4b2d673e9935e58e6ff8262d4a1d-icono-de-casas-de-triangulo.png"
            alt=""
          />
        </Link>
        <div className="text-2xl font-bold tracking-wide space-x-4 max-sm:hidden sm:text-3xl sm:font-extrabold self-center">
          <h1 className="self-center">Properties & You</h1>
        </div>
      </div>
      <nav className="space-x-10 md:flex self-center">
        <Link
          to="/Home"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          HOME
        </Link>
        <Link
          to="/createProperty"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          CREATE PROPERTY
        </Link>
      </nav>
      <div className="mx-auto items-center justify-end md:flex md:flex-1 lg:w-0">
      <div className="flex items-center space-x-4">
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link to="/login">
              <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-500">
                Log in
              </button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}
