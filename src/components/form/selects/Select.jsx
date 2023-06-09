import PropTypes from 'prop-types'

export function Select({ className, selectName, options = [], ...props }) {
  return (
    <select
      {...props}
      className={`rounded px-2 outline-none w-[200px] ${className}`}
    >
      <option value="" disabled hidden>
        {selectName}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
Select.propTypes = {
  className: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}