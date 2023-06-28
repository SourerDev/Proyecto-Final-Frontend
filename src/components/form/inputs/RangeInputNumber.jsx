import { useEffect, useState } from 'react'

export function RangeInputNumber({
  min,
  max,
  name,
  inputName,
  handleRangeNumbers,
  className,
}) {
  const [values, setValues] = useState({
    min: '',
    max: '',
  })

  function handleChange({ target }) {
    setValues({ ...values, [target.name]: target.value })
    handleRangeNumbers(inputName, { ...values, [target.name]: target.value })
  }
  //justify-start gap-1
  return (
    <div
      className={`w-2/3 rounded-md border-[1px] border-gray-800 text-gray-800 ${className}`}
    >
      <p className="mx-auto my-0 mt-1 w-fit ">{name}</p>
      <div className=" flex justify-between p-3 gap-2">
        <div className=" flex justify-between h-fit w-fit border-2 border-gray-400 rounded-sm p-1">
          <p>min</p>
          <input
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
        <div className="flex justify-between h-fit w-fit border-2 border-gray-400 rounded-sm p-1">
          <p>max</p>
          <input
            className='w-1/2 focus:outline-none'
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
