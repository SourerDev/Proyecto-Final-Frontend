export default function FormInputNumber({value, inputName}) {
  return (
    <div>
      <label htmlFor={inputName}>{`${value}`} </label>
      <input type="number" name={inputName}/>
    </div>
  )
}