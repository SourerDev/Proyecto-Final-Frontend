export default function FormInputNumber({
  handleChange,
  value,
  inputName,
  err,
}) {
  return (
    <div>
      <label
        className=" block text-center text-sm text-base font-medium font-semibold italic text-slate-700 text-gray-600 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
        htmlFor={value}
      >
        {`${inputName}`}{' '}
      </label>
      <div className="px-40">
        {' '}
        <input
          type="number"
          className="form-control border-gray-30 m-0 block  w-full rounded border  border-solid  bg-white  bg-clip-padding px-3  py-1.5 text-base font-normal  text-gray-700  transition  ease-in-out  focus:border-blue-600  focus:bg-white focus:text-gray-700 focus:outline-none sm:text-center "
          name={value}
          onChange={(e) => handleChange(e)}
        />
      </div>{' '}
      {err && (
        <p className=" mt-2 text-center text-sm text-red-600 dark:text-red-500">
          {err}
        </p>
      )}
    </div>
  )
}
