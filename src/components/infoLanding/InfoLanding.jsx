export default function CardsLanding() {
  return (
    <div className="mt-10 p-10  lg:mt-0 lg:flex   justify-center items-center ">
      <div className=" p-4 m-1 rounded-lg border border-gray-200 shadow-md bg-gray-800  ">
        <svg
          className="w-10 h-10 text-white flex justify-center"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <h5 classNameName="mb-2  text-2xl font-bold   text-white">
          Encontra el lugar que estas buscando!
        </h5>
        <p className="font-normal text-gray-400">
          Ya sea para mudarte con tu familia o tener el mejor lugar para tus
          vacaciones en "Properties & you" vas a encontrar todo tipo propiedades
          para comprar o alquilar en todo el país.
        </p>
      </div>
      <div className="   p-4 m-2  rounded-lg border border-gray-200 shadow-md bg-gray-800 ">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ></path>
        </svg>
        <h5 className="mb-2  text-2xl font-bold  text-white">
          Busqueda certera
        </h5>
        <p className="font-normal  text-gray-400">
          Encuentra especificamente lo que buscas usando nuestros. filtros
          avanzados.
        </p>
      </div>
      <div className="  p-2.5  m-1 rounded-lg border border-gray-200 shadow-md bg-gray-800  ">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        <h5 className="mb-2  text-2xl font-bold  text-white">
          Vuelvete vendedor{" "}
        </h5>
        <p className="font-normal  text-gray-400">
          Haciendote vendedor podras publicar tus propiedades, poscicionarte en
          el mercado inmobiliario y tener control sobre tus publicaciones.
        </p>
      </div>
    </div>
  );
}
