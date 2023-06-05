import PropTypes from 'prop-types'
import { SearchCityInput } from './inputs/SearchCityInput'
import { useEffect, useState } from 'react'
import { ModalitySelect } from './selects/ModalitySelect'
import { PropertyTypeSelect } from './selects/PropertyTypeSelect'
import { Button } from './buttons/Button'
import { actionsApp } from '../../redux2.0/reducers'
import { useDispatch, useSelector } from 'react-redux'

export function InitialFiltersCard({ className }) {
  const dispatch = useDispatch()
  const { byPublication, byProperty, byCity } = useSelector(
    (state) => state.app.filters
  )
  const [initialFilters, setInitialFilters] = useState({
    ...byPublication,
    ...byProperty,
  })
  const [city, setCity] = useState(byCity)
  function handleInitialFilters({ target }) {
    setInitialFilters((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }
  function onSubmitFilters(evt) {
    evt.preventDefault()
    dispatch(
      actionsApp.setFilters({
        byPublication: {
          modality: initialFilters.modality,
        },
        byProperty: {
          type: initialFilters.type,
        },
        byCity: city,
      })
    )
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
      <Button type="onSubmit">Filtrar</Button>
    </form>
  )
}

//
InitialFiltersCard.propTypes = {
  className: PropTypes.string,
}
