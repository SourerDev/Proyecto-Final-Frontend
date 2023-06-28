import React, { useEffect, useState } from 'react'

export function RangeSlider({ min, max, name, inputName, handleFilters, className }) {
  const [value, setValue] = useState(max / 2)

  const handleChange = (e) => {
    setValue(e.target.value)
    handleFilters(e)
  }

  return (
    <div className={`text-gray-800 border-[1px] border-gray-800 px-4 pt-1 rounded-md w-2/3 ${className}`}>
      <p className='my-0 mx-auto w-fit'>{name}</p>
      <input
        name={inputName}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="h-2 w-full appearance-none rounded-full bg-gray-200 active:bg-indigo-200 focus:outline-none"
      />
      <div className="mt-2 flex justify-between">
        <span className='text-gray-400'>{min}</span>
        <p className="mt-2">{`${value}`}</p>
        <span className='text-gray-400'>{max}</span>
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
