import { useEffect, useState } from 'react'

export function RangeInputNumber({
  defaultValue,
  min,
  max,
  name,
  inputName,
  handleRangeNumbers,
  className,
}) {
  const [values, setValues] = useState({
    min: defaultValue?.min ? defaultValue.min : '',
    max: defaultValue?.max ? defaultValue.max : '',
  })

  function handleChange({ target }) {
    setValues({ ...values, [target.name]: parseInt(target.value) })
    handleRangeNumbers(inputName, {
      ...values,
      [target.name]: parseInt(target.value),
    })
  }

  return (
    <div
      className={`w-2/3 rounded-md border-[1px] border-gray-800 text-gray-800 ${className}`}
    >
      <p className="mx-auto my-0 mt-1 w-fit ">{name}</p>
      <div className=" flex justify-between gap-2 p-3">
        <div className=" flex h-fit w-fit justify-between rounded-sm border-2 border-gray-400 p-1">
          <p>min</p>
          <input
            value={values.min}
            className="w-1/2 focus:outline-none"
            id="min"
            type="number"
            name="min"
            placeholder={min}
            min={min}
            max={max}
            onChange={handleChange}
          />
        </div>
        <div className="flex h-fit w-fit justify-between rounded-sm border-2 border-gray-400 p-1">
          <p>max</p>
          <input
            value={values.max}
            className="w-1/2 focus:outline-none"
            type="number"
            name="max"
            placeholder={max}
            min={min}
            max={max}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
