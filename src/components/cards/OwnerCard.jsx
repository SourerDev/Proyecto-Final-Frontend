import PropTypes from 'prop-types'
import { useState } from 'react'
import { Avatar } from '../avatars/Avatar'
import { Button } from '../form/buttons/Button'
import { TextArea } from '../form/text-areas/TextArea'
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

export function OwnerCard({ User }) {
  return (
    <Card className="max-w-[500px]">
      <div className="flex items-center gap-x-4">
        <Avatar
          avatar={User.photo}
          ame={`${User.fName} ${User.lName}`}
          active={User.active}
        />
        <p className="-ml-2 flex flex-col">
          <span className="text-lg font-bold">{`${User.fName} ${User.lName}`}</span>
          <span className="text-gray-600">@{User.userName}</span>
        </p>
        <p className="flex-grow border">** No stars **</p>
      </div>
      <div className="mb-4 flex justify-between">
        <p className=" flex items-center gap-x-2">
          <EnvelopeIcon
            title={User.email}
            className="h-auto w-6 stroke-gray-800"
          />{' '}
          <span>{User.email}</span>
        </p>
        <p className=" flex items-center gap-x-2">
          <DevicePhoneMobileIcon
            title={User.cellphone}
            className="h-auto w-6 stroke-gray-800"
          />{' '}
          <span>{User.cellphone || '+ 57 3123122626'}</span>
        </p>
      </div>
      <CardMessage />
    </Card>
  )
}

function Card({ className, children }) {
  return (
    <div
      className={`h-auto min-w-[50px] border bg-white px-4 py-2 ${className}`}
    >
      {children}
    </div>
  )
}

function CardMessage() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-y-2">
      <TextArea
        placeholder="Message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>Contactar</Button>
    </div>
  )
}

//
OwnerCard.propTypes = {
  User: PropTypes.object,
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
