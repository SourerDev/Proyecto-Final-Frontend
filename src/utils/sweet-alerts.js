import Swal from 'sweetalert2'

function Toast({ position = 'bottom-right', timer = 3000 }) {
  return Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })
}
export const Alerts = {
  smallSuccess: ({ text }) => {
    const toast = Toast({ position: 'top-right' })

    return toast.fire({
      icon: 'success',
      title: text,
    })
  },
  smallWarning: ({ text }) => {
    const toast = Toast({ position: 'bottom', timer: 4000 })

    return toast.fire({
      icon: 'warning',
      title: text,
    })
  },
  smallError: ({ text }) => {
    const toast = Toast({ position: 'top' })

    return toast.fire({
      icon: 'error',
      title: text,
    })
  },
  soon: ({ text }) => {
    const toast = Toast({ position: 'top-right' })
    return toast.fire({
      title: text || 'Próximamente',
      icon: 'info',
    })
  },
  confirmation: ({
    title = '¿Estas Seguro?',
    icon = 'warning',
    text = 'Esta accion es irreversible',
    confirmButtonText = 'Confirmar',
  }) => {
    return Swal.fire({
      title,
      icon,
      text,
      showCancelButton: true,
      cancelButtonText: 'Cancelar !',
      confirmButtonText,
      customClass: {
        confirmButton:
          'px-3 py-2 mx-2 text-white min-w-[150px]  bg-green-600 hover:bg-green-700 font-medium rounded border-2 border-transparent hover:border-green-200',
        cancelButton:
          'px-3 py-2 mx-2 text-white min-w-[150px] bg-red-600 hover:bg-red-700 font-medium rounded border-2 border-transparent hover:border-red-200',
      },
      reverseButtons: true,
      buttonsStyling: false,
    })
  },
  completePayment: () => {
    return Swal.fire({
      title: 'Complete el pago',
      text: 'porfavor complete el pago en la pestaña emergente para continuar',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'volver al inicio',
      cancelButtonText: '',
      reverseButtons: false,
    })
  },
  errorConection: ({ text = '' }) => {
    return Swal.fire({
      toast: true,
      showConfirmButton: false,
      position: 'bottom-left',
      icon: 'error',
      title: text?.length > 20 ? text?.slice(0, 18) + '...' : text,
      buttonsStyling: false,
      showCloseButton: true,
    })
  },
  alertWhitInput: ({ title, preConfirm }) => {
    return Swal.fire({
      title,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Cargar',
      showLoaderOnConfirm: true,
      preConfirm,
      allowOutsideClick: () => !Swal.isLoading(),
    })
  },
}
