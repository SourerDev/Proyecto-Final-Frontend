import { Route,Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import Home from './pages/home/Home.jsx';
import Detail from "./pages/detail/Detail.jsx";
import Form from "./pages/createProperty/form.jsx";
import Nav from "./components/nav-bar/Nav.jsx"

function App() {
  return (
    <div className="flex flex-col ">
      <Routes>
        <Route path="/" element={<><Landing/></>}/>
        <Route path="/home" element={<><Nav/><Home/></>}/>
        <Route path="/detail/:id" element={<><Nav/><Detail/></>}/>
        <Route path="/createProperty" element={<><Nav/><Form/></>}/>
      </Routes>
    </div>
  );
}

export default App;
