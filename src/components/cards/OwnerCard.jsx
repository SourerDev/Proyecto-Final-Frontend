import { useState } from "react";
import { Avatar } from "../avatars/Avatar";
import { Button } from "../form/buttons/Button";
import { TextArea } from "../form/text-areas/TextArea";
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export function OwnerCard({ User }) {
  return (
    <Card className="max-w-[500px]">
      <div className="flex items-center gap-x-4">
        <Avatar
          avatar={User.photo}
          name={`${User.fName} ${User.lName}`}
          active={User.active}
        />
        <p className="flex flex-col -ml-2">
          <span className="text-lg font-bold">{`${User.fName} ${User.lName}`}</span>
          <span className="text-gray-600">@{User.userName}</span>
        </p>
        <p className="border flex-grow">** No stars **</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className=" flex gap-x-2 items-center">
          <EnvelopeIcon
            title={User.email}
            className="w-6 h-auto stroke-gray-800"
          />{" "}
          <span>{User.email}</span>
        </p>
        <p className=" flex gap-x-2 items-center">
          <DevicePhoneMobileIcon
            title={User.cellphone}
            className="w-6 h-auto stroke-gray-800"
          />{" "}
          <span>{User.cellphone || "+ 57 3123122626"}</span>
        </p>
      </div>
      <CardMessage />
    </Card>
  );
}

function Card({ className, children }) {
  return (
    <div
      className={`min-w-[50px] h-auto border px-4 py-2 bg-white ${className}`}
    >
      {children}
    </div>
  );
}

function CardMessage() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-y-2">
      <TextArea
        placeholder="Message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>Contactar</Button>
    </div>
  );
}
