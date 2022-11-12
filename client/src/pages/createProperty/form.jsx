import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {redirect} from "react-router-dom";
import FormCheckbox from "../../components/form-checkbox/FormCheckbox.jsx";
import FormInputNumber from "../../components/form-input-number/FormInputNumber.jsx";
import {postPorperty} from '../../redux/actions/index';
import {isValidForm} from "../../utils/isValidForm.js";
import {inputNumber, inputServices} from "../../utils/formInputs.js";

export default function Form() {
  const dispatch = useDispatch();
  const {cities} = useSelector(state => state);
  const [data, setData] = useState({
    modality: "",
    type: "",
    city: "",
    adressName: "",
    adressNumber: "",
    images: "",
    floors: "",
    enviroments: "",
    bathrooms: "",
    rooms: "",
    garage: "",
    area: "",
    antiquity: "",
    description:"",
    observation: "",
    price: "",
  });
  const [services, setServices] = useState({})
  const [errs, setErrs] = useState({});
  
  function handleChange(event) {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
    setErrs(isValidForm({
      ...data,
      [event.target.name] : event.target.value
    }))
  }

  function handleServices(event) {
    setServices({
      ...services,
      [event.target.name]: event.target.checked
    })
  }

  return (
    <div>
      <h4>Rellene el siguiente formulario para publicar su propiedad</h4>
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(postPorperty(data, services))
        }}
      >
        
        <select name="modality" onChange={(e) => handleChange(e)}>
          <option value="">Operación </option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
        </select>
        {errs.modality && <p>{errs.modality}</p>}
        <br/>

        
        <select name="type" onChange={(e) => handleChange(e)}>
          <option value="">Tipo de propiedad </option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="PH">PH</option>
          <option value="Finca">Finca</option>
        </select>
        {errs.type && <p>{errs.type}</p>}
        <br/>
        
        <select name="city" onChange={(e) => handleChange(e)}>
          <option value="">Ciudad/Localidad donde se encuentra su propiedad</option>
          {cities.length && cities.map(c => <option value={c.idCity} key={c.idCity}>{`${c.city}, ${c.provincia}`}</option>)}
        </select>
        {errs.city && <p>{errs.city}</p>}
        <br/>

        <label htmlFor="adress">Direccion </label>
        <input type="text" name="adressName" onChange={(e) => handleChange(e)}/>
        {errs.adressName && <p>{errs.adressName}</p>}
        <input type="number" name="adressNumber" onChange={(e) => handleChange(e)} placeholder="numero..."/>
        {errs.adressNumber && <p>{errs.adressNumber}</p>}
        {data.type === "Departamento" &&
          <>
          <label htmlFor="dptoNumber">nmro de piso</label>
          <input type="text" name="dptoNumber" placeholder="e.j tercero B" onChange={(e) => handleChange(e)}/>
          </> 
        }
        <br />

        <label htmlFor="images">Imagen de la propiedad </label>
        <input type="text" name="images" onChange={(e) => handleChange(e)} placeholder="ingrese link de la img..."/>
        {errs.images && <p>{errs.images}</p>}
        <br />

        <p>A continuacion ingrese la cantidad en cada campo segun su propiedad</p>
        <br />
        {inputNumber.map(i => 
              <FormInputNumber 
                handleChange={handleChange} 
                value={i.value} 
                inputName={i.inputName}
                err={errs[i.value]}
                key={i.value}
              />
          )}
        <br />

        <p>Servicios</p>
        {inputServices.map(s => 
          <FormCheckbox 
            handleChange={handleServices}
            value={s.value} 
            inputName={s.inputName}
            key={s.value}
          />
        )}
        <br />

        <p>Escriba una breve descripcion de la propiedad </p>
        <input type="text" name="description" onChange={(e) => handleChange(e)}/>
        {errs.description && <p>{errs.description}</p>}
        <br />
        
        <p>Observaciones (opcional)</p>
        <input type="text" name="observation" onChange={(e) => handleChange(e)}/>
        <br />
        
        <p>{`Por ultimo ingrese ${data.modality === 'Venta' ? 'presouesto' : 'precio mensual'} de la propiedad (en ARS)`}</p>
        <input type="number" name="price" onChange={(e) => handleChange(e)}/>
        {errs.price && <p>{errs.price}</p>}
        <br />

        <input 
          type="submit" 
          disabled={Object.keys(errs).length || !data.modality.length ? true : false}
        />
        
      </form>
    </div>
  )
}