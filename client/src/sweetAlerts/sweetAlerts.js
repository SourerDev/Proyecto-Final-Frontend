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
    title:`Pago exitoso`,
    text: `ya eres usuario premium`,
    icon: 'success',
    showCancelButton: true,
    confirmButtonText: 'inciar sesión',
    cancelButtonText: 'seguir mirando',
    reverseButtons: true
  }
}