import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './buttons/Button'
import { Input } from './inputs/Input'
import {
  Alerts,
  isValidNameUser,
  isValidPhoneNumber,
  isValidString,
} from '../../utils'
import { ApiPropYou } from '../../services'
import { actionsUser } from '../../redux2.0/reducers'
import { MessageInput } from './ChangePasswordForm'

export function UpdateUserForm() {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [photo, setPhoto] = useState('')

  const [errors, setErrors] = useState({})
  const { session } = useSelector((state) => state.user)

  function onSubmit(evt) {
    evt.preventDefault()
    let user = {}

    if (photo) user['photo'] = photo
    if (userName) user['userName'] = userName
    if (cellphone) user['cellphone'] = cellphone
    if (email) user['email'] = email

    if (!user.photo && !user.userName && !user.cellphone) return

    for (const key in errors) {
      if (errors[key])
        return Alerts.smallError({ text: 'Entradas Incorrectas' })
    }

    ApiPropYou.updateUser({ idUser: session.idUser, data: user })
      .then(({ data }) => {
        dispatch(actionsUser.setUser(data.user))
        Alerts.smallSuccess({ text: 'Usuario Actualizado' })
      })
      .catch((err) => {
        Alerts.smallError({ text: `Upps - ${err.message}` })
      })
    setEdit(false)
    setPhoto('')
    setName('')
    setUserName('')
    setCellphone('')
    setEmail('')
  }

  function handleEditPhoto() {
    Alerts.alertWhitInput({
      title: 'Ingrese la URL de la imagen',
      preConfirm: (photo) => {
        setPhoto(photo)
      },
    })
  }

  function handleErrors({ name, value }) {
    setErrors((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <div className="mb-2 flex flex-col items-center justify-center p-3 md:mb-0">
      <picture className="relative mb-2 h-[10rem] w-[10rem]">
        <img
          className="overflow-hidden rounded-full"
          src={edit ? photo || session.photo : session.photo}
          alt={`@${session.userName}'s image`}
        />
        {edit && (
          <button
            onClick={handleEditPhoto}
            className="aspect-squares group absolute bottom-3 right-5 grid w-8 place-content-center rounded-xl bg-gray-50/50 p-1 hover:bg-black/50 hover:text-white"
          >
            <PencilIcon className="h-auto w-full" />
          </button>
        )}
      </picture>

      {!edit ? (
        <>
          <UserInfo
            name={`${session.fName} ${session.lName}`}
            username={session.userName}
            cellphone={session.cellphone}
            email={session.email}
          />
          <Button className="min-w-[150px]" onClick={() => setEdit(true)}>
            Editar
          </Button>
        </>
      ) : (
        <form onSubmit={onSubmit} className="space-y-2">
          <Input
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="h-10 px-2 text-[16px]"
            placeholder={`${session.fName} ${session.lName}`}
            disabled={true}
          />
          <Input
            value={userName}
            name="userName"
            onChange={({ target }) => {
              handleErrors({
                name: target.name,
                value: isValidString({ string: target.value }),
              })
              setUserName(target.value)
            }}
            className="h-10 px-2 text-[16px]"
            placeholder={session.userName}
          />
          {errors?.userName && (
            <MessageInput correct={false} message={errors.userName} />
          )}
          <Input
            value={cellphone}
            name="cellphone"
            onChange={({ target }) => {
              handleErrors({
                name: target.name,
                value: isValidPhoneNumber({ number: target.value }),
              })
              setCellphone(target.value)
            }}
            className="h-10 px-2 text-[16px]"
            placeholder={'+15 (123) 4567584'}
          />
          {errors?.cellphone && (
            <MessageInput correct={false} message={errors.cellphone} />
          )}
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="h-10 px-2 text-[16px]"
            placeholder={session.email}
            disabled={true}
          />
          <div className=" flex gap-x-2">
            <Button>Guardar</Button>
            <Button
              onClick={() => {
                setEdit(false)
                setPhoto('')
                setName('')
                setUserName('')
                setCellphone('')
                setEmail('')
              }}
            >
              Descartar
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

function UserInfo({ name, username, cellphone, email }) {
  return (
    <>
      <p className="flex flex-col text-left">
        <span className="text-2xl font-medium">{name}</span>
        <span className="-mt-2 text-gray-600">{'@' + username}</span>
      </p>
      <div className="my-4 w-full">
        <p className="flex items-center gap-x-2">
          <DevicePhoneMobileIcon className="aspect-square w-6" />
          <span> {`${cellphone || '+57 322 6215456'}`}</span>
        </p>
        <p className="flex items-center justify-start gap-x-2">
          <EnvelopeIcon className="aspect-square w-6" />
          <span>{email}</span>
        </p>
      </div>
    </>
  )
}
