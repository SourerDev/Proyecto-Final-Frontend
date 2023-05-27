import Swal from 'sweetalert2'
import {
  areYouSure,
  areYouSureDisabled,
} from '../../sweetAlerts/sweetAlerts.js'
import callsApi from '../../services/index.js'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DashboardUsers = () => {
  const { user_type } = useSelector((state) => state.user)
  const [users, setUsers] = useState([])
  const [reset, setReset] = useState(false)

  const handleDisabledUser = (text1, text2, idUser, state) => {
    Swal.fire(areYouSureDisabled(text1, text2)).then((res) => {
      if (res.isConfirmed) {
        callsApi
          .disabledUser(idUser, state)
          .then((res) => {
            Swal.fire(
              text2 === 'Bloquear' ? 'Bloqueado!' : 'Desbloqueado',
              text2 === 'Bloquear'
                ? 'Usuario Bloqueado Correctamente.'
                : 'Usuario Desbloqueado Correctamente.',
              'success'
            )
            setReset(reset ? false : true)
          })
          .catch((err) => {
            Swal.fire('Algo salio mal', `${err.message}`, 'error')
          })
      }
    })
  }

  const handleDeleteUser = (idUser) => {
    Swal.fire(areYouSure(' este usuario')).then((res) => {
      if (res.isConfirmed) {
        callsApi
          .deleteUser(idUser)
          .then((res) => {
            Swal.fire('Borrado!', 'Usuario Borrado Correctamente.', 'success')
            setReset(reset ? false : true)
          })
          .catch((err) => {
            Swal.fire('Algo salio mal', `${err.message}`, 'error')
          })
      }
    })
  }

  useEffect(() => {
    if (user_type !== 'admin') {
      return
    } else {
      callsApi.getAllUsers().then((res) => setUsers(res.data.payload))
    }
  }, [reset])

  return (
    <div className=" m-2 flex flex-col justify-center">
      <table className="w-full text-white">
        <HeaderTable />
        <tbody className="w-full">
          {users?.map((ele, i) => (
            <RowTable
              key={i}
              field={ele}
              disabledUser={handleDisabledUser}
              deleteUser={handleDeleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const RowTable = ({ field, disabledUser, deleteUser }) => {
  return (
    <tr className="bg-gray-800 shadow shadow-white">
      <td className="w-16 p-2">
        <div className="relative w-14  px-1">
          <img className="w-full rounded-full" src={field?.photo} alt="" />
          <span
            className={classNames(
              `absolute  right-1 bottom-0 h-3 w-3 rounded-full ${
                field?.state === 'Activado' ? 'bg-green-500' : 'bg-red-500'
              }`
            )}
          ></span>
        </div>
      </td>
      <td className="border-r-2 p-2">
        <h1 className="text-lg font-semibold">{field?.userName}</h1>
        <p>{field?.email}</p>
      </td>
      <td className="border-r-2 p-2 text-center">
        {(field?.user_type === 'userNotLogged' ||
          field?.user_type === 'userLogged') && (
          <span className="rounded-md bg-yellow-900/50 px-2 py-1 text-sm text-yellow-100">
            Normal
          </span>
        )}
        {field?.user_type === 'userPremiun' && (
          <span className="rounded-md bg-yellow-300 px-2 py-1 text-sm text-yellow-900">
            Premium
          </span>
        )}
        {field?.user_type === 'admin' && (
          <span className="rounded-md bg-fuchsia-400 px-2 py-1 text-sm text-fuchsia-800">
            Administrador
          </span>
        )}
      </td>
      <td className="border-r-2 p-2 text-center">
        <p>{field?.cellphone}</p>
      </td>
      <td className="w-30 p-2 text-center">
        <a
          className={classNames(
            `ml-2 ${
              field?.state === 'Activado'
                ? 'text-gray-400 hover:text-gray-100'
                : 'text-red-500 hover:text-red-400'
            }`
          )}
          title={field.state === 'Activado' ? 'Bloquear' : 'Desbloquear'}
        >
          <button
            onClick={() => {
              disabledUser(
                field?.state === 'Activado'
                  ? 'bloquear este usuario'
                  : ' desbloquear este usuario',
                field?.state === 'Activado' ? 'Bloquear' : 'Desbloquear',
                field?.id_User,
                field?.state === 'Activado' ? false : true
              )
            }}
          >
            <i className="material-icons-round">remove_circle</i>
          </button>
        </a>
        <a className="ml-2 text-gray-400  hover:text-gray-100 " title="Borrar">
          <button
            onClick={() => {
              deleteUser(field.id_User)
            }}
          >
            <i className="material-icons-round text-base">delete_outline</i>
          </button>
        </a>
      </td>
    </tr>
  )
}

export const HeaderTable = ({
  names = ['', 'Usuario / Correo', 'Tipo', 'Celular', 'Bloquear / Borrar'],
}) => {
  return (
    <thead className="text-white-500 w-full bg-gray-800">
      <tr className="bg-indigo-600">
        {names.map((header, i) => (
          <th className="p-3" key={i}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default DashboardUsers

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
