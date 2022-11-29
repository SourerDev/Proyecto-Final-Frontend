import Swal from 'sweetalert2'


export const alert = (confirm , cancel)=>{
    const alerta = Swal.mixin({
        customClass: {
          confirmButton: confirm,
          cancelButton: cancel
        },
        buttonsStyling: false
      })

     return alerta 
}

export const mustBeLogged = (title,text) => {
  return {
    title: `${title}`,
    text: `${text}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'inciar sesión',
    cancelButtonText: 'seguir mirando',
    reverseButtons: true
  }
}

export const completePayment = () => {
  return {
    title: `Complete el pago`,
    text: `porfavor complete el pago en la ventana emergente`,
    icon: 'warning',
    showCancelButton: false,
    confirmButtonText: 'volver al inicio',
    cancelButtonText: '',
    reverseButtons: false
  }
}

/* export const payment = (status) => {
  return {
    title: status === "aprove" ? `Pago exitoso` : "Pago denegado",
    text: status === "aprove"  ?`ya eres usuario premium` : "ocurrio un problema al procesar el pago",
    icon: status === "aprove" ? 'success' : "error",
    showCancelButton: true,
    confirmButtonText: 'inciar sesión',
    cancelButtonText: 'seguir mirando',
    reverseButtons: true
  }
} */

export const paymentOk = (status) => {
  return {
    title:`Pago exitoso!`,
    text: `Ya eres usuario premium.`,
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Finalizar',
    reverseButtons: true
  }
}

export const paymentError = (status) => {
  return {
    title:`Lo Sentimos!`,
    text: `No se pudo procesar el pago.`,
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'Reintentar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }
}

export const noProperties = () => {
  return {
    title:`Lo Sentimos!`,
    text: `No se encontraron propiedades.`,
    icon: 'question',
    showCancelButton: false,
    confirmButtonText: 'Ok',
    cancelButtonText: '',
    reverseButtons: true
  }
}

export const property = () => {
  return {
    title:`Lo Sentimos!`,
    text: `No se encontraron propiedades.`,
    icon: 'question',
    showCancelButton: false,
    confirmButtonText: 'Ok',
    cancelButtonText: '',
    reverseButtons: true
  }
}

export const createPropertyAlert = () => {
  return {
    title:`Propiedad publicada`,
    text: `se cargo la informacion de su propiedad con exito.`,
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'continuar',
    cancelButtonText: '',
    reverseButtons: true
  }
}

export const successContact = () => {
  return {
    title:`Contacto exitoso`,
    text: `se le informo al publicador su interes sobre la propiedad, pronto se comunicara con usted.`,
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Ok',
    cancelButtonText: '',
    reverseButtons: true
  }
}
export const areYouSure = (title) => {
  return {
    title: `Estas seguro de que quieres eliminar ${title}`,
    text: "Los cambios seran irreversibles",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Borrar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }
}
export const areYouSureDisabled = (text1,text2) => {
  return {
    title:`¿Quieres ${text1}?`,
    text: ``,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: `${text2}`,
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }
}
