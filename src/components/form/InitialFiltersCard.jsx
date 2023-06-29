import PropTypes from 'prop-types'
import { SearchCityInput } from './inputs/SearchCityInput'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalitySelect } from './selects/ModalitySelect'
import { PropertyTypeSelect } from './selects/PropertyTypeSelect'
import { Button } from './buttons/Button'
import { actionsApp, actionsPublications } from '../../redux2.0/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { ApiPropYou } from '../../services'
import { Alerts } from '../../utils'
export function InitialFiltersCard({ className, scrollY }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { byPublication, byProperty, byCity } = useSelector(
    (state) => state.app.filters
  )
  const [initialFilters, setInitialFilters] = useState({
    ...byPublication,
    ...byProperty,
  })
  const [city, setCity] = useState(byCity)
  const [filterButton, setFilterButton] = useState(false)
  function handleInitialFilters({ target }) {
    setFilterButton(true)
    setInitialFilters((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }
  function onSubmitFilters(evt) {
    evt.preventDefault()
    const dataFilters = {
      byPublication: {
        modality: initialFilters.modality,
      },
      byProperty: {
        type: initialFilters.type,
      },
      byCity: city,
    }
    dispatch(actionsApp.setFilters(dataFilters))
    ApiPropYou.getFilteredPublications(dataFilters).then(({ data }) => {
      dispatch(actionsPublications.setPublications(data.publications))
      if (data?.info.error) Alerts.smallError({ text: `${data.info.error}` })
      navigate('/home')
    })
  }

  return (
    <form
      className={`grid grid-cols-4 gap-2 rounded bg-gray-500/50 p-2 backdrop-blur-sm lg:grid-cols-6 xl:grid-cols-10 ${className}`}
      action=""
      onSubmit={onSubmitFilters}
    >
      <ModalitySelect
        className="col-start-1 col-end-3"
        name="modality"
        onChange={handleInitialFilters}
        value={initialFilters.modality}
      />
      <PropertyTypeSelect
        className="col-start-3 col-end-5 xl:col-end-6"
        name="type"
        onChange={handleInitialFilters}
        value={initialFilters.type}
      />
      <SearchCityInput
        city={city}
        setCity={setCity}
        scrollY={scrollY}
        setFilterButton={setFilterButton}
      />
      {filterButton ? (
        <Button
          className="col-start-2 col-end-4 lg:col-start-3 lg:col-end-5 lg:mx-4 xl:lg:col-end-11 xl:col-start-9"
          type="onSubmit"
        >
          Filtrar
        </Button>
      ) : (
        <Button
          className="col-start-2 col-end-4 lg:col-start-3 lg:col-end-5 lg:mx-2 xl:lg:col-end-11 xl:col-start-9"
          onClick={() => navigate('/home')}
        >
          ver propiedades
        </Button>
      )}
    </form>
  )
}

//
InitialFiltersCard.propTypes = {
  className: PropTypes.string,
}
