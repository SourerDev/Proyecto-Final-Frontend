import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Landing from "./pages/landing/Landing.jsx";
/* import Home from "./pages/home/Home.jsx";
import Detail from "./pages/detail/Detail.jsx";
import Form from "./pages/createProperty/form.jsx"; */

import { Nav } from "./components/navs/Nav.jsx";
import { SignUp } from "./pages/session/SignUp.jsx";
import { SignIn } from "./pages/session/SignIn.jsx";
import { EditUser } from "./pages/editUser/EditUser.jsx";
/*
import Footer from "./components/footer/Footer";
import BePremium from "./pages/bePremium/BePremium";
import Redirect from "./components/redirect/Redirect";
import ContentDashboard from "./components/dashboard/ContentDashboard";
import OwnerData from "./components/dashboard/OwnerData";
import Favoriteid from "./components/FaroriteId/favoriteId";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardUsers from "./components/dashboard/DashboardUsers.jsx";
import Nosotros from "./components/Nosotros/nosotros";
 */

//Components
import Footer from "./components/footer/Footer.jsx";

//actions
import { actionsPublications } from "./redux2.0/reducers";

import { ApiPropYou } from "./services";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ApiPropYou.getPublications()
      .then((response) => {
        const { publications } = response.data;
        dispatch(actionsPublications.setPublications(publications));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [dispatch]);

  return (
    <div className="p-1 max-w-7xl mx-auto shadow">
      <Nav />

      <main className="min-h-screen">
        <Routes>
          {/* Temporal */}
          <Route path="/" element={<Landing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/user"
            element={
              <>
                <Nav login={false} />
                <EditUser />
                <Footer />
              </>
            }
          />
          {/* <Route path="/newRoute" element={<><Nav/><DashboardUsers/></>}/>
          <Route path="/home" element={<><Nav/><Home/><Footer/></>}/>
          <Route path="/detail/:id" element={<><Nav/><Detail/><Footer/></>}/>
          <Route path="/createProperty" element={<><Nav/><Form/><Footer/></>}/>
          <Route path="/login" element={<><Nav login={false}/><LogIn/></>}/>
          <Route path="/signup" element={<><Nav login={false}/><SignUp/></>}/>
          <Route path="/bePremium" element={<><Nav/><BePremium/></>} />
          <Route path="/redirect" element={<><Redirect/><Footer/></>} />
          <Route path="/favorites/:id_User" element= {<><Favoriteid/></>}/>
          <Route path="/nosotros" element={<><Nosotros/></>}/>
          BACKEND TRABAJANDO 
          <Route path="/dashboard" element={<><Nav/><DashboardPage/></>}/>
          <Route path="/ownerData/:id_User" element={<><Nav/><OwnerData /></>}/> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
