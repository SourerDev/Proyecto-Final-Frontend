import React from "react";
import { getallProperties } from "../../redux/actions/index.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // import useSelec
import Dashboard from "./Dashboard.jsx";
import swal from "sweetalert2";
import {areYouSure,
areYouSureDisabled,
} from "../../sweetAlerts/sweetAlerts.js";
import callsApi from "../../services/index.js";
import { data } from "autoprefixer";

const ContentDashboard = () => {
  const { user } = useSelector((state) => state);
  const [propertiesRender, setPropertiesRender] = useState([]);
  const [reset, setReset] = useState(false)

  let fuser = {
    state: "Desactivado",
    id_User: "073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29",
    photo:
      "https://res.cloudinary.com/dtzesfyt1/image/upload/v1668008325/robot-image_xrpox8.png",
    userName: "hermes",
    password: "$2b$10$PkXCPmCniHbIrbuhBHTCN.ahiU4X2s84Hvmc07HV6MeNSQaszyWja",
    user_auth_0: false,
    rating: "1",
    user_type: "userPremiun",
    email: "pfgrupo05@gmail.com",
    cellphone: "55555",
  };


  const handleDisabledProperty = (text1,text2,id,state) => {
    swal.fire(areYouSureDisabled(text1, text2)).then((res) => {
      if (res.isConfirmed) {
        console.log(id,state);
         callsApi
          .disabledProperty(id,state)
          .then((res) => {
            console.log(res);
            swal.fire(
              text2 === "Bloquear" ? "Bloqueada!" : "Desbloqueada",
              text2 === "Bloquear"
                ? "Propiedad Bloqueada Correctamente."
                : "Propiedad Desbloqueada Correctamente.",
              "success"
            );
            setReset(reset ? false : true)
          })
          .catch((err) => {
            swal.fire("Algo salio mal", `${err.message}`, "error");
          }); 
      }
    });
  };



  const handleDeleteProperty = (id) => {
    swal.fire(areYouSure(" esta propiedad")).then((res) => {
      if (res.isConfirmed) {
        callsApi
          .deletePropery(id)
          .then((res) => {
            swal.fire("Borrado!", "Tu propiedad ha sido Borrada.", "success");
            setReset(reset ? false : true)
          })
          .catch((err) => {
            console.log(err);
            swal.fire("Algo salio mal", `${err.message}`, "error");
          });
      }
    });
  };

  useEffect(() => {
    callsApi.getProperties().then((res)=>{
      const {payload} = res.data
      if (user.user_type === "userPremiun") {
        let filterData = payload.filter(
          (p) => p.User.email === user.email
        );
        setPropertiesRender(filterData);
      }else if(user?.user_type === "admin"){
        setPropertiesRender(payload)
      }
    })
  }, [reset]);

  return (
    <>
      <div class="flex p-1 justify-center min-h-full w-full ">
        <div class="w-full">
          <table class="w-full text-white border-separate space-y-6 text-sm ">
            <thead class="bg-gray-800 text-white-500">
              <tr className="bg-indigo-600">
                <th class="p-3 text-center text-lg font-semibold">
                  Propiedades
                </th>
                <th class="p-3 text-center text-lg font-semibold">
                  Disponible
                </th>
                
                {user.user_type === "admin" && (<th class="p-3 text-center text-lg font-semibold">
                  Propietario
                </th>)}
                <th className="">
                  Estado
                </th>
                <th class="p-3 text-center text-lg font-semibold">
                  {false && "Editar / "}Bloquear / Borrar
                </th>
              </tr>
            </thead>
            <tbody>
              {!propertiesRender.length ? (
                <tr><th>No hay propiedades</th></tr>
              ) : (
                propertiesRender.map((el) => <Dashboard key={el.id} data={el} owner={user.user_type === "admin"?true:false} deleted={handleDeleteProperty} disabled={handleDisabledProperty} reset={()=>{}}/>)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContentDashboard;
