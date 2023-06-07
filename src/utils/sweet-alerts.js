import Swal from 'sweetalert2'

function Toast({ position = 'bottom-right' }) {
  return Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })
}
export const Alerts = {
  success: ({ text }) => {
    return Swal.fire({
      title: 'Correcto',
      text,
      icon: 'success',
    })
  },
  warning: ({ text }) => {
    const toast = Toast({ position: 'top-right' })

    return toast.fire({
      icon: 'warning',
      title: text,
    })
  },
  soon: ({ text }) => {
    const toast = Toast({ position: 'top-right' })
    return toast.fire({
      title: 'Próximamente',
      icon: 'info',
      text,
    })
  },
}
