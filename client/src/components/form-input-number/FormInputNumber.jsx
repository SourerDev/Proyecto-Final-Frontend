export default function FormInputNumber({handleChange, value, inputName, err}) {
  return (
    <div>
      <label htmlFor={value}>{`${inputName}`} </label>
      <input type="number" name={value} onChange={(e) => handleChange(e)}/>
      {err && <p>{err}</p>}
    </div>
  )
}