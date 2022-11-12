import {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import FormCheckbox from "../../components/form-checkbox/FormCheckbox.jsx";
import FormInputNumber from "../../components/form-input-number/FormInputNumber.jsx";
import {postPorperty} from '../../redux/actions/index'

export default function Form() {
  const dispatch = useDispatch();
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
  const inputServices = [
    {inputName: "Luz", value: "ligth"},
    {inputName: "Agua", value: "water"},
    {inputName: "Gas", value: "gas"},
    {inputName: "Cloaca", value: "sewer"},
    {inputName: "Wifi", value: "Wifi"},
    {inputName: "Cable", value: "tv"},
    {inputName: "Telefono", value: "telephone"},
  ]

  const [data, setData] = useState({
    modality: "",
    type: "",
    city: "123",
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
  
  function isValidForm(data, allAdress) {
    let errs = {}

    if(!data.modality.length) errs.modality = 'seleccione un tipo de operacion';
    if(!data.type.length) errs.type = 'seleccione un tipo de propiedad';
    if(!data.city.length) errs.city = 'seleccione la ciudad donde se encuentra la propiedad';

    if(!data.adressName.length) errs.adressName = 'ingrese la direccion';
    else if(!/^[A-Za-z\s]*$/.test(data.adressName)) errs.adressName = 'solo puede contener letras';
    if(!data.adressNumber.length) errs.adressNumber = 'ingrese el numero de la dirección';
    else if (data.adressNumber.length > 5) errs.adressNumber = 'el numero es muy largo';
    /* if(allAdress.includes(`${data.adressName} ${data.adressNumber}`)) errs.adressName = 'la direccion ya esta asociada a una propiedad'; */

    if(!data.images.length) errs.images = 'ingrese link a una imagen';
    
    if(!data.floors.length) errs.floors = 'ingrese la cantidad de pisos';
    else if(parseInt(data.floors) < 1) errs.floors = 'debe disponer de almenos un piso';
    else if(parseInt(data.floors) > 54) errs.floors = 'supera el limite de pisos';

    if(!data.enviroments.length) errs.enviroments = 'ingrese la cantidad de ambientes';
    else if(parseInt(data.enviroments) < 1) errs.enviroments = 'debe disponer de almenos un ambiente';
    else if(parseInt(data.enviroments) > 40) errs.enviroments = 'supera el limite de ambientes';

    if(!data.bathrooms.length) errs.bathrooms = 'ingrese la cantidad de baños';
    else if(parseInt(data.bathrooms) < 1) errs.bathrooms = 'debe disponer de al menos un baño';
    else if(parseInt(data.bathrooms) > 20) errs.bathrooms = 'supera el limite de baños';

    if(!data.rooms.length) errs.rooms = 'ingrese la cantidad de habitaciones';
    else if(parseInt(data.rooms) < 1) errs.rooms = 'debe tener al menos una habitacion';
    else if(parseInt(data.rooms) > 40) errs.rooms = 'supera el limite de habitaciones';

    if(!data.garage.length) errs.garage = 'ingrese la cantidad de cocheras';
    else if(parseInt(data.garage) > 5) errs.garage = 'supera el limite de cocheras';

    if(!data.area.length) errs.area = 'ingrese el area de la propiedad (metros cuadrados)';
    else if(parseInt(data.area) < 10) errs.area = 'debe disponer como minimo 10M²';
    else if(parseInt(data.area) > 5000) errs.area = 'supera los limites de area en M²';

    if(!data.antiquity.length) errs.antiquity = 'ingrese la antiguedad en años';
    else if(parseInt(data.antiquity) < 0) errs.antiquity = 'ingrese una cantidad de años valida';
    else if(parseInt(data.antiquity) > 100) errs.antiquity = 'la propiedad es muy antigua';

    if(!data.description.length) errs.description = 'escriba una descripcion';
    else if (data.description.length < 5) errs.description = 'descripcion muy corta';

    if(!data.price.length) errs.price = "ingrese un precio";

    return errs
  }

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
          {cities.length && cities.map(c => <option value={c.idCity}>{`${c.city}, ${c.provincia}`}</option>)}
        </select>
        {errs.city && <p>{errs.city}</p>}
        <br/>

        <label htmlFor="adress">Direccion </label>
        <input type="text" name="adressName" onChange={(e) => handleChange(e)}/>
        {errs.adressName && <p>{errs.adressName}</p>}
        <input type="number" name="adressNumber" onChange={(e) => handleChange(e)} placeholder="numero..."/>
        {errs.adressNumber && <p>{errs.adressNumber}</p>}
        <br />

        <label htmlFor="images">Imagen de la propiedad </label>
        <input type="text" name="images" onChange={(e) => handleChange(e)} placeholder="ingrese link de la img..."/>
        {errs.images && <p>{errs.images}</p>}
        <br />



        <p>A continuacion ingrese la cantidad en cada campo segun su propiedad</p>
        <br />
        {inputsNumber.map(i => 
              <FormInputNumber 
                handleChange={handleChange} 
                value={i.value} 
                inputName={i.inputName}
                err={errs[i.value]}
              />
          )}
        <br />

        <p>Servicios</p>
        {inputServices.map(s => 
          <FormCheckbox 
            handleChange={handleServices}
            value={s.value} 
            inputName={s.inputName}
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