import { useState, useRef, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Select } from '../form/selects/Select'
import { SearchCityInput } from '../form/inputs/SearchCityInput'
import { RangeSlider } from '../form/inputs/RangeSlider'
import { RangeInputNumber } from '../form/inputs/RangeInputNumber'
import { actionsApp, actionsPublications } from '../../redux2.0/reducers'
import { ApiPropYou } from '../../services'
import { Alerts } from '../../utils'
import { XCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { LoaderIcon } from '../loaders/Loader'

export function AdvancedFilters({ scrollY }) {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { byPublication, byProperty, byCity } = useSelector(
    (state) => state.app.filters
  )

  const [city, setCity] = useState(byCity)

  const [dataFilters, setdataFilters] = useState({
    byPublication,
    byProperty,
  })

  useEffect(() => {
    setdataFilters({
      byPublication,
      byProperty,
    })
    setCity(byCity)
  }, [byPublication, byProperty, byCity])

  function handleFilters({ target }) {
    const strs = target.name.split('-')
    const nested = { ...dataFilters[strs[0]] }
    if (target.value === 'default') {
      nested[strs[1]] = ''
      setdataFilters({
        ...dataFilters,
        [strs[0]]: nested,
      })
    } else {
      nested[strs[1]] = target.value
      setdataFilters({
        ...dataFilters,
        [strs[0]]: nested,
      })
    }
  }

  function handleRangeNumbers(inputName, obj) {
    const strs = inputName.split('-')
    const nested = { ...dataFilters[strs[0]] }
    nested[strs[1]] = obj
    setdataFilters({
      ...dataFilters,
      [strs[0]]: nested,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    ApiPropYou.getFilteredPublications({ ...dataFilters, byCity: city }).then(
      ({ data }) => {
        console.log(data)
        dispatch(actionsApp.setFilters({ ...dataFilters, byCity: city }))
        dispatch(actionsPublications.setPublications(data.publications))
        if (data?.info.error) {
          Alerts.smallError({ text: `${data.info.error}` })
          dispatch(actionsApp.resetFilters())
        }
        setIsLoading(false)
      }
    )
  }

  return (
    <div>
      {isLoading && (
        <LoaderIcon className="fixed bottom-2 left-2 w-[40px] border-2 border-gray-600" />
      )}
      <Popover className="">
        <Popover.Button className="rounded-lg border-2 border-gray-800 p-2">
          Filtros avanzados
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="fixed right-0 left-0 top-0 z-50 h-screen w-full overflow-hidden  rounded-md scrollbar-thin sm:left-[10%] sm:w-[80%] sm:scrollbar-track-gray-700 md:left-[40%] md:w-[60%] lg:left-[60%] lg:w-[40%] xl:left-[67%] xl:w-[33%] 2xl:left-[70%] 2xl:w-[30%]">
            <form
              className="m-2 flex h-[110vh] flex-col items-center
               border-2 border-indigo-500 bg-white px-8 shadow-md shadow-gray-600"
              onSubmit={handleSubmit}
            >
              <div className="ml-5 mt-1  flex w-full justify-end">
                <Popover.Button>
                  <XCircleIcon className="w-12 stroke-gray-800 " />
                </Popover.Button>
              </div>
              <div className="flex h-5/6 w-full flex-col items-center justify-around  ">
                <Select
                  selectedOption={dataFilters.byPublication?.modality}
                  className="w-2/3 border-2 border-gray-400 focus:border-gray-800"
                  selectName="byPublication-modality"
                  options={modalityOpts}
                  onChange={handleFilters}
                />

                <Select
                  selectedOption={dataFilters.byProperty?.type}
                  className="w-2/3 border-2  border-gray-400 focus:border-gray-800"
                  selectName="byProperty-type"
                  options={typeOpts}
                  onChange={handleFilters}
                />

                <SearchCityInput
                  defaultValue={city.string}
                  className="w-2/3 border-2 border-gray-400"
                  city={city}
                  scrollY={scrollY}
                  setCity={setCity}
                  scrollIn={0}
                  setFilterButton={() => {}}
                />
                <RangeSlider
                  defaultValue={dataFilters.byProperty?.bedrooms}
                  min={1}
                  max={10}
                  name="Cuartos"
                  inputName="byProperty-bedrooms"
                  handleFilters={handleFilters}
                />
                <RangeSlider
                  defaultValue={dataFilters.byProperty?.bathrooms}
                  min={1}
                  max={10}
                  name="Baños"
                  inputName="byProperty-bathrooms"
                  handleFilters={handleFilters}
                />

                <RangeSlider
                  defaultValue={dataFilters.byProperty?.yearBuilt}
                  min={1}
                  max={10}
                  name="Construida a partir de"
                  inputName="byProperty-yearBuilt"
                  handleFilters={handleFilters}
                />

                <RangeInputNumber
                  defaultValue={byPublication.price}
                  min={10}
                  max={50}
                  name="Precio"
                  inputName="byPublication-price"
                  handleRangeNumbers={handleRangeNumbers}
                />
                <RangeInputNumber
                  defaultValue={byProperty.squareMeters}
                  min={200}
                  max={10000}
                  name="Area (en mts²)"
                  inputName="byProperty-squareMeters"
                  handleRangeNumbers={handleRangeNumbers}
                />
              </div>
              <div className="mt-4 flex w-full justify-between ">
                <button
                  onClick={() => {
                    dispatch(actionsApp.resetFilters())
                    ApiPropYou.getPublications().then(({ data }) => {
                      dispatch(
                        actionsPublications.setPublications(data.publications)
                      )
                      dispatch(actionsApp.resetFilters())
                    })
                  }}
                  type="button"
                  className="w-auto  rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base shadow-sm hover:bg-indigo-700"
                  title="Resetar filtros"
                >
                  <ArrowPathIcon className="w-[2rem]  text-white" />
                </button>
                <Popover.Button
                  className="w-auto  rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 "
                  type="submit"
                >
                  Aplicar filtros
                </Popover.Button>
              </div>
            </form>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
const modalityOpts = [
  { name: 'Operación', value: 'default' },
  { name: 'Comprar', value: 'sale' },
  { name: 'Alquilar', value: 'rental' },
]
const typeOpts = [
  { name: 'Tipo de propiedad', value: 'default' },
  { name: 'Casa', value: 'house' },
  { name: 'Ph', value: 'ph' },
  { name: 'Departamento', value: 'apartment' },
  { name: 'Quinta', value: 'ranch' },
]
