import { Route,Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import Home from './pages/home/Home.jsx'
import Detail from "./pages/detail/Detail.jsx"

function App() {
  return (
    <div className="flex flex-col ">
      <Routes>
        <Route path="/" element={<><Landing/></>}/>
        <Route path="/home" element={<><Home/></>}/>
        <Route path="/detail/:id" element={<><Detail/></>}/>
      </Routes>
    </div>
  );
}

export default App;
