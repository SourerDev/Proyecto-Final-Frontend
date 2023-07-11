import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actionsPublications } from '../../redux2.0/reducers'
import { ApiPropYou } from '../../services'
import { GoBackButton } from '../../components/form/buttons/GoBack'
import { CarrouselDetail } from '../../components/carousels/CarrouselDetail'
import { OwnerCard } from '../../components/cards/OwnerCard'
import { Question } from '../../components/question/Question'
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
    <div className="min-h-screen border p-4">
      <div className="mb-4 space-y-3 xl:flex xl:gap-x-2 xl:space-y-0">
        <div className="xl:flex-1">
          <CarrouselDetail className="" images={[...Property.photos]} />
        </div>
        <div className="xl:flex flex-col gap-y-4 ">
          <div className='rounded border p-4 shadow-md xl:h-fit xl:flex-1'>
            <p className="pl-1 text-lg font-semibold text-indigo-600 xl:ml-auto xl:mr-2 xl:w-fit">
              {type[Property.type]} en {modality[publication.modality]}
            </p>
            <div className="mt-2 mb-4 border-l-4 border-indigo-600 p-1 xl:flex">
              <p className="flex pl-1 text-2xl">
                {publication.price}{' '}
                <p className="ml-[0.3rem] font-bold">USD</p>
              </p>
            </div>
            <div className="flex border-y-2 border-gray-400">
              <div className="flex py-2 md:gap-4 xl:w-full xl:items-center">
                <p className="w-fit border-r-2 border-gray-500 pr-1.5 text-xl font-medium md:pr-6">{`${Property.City.string}`}</p>
                <p className="ml-1  pl-2 italic text-gray-600">
                  {Property.address}
                </p>
              </div>
            </div>
            <div className="p-3 text-xl xl:flex xl:justify-around">
              <p className="flex items-center gap-2 text-center">
                <CurrencyDollarIcon className="h-6 w-6" />
                <p className="flex text-lg">
                  Baños{' '}
                  <p className="ml-2 text-lg text-gray-500">
                    {Property.bathrooms}
                  </p>
                </p>
              </p>
              <p className="flex items-center gap-2 text-center">
                <RectangleGroupIcon className="h-6 w-6" />
                <p className="flex text-lg">
                  Cuartos{' '}
                  <p className="ml-2 text-lg text-gray-500">
                    {Property.bedrooms}
                  </p>
                </p>
              </p>
              <p className="flex items-center gap-2 text-center">
                <RectangleGroupIcon className="h-6 w-6" />
                <p className="flex text-lg">
                  Metros²{' '}
                  <p className="ml-2 text-lg text-gray-500">
                    {Property.squareMeters}
                  </p>
                </p>
              </p>
            </div>
          </div>
          <div className=" hidden w-full border xl:block shadow">
            <OwnerCard User={User} />
          </div>
        </div>
      </div>
      <div className="my-2 space-y-3 lg:flex lg:gap-x-3 lg:space-y-0 xl:w-1/2 xl:flex-col">
        <div className="overflow-scroll  rounded border  px-3 py-2 text-justify shadow-md md:mt-2 md:h-fit lg:mt-0 lg:flex-1 xl:h-[34.8%] xl:w-[106%]">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur dicta quidem molestias harum molestiae, blanditiis
            fuga, neque inventore repellendus consectetur, consequatur
            corporis libero quae cumque ullam autem et aliquam odio! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Neque quo
            molestiae cupiditate atque consectetur perspiciatis deserunt
            commodi! Nesciunt, quaerat illo dolore molestiae saepe, sit
            tempore veniam officiis odio pariatur aspernatur. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Illo suscipit
            excepturi velit quaerat dolor cupiditate amet, cumque officia
            ipsum assumenda dolores eaque quis. Exercitationem facere
            cupiditate est corporis minus laborum?
          </p>
        </div>
        <div className="w-full  border md:m-0 md:inline-flex lg:h-fit lg:flex-1 xl:hidden">
          <OwnerCard className='' User={User} />
        </div>
      </div>
    </div>
  )
}
const modality = {
  sale: 'venta',
  rental: 'alquiler',
}
const type = {
  apartment: 'departamento',
  house: 'casa',
  ph: 'PH',
  ranch: 'finca',
}

