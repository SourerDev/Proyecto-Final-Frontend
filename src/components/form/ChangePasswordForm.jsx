import PropTypes from 'prop-types'
import { PasswordInput } from './inputs/PasswordInput'
import { Button } from './buttons/Button'
import { useState } from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { Alerts, isValidPassword } from '../../utils'
import { ApiPropYou } from '../../services'
export function ChangePasswordForm({ idUser }) {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])

  function onSubmit(evt) {
    evt.preventDefault()
    if (!password.length)
      return Alerts.smallError({ text: 'Ingresa la contraseña actual' })
    if (!newPassword.length)
      return Alerts.smallError({ text: 'Ingresa la nueva contraseña' })
    if (errors.length)
      return Alerts.smallError({
        text: 'Ingresa una nueva contraseña correcta',
      })
    if (!confirmPassword.length)
      return Alerts.smallError({ text: 'Confirma la nueva contraseña' })
    if (newPassword !== confirmPassword)
      return Alerts.smallError({ text: 'Las contraseñas no coinciden' })
    if (password === newPassword)
      return Alerts.smallError({ text: 'Ingresa otra contraseña' })

    ApiPropYou.SetNewPassword({ idUser, password, newPassword })
      .then((response) => {
        Alerts.smallSuccess({ text: 'Tu contraseña se ha cambiado' })
        setPassword('')
        setNewPassword('')
        setConfirmPassword('')
        setErrors([])
      })
      .catch((error) => {
        console.log(error)
        Alerts.smallError({ text: `Upss - ${error.message}` })
      })
  }

  return (
    <form className="border p-3">
      <h2 className="mt-2 mb-1 text-xl font-semibold text-gray-900">
        Cambiar Contraseña
      </h2>
      <div className="mb-4">
        <p className="text-base font-medium text-gray-400">Contraseña actual</p>
        <PasswordInput
          placeholder="Contraseña Actual"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="mb-4">
        <p className="text-base font-medium text-gray-400">Contraseña nueva</p>
        <PasswordInput
          className=""
          placeholder="Contraseña nueva"
          value={newPassword}
          onChange={({ target }) => {
            setErrors(isValidPassword({ password: target.value }))
            setNewPassword(target.value)
          }}
        />
        {errors.length && newPassword.length ? (
          errors.map((error, i) => (
            <MessageInput key={i} correct={false} message={error} />
          ))
        ) : newPassword.length ? (
          <MessageInput correct={true} message="Tu contraseña es segura" />
        ) : null}
        <PasswordInput
          className="mt-2"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        {confirmPassword.length ? (
          <MessageInput
            correct={newPassword === confirmPassword}
            message="Las contraseñas coinciden"
          />
        ) : null}
      </div>
      <Button onClick={onSubmit}>Cambiar</Button>
    </form>
  )
}

export function MessageInput({ correct, message = 'message is required' }) {
  return (
    <p
      className={`flex gap-2  pt-2 pb-1 ${
        correct ? 'text-green-600' : 'text-red-600'
      }`}
    >
      {correct ? (
        <CheckCircleIcon className="aspect-square w-5" />
      ) : (
        <ExclamationCircleIcon className="aspect-square w-5" />
      )}
      <span>{message}</span>
    </p>
  )
}

MessageInput.propTypes = {
  correct: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
}
