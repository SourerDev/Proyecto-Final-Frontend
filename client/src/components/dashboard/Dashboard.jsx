import React from "react";
import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";

const Dashboard = ({ data, owner,deleted, disabled }) => {
  
  return (
    <>
      <tr class="bg-gray-800">
        <td class="p-3">
          <Link to={`/detail/${data.id}`}>
            <div class="flex align-items-center">
              <img
                class="rounded-full h-12 w-12  object-cover"
                src={data.images[0]}
                alt="unsplash image"
              />
              <td class="p-3 text-lg font-semibold">{data.address}</td>
            </div>
          </Link>
        </td>
        <td class="p-3 text-center">
          <span class="bg-green-400 text-white rounded-md px-2">
            {data.state_modality}
          </span>
        </td>
        {owner && (
          <td class="p-3">
            <div class="flex align-items-center">
              <Link
                to={`/ownerData/${data.User.id_User}`}
                className="text-base font-medium text-white hover:text-gray-900 self-center mr-[10px]"
              >
                <img
                  class="rounded-full h-12 w-12  object-cover"
                  src={data.User.photo}
                  alt="Property image"
                />
              </Link>
              <div class="flex flex-col gap-[8px]">
                <td class="text-lg font-semibold">{data.User.userName}</td>
                <td class="font-bold m-0 p-0">{data.User.email}</td>
                <td class="font-bold p-0 m-0">
                  {"cel: " + data.User.cellphone}
                </td>
                <a href="#" class="text-white hover:text-gray-100 ml-2">
                  {/* <button onClick={(e) => handleDeleteUser(e)}>
                <i class="material-icons-round text-base">delete_outline</i>
              </button> */}
                </a>
              </div>
            </div>
          </td>
        )}
        <td className="p-1 text-center">
          <span
            className={`rounded-md px-2 ${
              data.state === "Activado"
                ? "bg-green-400 text-white"
                : "bg-red-400 text-red-700"
            }`}
          >
            {data.state}
          </span>
        </td>
        <td class="p-3 text-center">
          <a  className={`ml-2 ${data?.state === "Activado" ?"text-gray-400 hover:text-gray-100":"text-red-500 hover:text-red-400"}`} title={data.state === "Activado" ?"Bloquear":"Desbloquear"}>
            <button onClick={()=>{disabled(data?.state === "Activado" ? "bloquear esta propiedad":" desbloquear esta propiedad" ,data?.state === "Activado"? "Bloquear":"Desbloquear",data.id,data?.state === "Activado"?false:true)}}>
              <i class="material-icons-round">remove_circle</i>
            </button>
          </a>
          <a  class="text-white hover:text-gray-100  ml-2" >
            <button onClick={(e) => {deleted(data.id)}}>
              <i class="material-icons-round text-base">delete_outline</i>
            </button>
          </a>
        </td>{" "}
      </tr>
    </>
  );
};

export default Dashboard;
