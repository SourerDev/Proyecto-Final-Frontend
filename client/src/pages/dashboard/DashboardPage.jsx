import { useState, useEffect } from "react";
import ContentDashboard from "../../components/dashboard/ContentDashboard.jsx";
import DashboardUsers from "../../components/dashboard/DashboardUsers.jsx";
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function DashboardPage() {
  const { user_type } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [dash, setDash] = useState("Propiedades");
  useEffect(() => {
    if (user_type !== "admin" && user_type !== "userPremiun") {
      navigate("/");
      Swal.fire("Acceso Denegado!", `No puedes utilizar la ruta`, "error");
    }
  }, []);

  return (
    <div>
      <div className="flex px-2 mt-2">
        <div>
          <button
            className={`p-2 text-lg font-medium text-gray-900 rounded-t-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white  ${
              dash === "Propiedades"
                ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                : "bg-gradient-to-br from-cyan-200 to-blue-200"
            }`}
            onClick={() => setDash("Propiedades")}
          >
            Propiedades
          </button>
          {user_type === "admin" && (
            <button
              className={`p-2  text-lg font-medium text-gray-900 rounded-t-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white  ${
                dash === "Usuarios"
                  ? "bg-gradient-to-br from-cyan-500 to-blue-500 "
                  : "bg-gradient-to-br from-cyan-200 to-blue-200 "
              }`}
              onClick={() => setDash("Usuarios")}
            >
              Usuarios
            </button>
          )}
        </div>
        <Link to={"/createProperty"} className="text-white ml-4 px-2 text-lg font-medium rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
          <span className="text-3xl">+</span> Crear Propiedad
        </Link>
      </div>

      {dash === "Propiedades" && <ContentDashboard />}
      {dash === "Usuarios" && <DashboardUsers />}
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
