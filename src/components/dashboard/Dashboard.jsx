import React from 'react'
import 'material-icons/iconfont/material-icons.css'
import { Link } from 'react-router-dom'
import { icons } from '../../images/'

const Dashboard = ({ data, owner, deleted, disabled }) => {
  const { Edit, Views, Question } = icons

  return (
    <>
      <tr className="bg-gray-800">
        <td className="p-3">
          <Link to={`/detail/${data.id}`}>
            <div className="align-items-center flex">
              <img
                className="h-12 w-12 rounded-full  object-cover"
                src={data.images[0]}
                alt="unsplash image"
              />
              <div className="p-3 text-lg font-semibold">
                <span>{data.address}</span>
                <span className="flex space-x-3">
                  <span
                    className="flex w-20 items-center justify-center rounded-lg bg-blue-500/70 px-1"
                    title={data.views}
                  >
                    <Views
                      height={'24'}
                      width="24"
                      fill="#a4a0a0"
                      hover="#fff"
                    />
                    <span className=" px-2 text-sm text-gray-400 hover:text-gray-100">
                      {data.views}
                    </span>
                  </span>
                  <span
                    className="flex w-20 items-center justify-center rounded-lg bg-blue-500/70 px-1 "
                    title={data?.Feedbacks?.length}
                  >
                    <Question
                      className={'mt-1'}
                      height="20"
                      width="20"
                      fill="#b1adad"
                      hover="#fff"
                    />
                    <span className=" px-2 text-sm text-gray-400 hover:text-gray-100">
                      {data?.Feedbacks?.length}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </td>
        <td className="p-3 text-center">
          <span className="rounded-md bg-green-400 px-2 text-white">
            {data.state_modality}
          </span>
        </td>
        {owner && (
          <td className="p-3">
            <div className="align-items-center flex">
              <Link
                to={`/ownerData/${data.User.id_User}`}
                className="mr-[10px] self-center text-base font-medium text-white hover:text-gray-900"
              >
                <img
                  className="h-12 w-12 rounded-full  object-cover"
                  src={data.User.photo}
                  alt="Property image"
                />
              </Link>
              <div className="flex flex-col gap-[8px]">
                <td className="text-lg font-semibold">{data.User.userName}</td>
                <td className="m-0 p-0 font-bold">{data.User.email}</td>
                <td className="m-0 p-0 font-bold">
                  {'cel: ' + data.User.cellphone}
                </td>
                <a className="ml-2 text-white hover:text-gray-100">
                  {/* <button onClick={(e) => handleDeleteUser(e)}>
                <i className="material-icons-round text-base">delete_outline</i>
              </button> */}
                </a>
              </div>
            </div>
          </td>
        )}
        <td className="p-1 text-center">
          <span
            className={`rounded-md px-2 ${
              data.state === 'Activado'
                ? 'bg-green-400 text-white'
                : 'bg-red-400 text-red-700'
            }`}
          >
            {data.state}
          </span>
        </td>
        <td className="p-3 text-center">
          {false && (
            <button className="ml-2 " onClick={() => {}}>
              <Edit width={'24'} height="24" fill={'#dbd6d6'} hover="#fff" />
            </button>
          )}
          <a
            className={`ml-2 ${
              data?.state === 'Activado'
                ? 'text-gray-400 hover:text-gray-100'
                : 'text-red-500 hover:text-red-400'
            }`}
            title={data.state === 'Activado' ? 'Bloquear' : 'Desbloquear'}
          >
            <button
              onClick={() => {
                disabled(
                  data?.state === 'Activado'
                    ? 'bloquear esta propiedad'
                    : ' desbloquear esta propiedad',
                  data?.state === 'Activado' ? 'Bloquear' : 'Desbloquear',
                  data.id,
                  data?.state === 'Activado' ? false : true
                )
              }}
            >
              <i className="material-icons-round">remove_circle</i>
            </button>
          </a>
          <a className="ml-2 text-white  hover:text-gray-100">
            <button
              onClick={(e) => {
                deleted(data.id)
              }}
            >
              <i className="material-icons-round text-base">delete_outline</i>
            </button>
          </a>
        </td>{' '}
      </tr>
    </>
  )
}

export default Dashboard
