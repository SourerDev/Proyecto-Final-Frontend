export default function FormCheckbox({ handleChange, value, inputName }) {
  return (
    <div className="flex justify-center  p-1 ">
      <div>
        {' '}
        <label
          className="  ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor={value}
        >
          {inputName}{' '}
        </label>
      </div>
      <div>
        {' '}
        <input
          className=" m-2   h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 md:grid-cols-3"
          type="checkbox"
          name={value}
          onChange={(e) => handleChange(e)}
        />
      </div>{' '}
    </div>
  )
}
