import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserInfo } from "../../redux/actions/index";

export default function EditUser() {
  const { user } = useSelector((state) => state);
  const [newUser, setNewUser] = useState({
    userName: user.userName,
    email: user.email,
    photo: user.photo,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(newUser);
  }, [newUser]);

  function onUserChange(e) {
    if (e.target.value.length) {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <div className="flex h-[87] flex-col items-center">
      <p className="self-right">Editar usuario</p>
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img className="w-full rounded-full" src={user?.photo || "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"} alt="" />
      </div>
      <div>
        <label
          for="first_name"
          className="block m-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre de Usuario
        </label>
        <input
          type="text"
          name="userName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={user?.userName || "Sin User Name"}
          value={user.userName}
          onChange={onUserChange}
        />

      </div>
      <div>
      <label
          for="first_name"
          className="block m-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={user?.email}
          value={user.email}
          onChange={onUserChange}
        />
      </div>
      <div>
      <label
          for="first_name"
          className="block m-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Foto
        </label>
        <input
          type="text"
          name="photo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={user?.photo}
          value={user.photo}
          onChange={onUserChange}
        />

      </div>
        <button className="m-2 p-2 border rounded-sm hover:rounded-lg" onClick={() => dispatch(loadUserInfo)}>actualizar</button>
    </div>
  );
}
