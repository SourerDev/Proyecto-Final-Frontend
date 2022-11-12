export default function FormCheckbox({handleChange, value, inputName}) {
  return (
    <div>
      <label htmlFor={value}>{inputName} </label>
      <input type="checkbox" name={value} onChange={(e) => handleChange(e)}/>
    </div>
  )
}