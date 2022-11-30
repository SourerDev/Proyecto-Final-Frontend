import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserInfo } from "../../redux/actions/index";
import { isValidUser } from "../../utils/isValidUser";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import swal from 'sweetalert2'
import {actualisar} from "../../sweetAlerts/sweetAlerts"
import { Link } from "react-router-dom";

export default function EditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
const axu = <Link to="/home"></Link>
  const { user } = useSelector((state) => state);
  console.log(user)
  const [newUser, setNewUser] = useState({
    userName: user.userName,
    email: user.email,
    photo: user.photo,
    cellphone: user.cellphone
  });
  const [errs, setErrs] = useState({})

  useEffect(() => {
    console.log(newUser);
    console.log(errs)
  }, [newUser, errs]);

  function onUserChange(e) {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
      });
      setErrs(isValidUser({
        ...newUser,
        [e.target.name]: e.target.value,
      }))
  }

  return (
    <div className="flex justify-center flex-col items-center h-[40rem] sm:h-[43rem] lg:[4rem] bg-sky-200">
      

      
     
      <p className="self-right text-2xl">Editar usuario</p>
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img className="w-full rounded-full" src={newUser.photo || "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"} alt="" />
      </div>
      <div className="flex justify-center flex-col ">

        
        <label
          for="userName"
          className="block m-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre de Usuario
        </label>
        <input
          type="text"
          name="userName"
          className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={user?.userName || "sin nombre de usuario"}
          value={newUser.userName}
          onChange={(e) => onUserChange(e)}
        />
       
      </div>
       {errs.userName && <p className="text-red-600 dark:text-red-500">{errs.userName}</p>}
       <div>
      <label
          for="email"
          className="block m-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Telefono
        </label>
        <input
          type="numer"
          name="cellphone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={user?.cellphone}
          value={newUser.cellphone}
          onChange={(e) => onUserChange(e)}
        />
        {errs.cellphone && <p className="text-red-600 dark:text-red-500">{errs.cellphone}</p>}
      </div>
      <div>
      <label
          for="email"
          className="block m-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
      
          type="text"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={user?.email}
          value={newUser.email}
          onChange={(e) => onUserChange(e)}
        />
        {errs.email && <p className="text-red-600 dark:text-red-500">{errs.email}</p>}
      </div>
      <div>
      <label
          for="photo"
          className="block m-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Foto
        </label>
        <input
          type="text"
          name="photo"
          className="bg-gray-50 border mb-4  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={"se le asignara un avatar por defecto"}
          value={newUser.photo}
          onChange={(e) => onUserChange(e)}
        />

      </div>
      <div className="">

      
       <Link to="/home"> <button  
          disabled={Object.values(errs).length ? true : false} 
          className="hover:bg-gradient-to-br px-4 py-3  text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" 
          onClick={() => {
            dispatch(loadUserInfo({
              ...user,
              ...newUser,
              photo: newUser.photo.length ? newUser.photo : "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
            }))
            swal.fire(actualisar(axu))
            // setDisabled(true)
            axios.put(`http://localhost:3001/users/edit/${user.id_User}`, {
              ...user,
              ...newUser,
              photo: newUser.photo.length ? newUser.photo : "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
            })
            //navigate("/")
          }}>actualizar</button></Link>
          </div>

          
          <button onClick={()=>{
              navigate('/createProperty')
          }}>
            Create Property
          </button>
    </div>
  );
}
