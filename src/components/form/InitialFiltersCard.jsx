import PropTypes from 'prop-types'
import { SearchCityInput } from './inputs/SearchCityInput'
import { useState } from 'react'
import { ModalitySelect } from './selects/ModalitySelect'
import { PropertyTypeSelect } from './selects/PropertyTypeSelect'
import { Button } from './buttons/Button'

export function InitialFiltersCard({ className }) {
  const [initialFilters, setInitialFilters] = useState({
    modality: '',
    type: '',
  })
  const [city, setCity] = useState({
    idCity: 0,
    string: '',
  })
  function handleInitialFilters({ target }) {
    setInitialFilters((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }
  function onSubmitFilters(evt) {
    evt.preventDefault()
  }
  return (
    <>
      <form
        className={`flex gap-x-2 p-4 ${className}`}
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
    </>
  )
}

//
InitialFiltersCard.propTypes = {
  className: PropTypes.string,
}
