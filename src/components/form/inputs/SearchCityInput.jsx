import { useSelector } from 'react-redux'
import { Input } from './Input'
import { useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'

export function SearchCityInput() {
  const { cities } = useSelector((state) => state.city)
  const [city, setCity] = useState({
    idCity: 0,
    string: '',
  })
  const [suggestions, setSuggestions] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const SIZE_RENDER = 10

  const shortSugestions = suggestions.slice(0, SIZE_RENDER)
  function handleCity(evt) {
    const { value } = evt.target

    let matches = []
    if (value.length > 0) {
      matches = cities.filter((city) => {
        const patternCity = removeAccents(city.string)
        const patternValue = removeAccents(value)
        const regexp = new RegExp(`${patternValue}`, 'gi')
        return patternCity.match(regexp)
      })
    }
    setSuggestions(matches)
    setCity((prev) => ({
      ...prev,
      string: value,
    }))
    setCurrentIndex(-1)
  }

  function handleKeyDown({ code, target }) {
    if (code === 'ArrowDown') {
      setCurrentIndex((prev) => Math.min(prev + 1, shortSugestions.length - 1))
    } else if (code === 'ArrowUp') {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    } else if (code === 'Enter') {
      const suggestion = shortSugestions[currentIndex]
      if (!suggestion) return
      setCity(suggestion)
      setSuggestions([])
    } else if (code === 'Backspace') {
      if (!target.value) return
      setCity((prev) => ({
        ...prev,
        idCity: 0,
        name: '',
        province: '',
      }))
    }
  }

  return (
    <div className="relative my-2 max-w-[400px]">
      <Input
        className="h-8 px-1 text-[1rem]"
        value={city?.string}
        onChange={handleCity}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 300)}
        onKeyDown={handleKeyDown}
      />
      {showResults && shortSugestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white p-1">
          {suggestions &&
            shortSugestions.map((suggestion, i) => (
              <li
                key={i}
                onClick={() => {
                  setSuggestions([])
                  setCity(suggestion)
                }}
                className={`flex cursor-pointer justify-between px-1 ${
                  currentIndex === i && 'rounded bg-indigo-200 font-medium'
                }`}
                onMouseEnter={() => setCurrentIndex(i)}
                onMouseLeave={() => setCurrentIndex(-1)}
              >
                <p className="m-0 flex flex-col py-1">
                  <span className="">{suggestion.name}</span>
                  <span className="-mt-2 text-sm text-gray-700">
                    {suggestion.province}
                  </span>
                </p>
                {currentIndex === i && (
                  <MapPinIcon className="h-auto w-6 stroke-gray-500" />
                )}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f,]/g, '')
}
