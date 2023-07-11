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

export function OwnerCard({ User }) {
  return (
    <Card className="w-full">
      <div className="flex items-center gap-x-2 ">
        <Avatar
          avatar={User.photo}
          name={`${User.fName} ${User.lName}`}
          active={User.active}
        />
        <p className="flex flex-col ">
          <span className="text-lg font-bold">{`${User.fName} ${User.lName}`}</span>
          <span className="text-gray-600">@{User.userName}</span>
        </p>
        <p className=" flex items-center gap-x-1">
          <DevicePhoneMobileIcon
            title={User.cellphone}
            className="h-auto w-6 stroke-gray-800"
          />{' '}
          <span>{User.cellphone || '+ 57 3123122626'}</span>
        </p>
        {//considerar si implementaremos un sitema real de valoracion con estrellas
        /* <p className="flex-grow border">** No stars **</p> */}
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
        className='border border-gray-800 p-2 rounded-sm'
        placeholder="Mensaje"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className='w-fit my-0 mx-auto' onClick={() => Alerts.soon({ text: 'Pronto podras contactar' })}>
        Contactar
      </Button>
    </div>
  )
}

//
OwnerCard.propTypes = {
  User: PropTypes.object,
}
