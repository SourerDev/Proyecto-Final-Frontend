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
}
