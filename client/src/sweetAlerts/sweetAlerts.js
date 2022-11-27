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

const mustBePremium = () => {
  return {

  }
}

const createdProperty = () => {
  return {
    
  }
}