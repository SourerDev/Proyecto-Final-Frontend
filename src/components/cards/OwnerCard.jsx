import PropTypes from 'prop-types'
import { useState } from 'react'
import { Avatar } from '../avatars/Avatar'
import { Button } from '../form/buttons/Button'
import { TextArea } from '../form/text-areas/TextArea'
import { Card } from './Card'
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'
import { Alerts } from '../../utils'

export function OwnerCard({ User, className }) {
  return (
    <Card className="w-full">
      <div className="flex items-center gap-x-4 lg:gap-x-2 xl:gap-x-6">
        <Avatar
          className=" "
          avatar={User.photo}
          name={`${User.fName} ${User.lName}`}
          active={User.active}
        />
        <p className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-0
        lg:items-center  ">
          <span className="text-lg font-bold">{`${User.fName} ${User.lName}`}</span>
          <span className="text-gray-600">@{User.userName}</span>
        </p>
        <p className=" ml-6 flex items-center   md:ml-auto md:mr-10 lg:mr-0 lg:w-[42%] lg:p-0">
          <DevicePhoneMobileIcon
            title={User.cellphone}
            className="h-auto w-6 stroke-gray-800"
          />{' '}
          <span className=''>{User.cellphone || '+57 3123122626'}</span>
        </p>
        {
          //considerar si implementaremos un sitema real de valoracion con estrellas
          /* <p className="flex-grow border">** No stars **</p> */
        }
      </div>
      <div className="my-2 flex justify-between">
        <p className=" flex items-center gap-x-2">
          <EnvelopeIcon
            title={User.email}
            className="h-auto w-6 stroke-gray-800"
          />{' '}
          <span>{User.email}</span>
        </p>
      </div>
      <CardMessage />
    </Card>
  )
}

function CardMessage() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-y-2">
      <TextArea
        className="rounded-sm border border-gray-800 p-2"
        placeholder="Mensaje"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className="my-0 mx-auto w-fit"
        onClick={() => Alerts.soon({ text: 'Pronto podras contactar' })}
      >
        Contactar
      </Button>
    </div>
  )
}

//
OwnerCard.propTypes = {
  User: PropTypes.object,
}
