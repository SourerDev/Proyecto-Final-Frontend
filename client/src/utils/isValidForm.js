export function isValidForm(data, allAdress) {
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
