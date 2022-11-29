import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getallProperties,
  getCities,
  getCitiesA,
  addFavorites,
} from "./redux/actions/index";
import Landing from "./pages/landing/Landing.jsx";
import Home from "./pages/home/Home.jsx";
import Detail from "./pages/detail/Detail.jsx";
import Form from "./pages/createProperty/form.jsx";
import Nav from "./components/nav-bar/Nav.jsx";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signup/SignUp";
import EditUser from "./pages/editUser/EditUser";
import Footer from "./components/footer/Footer";
import BePremium from "./pages/bePremium/BePremium";
import Redirect from "./components/redirect/Redirect";
import ContentDashboard from "./components/dashboard/ContentDashboard";
import OwnerData from "./components/dashboard/OwnerData";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallProperties());
    dispatch(getCities());
    dispatch(getCitiesA());

    localStorage.setItem("favorite", ``);
  }, []);

  return (
    <div className="flex flex-col ">
      <Routes>
        <Route path="/home" element={<><Nav/><Home/><Footer/></>}/>
        <Route path="/" element={<><Nav rutes={true} /><Landing/></>}/>
        <Route path="/detail/:id" element={<><Nav/><Detail/><Footer/></>}/>
        <Route path="/createProperty" element={<><Nav/><Form/></>}/>
        <Route path="/login" element={<><Nav login={false}/><LogIn/></>}/>
        <Route path="/signup" element={<><Nav login={false}/><SignUp/></>}/>
        <Route path="/user" element={<><Nav login={false}/><EditUser/><Footer/></>}/>
        <Route path="/bePremium" element={<><Nav/><BePremium/><Footer/></>} />
        <Route path="/redirect" element={<><Redirect/><Footer/></>} />
        {/* BACKEND TRABAJANDO */}
        <Route path="/dashboard" element={<><ContentDashboard /></>}/>
        <Route path="/ownerData/:id_User" element={<><OwnerData /></>}/>
      </Routes>
    </div>
  );
}

export default App;
