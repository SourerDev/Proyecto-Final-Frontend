import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionsPublications } from '../../redux2.0/reducers'
import { ApiPropYou } from '../../services'
import { GoBackButton } from '../../components/form/buttons/GoBack'
import { CarrouselDetail } from '../../components/carousels/CarrouselDetail'
import { OwnerCard } from '../../components/cards/OwnerCard'
import {
  CurrencyDollarIcon,
  CubeTransparentIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'

export function PropertyDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const publication = useSelector(
    (state) => state.publication.detailPublication
  )
  const { User, Property } = publication?.idPublication
    ? publication
    : { User: {}, Property: {} }

  useEffect(() => {
    ApiPropYou.getPublicationById({ idPublication: id })
      .then((response) => {
        const { publication } = response.data
        dispatch(actionsPublications.setDetailPublication({ ...publication }))
      })
      .catch(() => {})
    return () => {
      dispatch(
        actionsPublications.setDetailPublication({ idPublication: null })
      )
    }
  }, [dispatch])

  if (!publication?.idPublication) return <div>...Loading</div>

  return (
    <div className="flex min-h-screen border-2 border-blue-600 p-2 justify-evenly">
      <div className="w-[53%]">
        <CarrouselDetail className="" images={[...Property.photos]} />
      </div>
      <div className="h-fit w-[42%]  border-2 border-yellow-600">
        <div className="flex border-2 border-gray-400">
          <div className="flex w-full items-center justify-evenly py-1">
            <p className="border-r-2 border-gray-500 pr-2 text-xl font-medium">{`${Property.City.string}`}</p>
            <p className="italic text-gray-600">{Property.address}</p>
          </div>
        </div>
        <div className="flex text-xl border-2 border-red-500 p-3 justify-around">
          <p className="flex gap-2">
            <CurrencyDollarIcon className="h-6 w-6" />
            Baños
            <p className='text-gray-500'>{Property.bathrooms}</p>
          </p>
          <p className="flex gap-2">
            <RectangleGroupIcon className="h-6 w-6" />
            Cuartos
            <p className='text-gray-500'>{Property.bedrooms}</p>
          </p>
          <p className="flex gap-2">
            <CubeTransparentIcon className="h-6 w-6" />
            Metros²
            <p className='text-gray-500'>{Property.squareMeters}</p>
          </p>
        </div>
      </div>
    </div>
  )
}
{ //price
  /* <div className="flex items-center rounded-sm  border-2 border-blue-900 bg-blue-800 py-1 px-1 text-gray-200">
    <CurrencyDollarIcon className="h-6 w-6 " />
    <p className="mt-0.5 pl-0.5 text-lg font-medium  tracking-wide">
      {publication.price}
    </p>
  </div> */

  /* <dl>
  <div className="col-start-1 col-end-3 row-start-1 grid items-center rounded-lg bg-white shadow-2xl sm:mb-3 sm:grid-cols-2">
    <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>

      <span className="m-3 p-0 text-xl">
        numero de pisos <spam></spam>{' '}
        <span className="font-normal text-black">(pisos)</span>
      </span>
    </dd>
    <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>

      <span className="m-3 p-0 text-xl">
        garage <span className="font-normal text-black">(garage)</span>
      </span>
    </dd>
    <dd className="m-3 flex items-center p-1 text-black   dark:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>

      <span className="m-3 p-0 text-xl">
        numero de enverioments{' '}
        <span className="font-normal text-black">ambientes</span>
      </span>
    </dd>
    <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        />
      </svg>

      <span className="m-3 p-0 text-xl">
        {Property.squareMeters}{' '}
        <span className="text-l text-black">.mt2</span>
      </span>
    </dd>
    <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>

      <span className="m-3 p-0 text-xl">
        {Property.bedrooms}{' '}
        <span className="font-normal text-black">cuartos</span>
      </span>
    </dd>
    <dd className="m-3 flex items-center p-1 text-black dark:text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <span className="m-3 p-0 text-xl">{Property.yearBuilt} </span>
      <span className="text-xl font-normal text-black">antiguedad</span>
    </dd>
  </div>
</dl> */
}
{
  /* <GoBackButton />
<div className="m-1 mx-auto grid max-w-4xl  grid-cols-1 p-2 lg:max-w-[97rem] lg:grid-cols-2 lg:gap-x-20">
  <div className=" col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4  lg:col-start-2  lg:row-span-2  ">
    <CarrouselDetail images={[...Property.photos]} />
  </div>
  <div className="relative col-start-1 row-start-1 my-0 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 shadow-2xl sm:row-start-2 sm:bg-white sm:bg-none sm:p-0 lg:row-start-1 lg:bg-white">
    <h1 className="my-2 mt-1 flex justify-center text-lg font-semibold text-white sm:text-slate-900 dark:sm:text-black md:text-2xl">
      {Property.address}
    </h1>
    <h1 className="mt-1 flex justify-center text-lg font-semibold text-white sm:text-slate-900 dark:sm:text-black md:text-2xl">
      {Property.City?.string}
    </h1>
    <p className="mt-2 flex justify-center text-xl font-medium leading-4 text-white sm:text-slate-400 dark:sm:text-slate-400">
      {' '}
      {Property.type}
    </p>
    <p className="mt-2 flex justify-center text-xl font-medium leading-4 text-white sm:text-indigo-600 dark:sm:text-indigo-600">
      {publication.modality}
    </p>
  </div>
  <dl className="row-start-2 mt-4 text-xs font-medium drop-shadow-2xl sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2">
    <dl className="my-4 rounded-lg border-2 border-black bg-white shadow-2xl">
      <dd className="flex items-center  justify-center  text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="text-2xl ">
          {publication.price} <span className="  font-normal">us</span>
        </span>
      </dd>
    </dl>
    <div className="col-start-1 col-end-3 row-start-1 grid items-center rounded-lg bg-white shadow-2xl sm:mb-3 sm:grid-cols-2">
      <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>

        <span className="m-3 p-0 text-xl">
          numero de pisos <spam></spam>{' '}
          <span className="font-normal text-black">(pisos)</span>
        </span>
      </dd>
      <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>

        <span className="m-3 p-0 text-xl">
          garage <span className="font-normal text-black">(garage)</span>
        </span>
      </dd>
      <dd className="m-3 flex items-center p-1 text-black   dark:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>

        <span className="m-3 p-0 text-xl">
          numero de enverioments{' '}
          <span className="font-normal text-black">ambientes</span>
        </span>
      </dd>
      <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          />
        </svg>

        <span className="m-3 p-0 text-xl">
          {Property.squareMeters}{' '}
          <span className="text-l text-black">.mt2</span>
        </span>
      </dd>
      <dd className="m-3 flex items-center p-1 text-black  dark:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>

        <span className="m-3 p-0 text-xl">
          {Property.bedrooms}{' '}
          <span className="font-normal text-black">cuartos</span>
        </span>
      </dd>
      <dd className="m-3 flex items-center p-1 text-black dark:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="m-3 p-0 text-xl">{Property.yearBuilt} </span>
        <span className="text-xl font-normal text-black">antiguedad</span>
      </dd>
    </div>
  </dl>
</div>
<OwnerCard User={User} /> */
}
