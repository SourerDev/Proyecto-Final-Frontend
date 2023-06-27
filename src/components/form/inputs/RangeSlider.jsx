import React, { useEffect, useState } from 'react'

export function RangeSlider({ min, max, name, inputName, handleFilters, className }) {
  const [value, setValue] = useState(max / 2)

  const handleChange = (e) => {
    setValue(e.target.value)
    handleFilters(e)
  }

  return (
    <div className={`border-2 border-black w-1/2 ${className}`}>
      <p>{name}</p>
      <input
        name={inputName}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="h-2 w-full appearance-none rounded-full bg-gray-200"
      />
      <div className="mt-2 flex justify-between">
        <span>{min}</span>
        <p className="mt-2">{`${value}`}</p>
        <span>{max}</span>
      </div>
    </div>
  )
}

{
  /* <div className="mx-auto w-64">
      <p>{name}</p>
      <input
        name={inputName}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="h-2 w-full appearance-none rounded-full bg-gray-200"
      />
      <div className="mt-2 flex justify-between">
        <span>{min}</span>
        <p className="mt-2">{`${value}`}</p>
        <span>{max}</span>
      </div>
    </div> */
}
