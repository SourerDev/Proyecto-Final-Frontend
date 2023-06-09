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
export function InitialFiltersCard({ className }) {
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
    ApiPropYou.getFilteredPublications(dataFilters).then((res) => {
      dispatch(actionsPublications.setFilteredPublications(res.data))
      navigate('/home')
    })
  }

  return (
    <form
      className={`flex gap-x-2 bg-gray-500/50 p-4 ${className}`}
      action=""
      onSubmit={onSubmitFilters}
    >
      <ModalitySelect
        name="modality"
        onChange={handleInitialFilters}
        value={initialFilters.modality}
      />
      <PropertyTypeSelect
        name="type"
        onChange={handleInitialFilters}
        value={initialFilters.type}
      />
      <SearchCityInput city={city} setCity={setCity} />
      {filterButton ? (
        <Button type="onSubmit">Filtrar</Button>
      ) : (
        <Button onClick={() => navigate('/home')}>ver propiedades</Button>
      )}
    </form>
  )
}

//
InitialFiltersCard.propTypes = {
  className: PropTypes.string,
}
