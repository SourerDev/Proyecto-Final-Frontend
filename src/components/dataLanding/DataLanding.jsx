import { Link } from "react-router-dom";

export default function DataLanding() {
  return (
    <div className="bg-gray-800 P-2 flex flex-col px-14 rounded-lg">
      <h1 className=" underline text-center text-white text-3xl">
        Properties & You
      </h1>
      <h4 className="text-white flex flex-row justify-center p-3 items-center">
        <svg
          className="w-7 h-7 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        Lidera en ventas y alquileres en el mercado inmobiliario
      </h4>
      <h4 className="text-white flex flex-row  justify-center text-center p-3 ">
        <svg
          className="w-6 h-6 text-blue-50"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        Publica tus casas sin comisión por venta/alquiler
      </h4>

      <h4 className="text-white flex flex-row  justify-center text-center p-3">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clipRule="evenodd"
          ></path>
        </svg>
        Contactate con el cliente sin intermediarios
      </h4>
      <p className="text-center text-blue-100">
        Todo eso lo podes hacer suscribiéndote a la membresía PREMIUM, ingresa
        haciendo click
        <Link to="/bePremium">
          <button className="underline text-indigo-400"> aquí</button>
        </Link>
      </p>
    </div>
  );
}
