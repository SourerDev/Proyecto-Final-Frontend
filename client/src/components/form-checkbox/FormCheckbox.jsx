export default function FormCheckbox({handleChange, value, inputName}) {
  return (
    <div className="flex justify-center" >
     <div> <label  className = "  py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={value}>{inputName} </label></div>
   <div>   <input  className="   md:grid-cols-3 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" name={value} onChange={(e) => handleChange(e)}/>
  </div>  </div>
  )
}