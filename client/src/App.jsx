import { Route,Routes } from "react-router-dom";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getallProperties, getCities,getCitiesA} from './redux/actions/index';
import Landing from "./pages/landing/Landing.jsx";
import Home from './pages/home/Home.jsx';
import Detail from "./pages/detail/Detail.jsx";
import Form from "./pages/createProperty/form.jsx";
import Nav from "./components/nav-bar/Nav.jsx"
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallProperties())
        dispatch(getCities())
        dispatch(getCitiesA())
    }, [])

  return (
    <div className="flex flex-col ">
      <Routes>
        <Route path="/" element={<><Landing/></>}/>
        <Route path="/home" element={<><Nav/><Home/></>}/>
        <Route path="/detail/:id" element={<><Nav/><Detail/></>}/>
        <Route path="/createProperty" element={<><Nav/><Form/></>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
