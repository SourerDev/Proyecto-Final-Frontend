import { Route,Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import Home from './pages/home/Home.jsx'

function App() {
  return (
    <div className="flex flex-col ">
      <Routes>
        <Route path="/" element={<><Landing/></>}/>
        <Route path="/home" element={<><Home/></>}/>
      </Routes>
    </div>
  );
}

export default App;
