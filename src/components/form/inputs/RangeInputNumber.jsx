import { useEffect, useState } from 'react'

export function RangeInputNumber({
  min,
  max,
  name,
  inputName,
  handleRangeNumbers,
}) {
  const [values, setValues] = useState({
    min: '',
    max: '',
  })

  function handleChange({ target }) {
    setValues({ ...values, [target.name]: target.value })
    handleRangeNumbers(inputName, { ...values, [target.name]: target.value })
  }

  return (
    <div>
      <p>{name}</p>
      <input
        type="number"
        name="min"
        placeholder={min}
        min={min}
        max={max}
        onChange={handleChange}
      />
      <input
        type="number"
        name="max"
        placeholder={max}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </div>
  )
}
