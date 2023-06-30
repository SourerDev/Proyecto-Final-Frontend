import PropTypes from 'prop-types'

export function Select({
  className,
  selectName,
  selectedOption,
  options = [],
  ...props
}) {
  return (
    <select
      {...props}
      name={selectName}
      className={`min-w-[200px] rounded p-2 outline-none ${className}`}
    >
      {options.map((option) =>
        option.value === selectedOption && selectedOption.length ? (
          <option selected key={option.value} value={option.value}>
            {option.name}
          </option>
        ) : (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )
      )}
    </select>
  )
}
Select.propTypes = {
  className: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}
