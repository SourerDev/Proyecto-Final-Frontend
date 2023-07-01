import PropTypes from 'prop-types'

export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
    ${className}`}
    />
  )
}

export function InputWithErrorMessage({
  id,
  label,
  value,
  name,
  type = 'text',
  placehoder,
}) {
  return (
    <div className="border">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        name={name}
        type="text"
        placeholder={placehoder}
      />
      <p>HOla</p>
    </div>
  )
}

InputWithErrorMessage.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}
