export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
    ${className}`}
    />
  )
}
