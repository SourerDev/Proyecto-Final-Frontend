import React from "react";
import "material-icons/iconfont/material-icons.css";
import { useDispatch, useSelector } from "react-redux"; // import useSelec
import { Link } from "react-router-dom";
import Tooltip from "./OwnerData.jsx";
const Dashboard = ({ data }) => {
  const dispatch = useDispatch();

  const handleEditProperty = (e) => {
    // dispatch()
    console.log("aca se edita la propiedad");
  };

  const handleDeleteProperty = (e) => {
    // dispatch()
    console.log("Aca se elimina la propiedad");
  };

  return (
    <>
      <tr class="bg-gray-800">
        <td class="p-3">
          <div class="flex align-items-center">
            <img
              class="rounded-full h-12 w-12  object-cover"
              src={data.images[0]}
              alt="unsplash image"
            />
            <td class="p-3 font-bold">{data.address}</td>
            {/* <div class="ml-3">
              <div class="text-gray-500">{data.User.userName}</div>
              <div class="">{data.User.email}</div>
            </div> */}
          </div>
        </td>
        <td class="p-3">
          <span class="bg-green-400 text-gray-50 rounded-md px-2">
            {data.state_modality}
          </span>
        </td>
        <td class="p-3">
          <div class="flex align-items-center">
            <Link
              to={`/ownerData/${data.User.id_User}`}
              className="text-base font-medium text-gray-500 hover:text-gray-900 self-center mr-[10px]"
            >
              <img
                class="rounded-full h-12 w-12  object-cover"
                src={data.User.photo}
                alt="Property image"
              />
            </Link>
            <div class="flex flex-col gap-[8px]">
              <td class="font-bold">{data.User.userName}</td>
              <td class="font-bold">{data.User.email}</td>
              <td class="font-bold">{data.User.cellphone}</td>
            </div>
          </div>
        </td>
        <td class="p-3 ">
          <a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
            <button onClick={(e) => handleDeleteProperty(e)}>
              <i class="material-icons-round">remove_circle</i>
            </button>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
            <button onClick={(e) => handleDeleteProperty(e)}>
              <i class="material-icons-round text-base">delete_outline</i>
            </button>
          </a>
        </td>{" "}
      </tr>
    </>
  );
};

export default Dashboard;
