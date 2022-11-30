import React from "react";
import "material-icons/iconfont/material-icons.css";
import { useDispatch, useSelector } from "react-redux"; // import useSelec
import { Link } from "react-router-dom";
import Tooltip from "./OwnerData.jsx";
import swal from "sweetalert2"
import { areYouSure } from "../../sweetAlerts/sweetAlerts.js";
import callsApi from "../../services/index.js";
import { useEffect } from "react";
import { getallProperties } from "../../redux/actions/index.js";

const Dashboard = ({ data }) => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    
  },[data])

  const handleEditProperty = (e) => {
    // dispatch()
    console.log("aca se edita la propiedad");
  };

  const handleDeleteProperty = (e) => {
    // dispatch()
    swal.fire(areYouSure(" esta propiedad")).then((res)=>{
      if(res.isConfirmed){
        callsApi.deletePropery(data.id).then(res=>{
          console.log(res.data)
          dispatch(getallProperties())
          swal.fire(
            'Borrado!',
            'Tu propiedad ha sido Borrada.',
            'success'
          )
        }).catch(err=>{
          console.log(err.message)
          swal.fire(
            'Algo salio mal',
            `${err.message}`,
            'error'
          )
        })
      }
    })
  };

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
              {/* <div class="ml-3">
                <div class="text-gray-500">{data.User.userName}</div>
                <div class="">{data.User.email}</div>
              </div> */}
            </div>
          </Link>
        </td>
        <td class="p-3 text-center">
          <span class="bg-green-400 text-white rounded-md px-2">
            {data.state_modality}
          </span>
        </td>
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
              <td class="font-bold p-0 m-0">{"cel: " + data.User.cellphone}</td>
              <a href="#" class="text-white hover:text-gray-100 ml-2">
              {/* <button onClick={(e) => handleDeleteUser(e)}>
                <i class="material-icons-round text-base">delete_outline</i>
              </button> */}
          </a>
            </div>
          </div>
        </td>
        <td class="p-3 text-center">
          <a href="#" class="text-white hover:text-gray-100  ml-2">
            <button onClick={(e) => handleDeleteProperty(e)}>
              <i class="material-icons-round">remove_circle</i>
            </button>
          </a>
          <a href="#" class="text-white hover:text-gray-100  ml-2">
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
