export function isValidSingUp(data) {
  let errs = {}
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      data.email
    )
  )
    errs.email = 'email no valido'
  //if(!data.userName.length) errs.userName = 'ingrese el nombre de su usuario'
  //if(!/^[A-Za-z0-9]*$/.test(data.userName)) errs.userName = "Coloque usuario sin espacios";
  if (!data.fName.length) errs.fName = 'ingrese el nombre de su usuario'
  if (!data.lName.length) errs.lName = 'ingrese el nombre de su usuario'
  if (data.cellphone.length < 10) errs.cellphone = 'Falta numeros'
  if (data.cellphone.length > 10) errs.cellphone = 'Sobran numeros'
  if (data.password.length < 8)
    errs.password = 'debe tener al menos 8 caracteres'
  if (data.password !== data.password2)
    errs.password = 'las contraseñas no coinciden'
  return errs
}

export function isValidPassword({ password }) {
  const errors = []
  if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password))
    errors.push('Debe tener caracteres en minuscula y mayuscula')
  if (!/[\W_]/.test(password))
    errors.push('Debe tener al menos un caracter especial')
  if (!/\d/.test(password)) errors.push('Debe tener al menos un numero')
  if (password.length < 8) errors.push('Debe tener al menos 8 caracteres')

  return errors
}

export function isValidNameUser({ string }) {
  let error = ''
  if (!/^(?! )[A-Za-z ]*(?<! )$/.test(string)) error = 'Carater no valido'

  return error
}

export function isValidString({ string }) {
  let error = ''
  if (string && !/^[a-zA-Z0-9_]+$/.test(string)) error = 'Carater no valido'

  return error
}
export function isValidPhoneNumber({ number }) {
  let error = ''
  if (number && !/^\+\d{1,3}\s?\(\d{1,4}\)\s?\d{1,4}[-\s]?\d{1,9}$/.test(number))
    error = 'Numero no valido'

  return error
}

export function isValidUser(user) {
  /* let errs = {}
    if(!user.email.length) errs.email = "debe ingresar un nuevo email o dejar el actual"
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.email)) errs.email = "ingrese un email valido";
    if(!user.userName.length) errs.userName = 'ingrese un nombre de usuario';
    if(!user.cellphone.length === 10 ) errs.cellphone = "Falta numero";
    return errs */
}

export function isValidForm(data, allAdress) {
  let errs = {}

  if (!data.modality.length) errs.modality = 'seleccione un tipo de operacion'
  if (!data.type.length) errs.type = 'seleccione un tipo de propiedad'
  if (!data.idCity) {
    errs.idCity = 'seleccione la ciudad donde se encuentra la propiedad'
  }

  if (!data.adressName.length) errs.adressName = 'ingrese la direccion'
  else if (!/^[A-Za-z\s]*$/.test(data.adressName))
    errs.adressName = 'solo puede contener letras'
  if (!data.adressNumber.length)
    errs.adressNumber = 'ingrese el numero de la dirección'
  else if (data.adressNumber.length > 5)
    errs.adressNumber = 'el numero es muy largo'
  /* if(allAdress.includes(`${data.adressName} ${data.adressNumber}`)) errs.adressName = 'la direccion ya esta asociada a una propiedad'; */

  if (!data.floors.length) errs.floors = 'ingrese la cantidad de pisos'
  else if (parseInt(data.floors) < 1)
    errs.floors = 'debe disponer de almenos un piso'
  else if (parseInt(data.floors) > 54) errs.floors = 'supera el limite de pisos'

  if (!data.enviroments.length)
    errs.enviroments = 'ingrese la cantidad de ambientes'
  else if (parseInt(data.enviroments) < 1)
    errs.enviroments = 'debe disponer de almenos un ambiente'
  else if (parseInt(data.enviroments) > 40)
    errs.enviroments = 'supera el limite de ambientes'

  if (!data.bathrooms.length) errs.bathrooms = 'ingrese la cantidad de baños'
  else if (parseInt(data.bathrooms) < 1)
    errs.bathrooms = 'debe disponer de al menos un baño'
  else if (parseInt(data.bathrooms) > 20)
    errs.bathrooms = 'supera el limite de baños'

  if (!data.rooms.length) errs.rooms = 'ingrese la cantidad de habitaciones'
  else if (parseInt(data.rooms) < 1)
    errs.rooms = 'debe tener al menos una habitacion'
  else if (parseInt(data.rooms) > 40)
    errs.rooms = 'supera el limite de habitaciones'

  if (!data.garage.length) errs.garage = 'ingrese la cantidad de cocheras'
  else if (parseInt(data.garage) > 5)
    errs.garage = 'supera el limite de cocheras'

  if (!data.area.length)
    errs.area = 'ingrese el area de la propiedad (metros cuadrados)'
  else if (parseInt(data.area) < 10)
    errs.area = 'debe disponer como minimo 10M²'
  else if (parseInt(data.area) > 5000)
    errs.area = 'supera los limites de area en M²'

  if (!data.antiquity.length) errs.antiquity = 'ingrese la antiguedad en años'
  else if (parseInt(data.antiquity) < 0)
    errs.antiquity = 'ingrese una cantidad de años valida'
  else if (parseInt(data.antiquity) > 100)
    errs.antiquity = 'la propiedad es muy antigua'

  if (!data.description.length) errs.description = 'escriba una descripcion'
  else if (data.description.length < 5)
    errs.description = 'descripcion muy corta'

  if (!data.price.length) errs.price = 'ingrese un precio'

  return errs
}
