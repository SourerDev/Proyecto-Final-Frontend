export default function FormInputNumber({handleChange, value, inputName, err}) {
  return (
    <div>
      <label className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-base italic font-semibold text-center text-gray-600 dark:text-white" htmlFor={value}>{`${inputName}`} </label>
     <div className="px-40"> <input type="number" className="sm:text-center 
        form-control block w-full  px-3 py-1.5 text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-30  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "  name={value} onChange={(e) => handleChange(e)}/>
     </div> {err && <p className=" text-center mt-2 text-sm text-red-600 dark:text-red-500">{err}</p>}
    </div>
  )
}