import {useState} from "react";
import {useSelector} from "react-redux"
import FormCheckbox from "../../components/form-checkbox/FormCheckbox.jsx";
import FormInputNumber from "../../components/form-input-number/FormInputNumber.jsx";

export default function Form() {
  const {cities} = useSelector(state => state);
  const inputsNumber = [
    {value: "floors", inputName: "Pisos"},
    {value: "enviroments", inputName: "Ambientes"},
    {value: "rooms", inputName: "Habitaciones"},
    {value: "bathrooms", inputName: "Baños"},
    {value: "garage", inputName: "Cochera"},
    {value: "area", inputName: "Area de la propiedad en M²"},
    {value: "antiquity", inputName: "Antiguedad en años"}
  ];
  const services = [
    {service: "Luz", serviceValue: "ligth"},
    {service: "Agua", serviceValue: "water"},
    {service: "Gas", serviceValue: "gas"},
    {service: "Cloaca", serviceValue: "sewer"},
    {service: "Wi-fi", serviceValue: "Wi-fi"},
    {service: "Cable", serviceValue: "tv"},
    {service: "Telefono", serviceValue: "telephone"},
  ]

  const [data, setData] = useState({
    modality: null,
    type: null,
    city: null,
    adress: null,
    images: null,
  })

  return (
    <form>
      
      <label htmlFor="modality">Operacion </label>
      <select name="modality">
        <option value="Venta">Venta</option>
        <option value="Alquiler">Alquiler</option>
      </select>
      <br/>

      <label htmlFor="type">Tipo de propiedad </label>
      <select name="type">
        <option value="Casa">Casa</option>
        <option value="Departamento">Departamento</option>
        <option value="PH">PH</option>
        <option value="Finca">Finca</option>
      </select>
      <br/>
      
      <label htmlFor="city">Ciudad </label>
      <select name="city">
        {cities && cities.length && cities.map(c => <option value={c.id}>{`${c.city}, ${c.provincia}`}</option>)}
      </select>
      <br/>

      <label htmlFor="adress">Direccion </label>
      <input type="text" name="adress"/>
      <input type="number" name="adress-number" placeholder="numero..."/>
      <br />

      <label htmlFor="images">Imagen de la propiedad </label>
      <input type="text" name="images" placeholder="ingrese link de la img..."/>
      <br />



      <p>A continuacion ingrese la cantidad en cada campo segun su propiedad</p>
      <br />
      {inputsNumber.map(i => <FormInputNumber value={i.value} inputName={i.inputName}/>)}
      <br />

      <p>Servicios</p>
      {services.map(s => <FormCheckbox service={s.service} serviceValue={s.serviceName}/>)}
      
      <br />
      <input type="submit"/>
    </form>
  )
}