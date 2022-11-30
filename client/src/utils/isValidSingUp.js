export  function isValidSingUp(data) {
  let errs = {}
  if( !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)) errs.email = "email no valido"
  if(!data.userName.length) errs.userName = 'ingrese el nombre de su usuario'
  if(!/^[A-Za-z0-9]*$/.test(data.userName)) errs.userName = "Coloque usuario sin espacios";
  if(data.cellphone.length < 10 ) errs.cellphone = "Falta numeros";
  if( data.cellphone.length > 10) errs.cellphone = "Sobran numeros";
  if(data.password.length < 8) errs.password = "debe tener al menos 8 caracteres";
  if(data.password !== data.password2) errs.password = "las contraseñas no coinciden" 
  return errs
}