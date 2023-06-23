import React, { useState } from 'react'

const RangeSlider = () => {
  const [value, setValue] = useState(50)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="mx-auto w-64">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="h-2 w-full appearance-none rounded-full bg-gray-200"
      />
      <div className="mt-2 flex justify-between">
        <span>0</span>
        <span>100</span>
      </div>
      <div className="mt-2">Selected value: {value}</div>
    </div>
  )
}

export default RangeSlider
