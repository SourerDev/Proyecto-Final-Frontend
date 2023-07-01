import {
  CheckCircleIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

export function UpdateEmailForm({ email, verified }) {

  return (
    <form className="relative border p-3">
      {!verified && (
        <ExclamationCircleIcon className="absolute right-2 top-2 h-5 w-5 stroke-red-600" />
      )}
      <h2 className="mt-2 mb-1 text-xl font-semibold text-gray-900">
        Verificar Cuenta
      </h2>
      <div className="flex items-center justify-between">
        <p className='flex items-center justify-start gap-x-2'>
          <EnvelopeIcon className="aspect-square h-6 w-6 stroke-slate-800" />
          <span className="text-lg font-[300]">{`${email}`}</span>
        </p>
        {verified ? (
          <CheckCircleIcon className="h-5 w-5 stroke-green-500" />
        ) : (
          <button className='text-indigo-700 hover:underline hover:text-indigo-900'>Verificar</button>
        )}
      </div>
    </form>
  )
}

UpdateEmailForm.propTypes = {
  email: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
}
