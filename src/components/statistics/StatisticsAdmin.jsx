import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getStatictis } from '../../redux/actions/index'

const StatisticsAdmin = ({ statistics }) => {
  const dispatch = useDispatch()

  //const { statistics } = useSelector((state) => state);
  let userPremiunpay = statistics?.usersPremiun * 5000

  useEffect(() => {
    //dispatch(getStatictis());
  }, [])

  return (
    <>
      <h1>ESTADISTICAS ADMIN</h1>
      <div className="flex h-screen items-center">
        <div className="container mx-auto px-10 align-middle">
          <div className="my-10 my-4 grid-cols-1 grid-cols-4 gap-4 sm:grid md:grid ">
            <div className="my-20 rounded-lg bg-white py-3 px-5 shadow">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-2xl">Total mensual:</h6>
                  <h4 className="text-left text-4xl font-bold text-black">
                    {'$' + userPremiunpay + '(Arg)'}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-left">
                <p>
                  <span className="font-bold text-teal-500"></span>En 30 dias
                </p>
              </div>
            </div>
            <div className="my-20 rounded-lg bg-white py-3 px-5 shadow">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-2xl">Propiedades totales</h6>
                  <h4 className="text-left text-4xl font-bold text-black">
                    {statistics?.propertiesCount}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-left">
                <p>
                  <span className="font-bold text-teal-500"></span> En 30 dias
                </p>
              </div>
            </div>
            <div className="my-20 rounded-lg bg-white py-3 px-5 shadow">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-2xl">Usuarios totales</h6>
                  <h4 className="text-left text-4xl font-bold text-black">
                    {statistics?.userCount}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-left">
                <p>
                  <span className="font-bold text-teal-500"></span>En 30 dias
                </p>
              </div>
            </div>
            <div className="my-20 rounded-lg bg-white py-3 px-5 shadow">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-2xl">Cantidad favoritos</h6>
                  <h4 className="text-left text-4xl font-bold text-black">
                    {statistics?.favortiesCount}
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-left">
                <p>
                  <span className="font-bold text-red-500"></span> En 30 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticsAdmin
