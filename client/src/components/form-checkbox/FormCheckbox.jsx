export default function FormCheckbox({service, serviceName}) {
  return (
    <div>
      <label htmlFor={`${serviceName}`}>{service}</label>
      <input type="checkbox" name={`${serviceName}`}/>
    </div>
  )
}