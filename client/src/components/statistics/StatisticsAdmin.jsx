import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStatictis } from "../../redux/actions/index";

const StatisticsAdmin = ({ statistics }) => {
  const dispatch = useDispatch();

  //const { statistics } = useSelector((state) => state);
  let userPremiunpay = statistics?.usersPremiun * 5000;

  useEffect(() => {
    console.log(statistics);
    //dispatch(getStatictis());
  }, []);

  return (
    <>
      <h1>ESTADISTICAS ADMIN</h1>
      <div class="flex h-screen items-center">
        <div class="px-10 mx-auto container align-middle">
          <div class="md:grid grid-cols-1 my-10 sm:grid my-4 grid-cols-4 gap-4 ">
            <div class="shadow rounded-lg my-20 py-3 px-5 bg-white">
              <div class="flex flex-row justify-between items-center">
                <div>
                  <h6 class="text-2xl">Total mensual:</h6>
                  <h4 class="text-black text-4xl font-bold text-left">
                    {"$" + userPremiunpay + "(Arg)"}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-left flex flex-row justify-start items-center">
                <p>
                  <span class="text-teal-500 font-bold"></span>En 30 dias
                </p>
              </div>
            </div>
            <div class="shadow rounded-lg my-20 py-3 px-5 bg-white">
              <div class="flex flex-row justify-between items-center">
                <div>
                  <h6 class="text-2xl">Propiedades totales</h6>
                  <h4 class="text-black text-4xl font-bold text-left">
                    {statistics?.propertiesCount}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-left flex flex-row justify-start items-center">
                <p>
                  <span class="text-teal-500 font-bold"></span> En 30 dias
                </p>
              </div>
            </div>
            <div class="shadow rounded-lg my-20 py-3 px-5 bg-white">
              <div class="flex flex-row justify-between items-center">
                <div>
                  <h6 class="text-2xl">Usuarios totales</h6>
                  <h4 class="text-black text-4xl font-bold text-left">
                    {statistics?.userCount}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-left flex flex-row justify-start items-center">
                <p>
                  <span class="text-teal-500 font-bold"></span>En 30 dias
                </p>
              </div>
            </div>
            <div class="shadow rounded-lg my-20 py-3 px-5 bg-white">
              <div class="flex flex-row justify-between items-center">
                <div>
                  <h6 class="text-2xl">Cantidad favoritos</h6>
                  <h4 class="text-black text-4xl font-bold text-left">
                    {statistics?.favortiesCount}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div class="text-left flex flex-row justify-start items-center">
                <p>
                  <span class="text-red-500 font-bold"></span> En 30 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsAdmin;
