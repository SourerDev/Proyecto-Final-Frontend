import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

//pages
import { SignUp } from './pages/session/SignUp.jsx'
import { SignIn } from './pages/session/SignIn.jsx'
import { Home } from './pages/Home.jsx'
import { Profile } from './pages/profile/Profile.jsx'
import { PropertyDetails } from './pages/property/PropertyDetails.jsx'
import { Landing } from './pages/Landing.jsx'
import { AboutUs } from './pages/AboutUs.jsx'

/*
import BePremium from "./pages/bePremium/BePremium";
import Redirect from "./components/redirect/Redirect";
import ContentDashboard from "./components/dashboard/ContentDashboard";
import OwnerData from "./components/dashboard/OwnerData";
import Favoriteid from "./components/FaroriteId/favoriteId";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardUsers from "./components/dashboard/DashboardUsers.jsx";
*/

//Components
import { Nav } from './components/navs/Nav.jsx'
import Footer from './components/footer/Footer.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'

import { ApiPropYou } from './services'
import { actionsPublications, actionsCity } from './redux2.0/reducers'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    ApiPropYou.getPublications()
      .then((response) => {
        const { publications } = response.data
        dispatch(actionsPublications.setPublications(publications))
        ApiPropYou.getCities().then((response) => {
          const { cities } = response.data
          dispatch(actionsCity.setCities(cities))
        })
      })
      .catch((error) => {})
  }, [dispatch])

  return (
    <div className="mx-auto max-w-7xl p-1 shadow">
      <Nav />
      <main className="min-h-screen">
        <ScrollToTop />
        <Routes>
          {/* Temporal */}
          <Route path="/" element={<Landing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          {/* <Route path="/newRoute" element={<><Nav/><DashboardUsers/></>}/>
          <Route path="/createProperty" element={<><Nav/><Form/><Footer/></>}/>
          <Route path="/bePremium" element={<><Nav/><BePremium/></>} />
          <Route path="/redirect" element={<><Redirect/><Footer/></>} />
          <Route path="/favorites/:id_User" element= {<><Favoriteid/></>}/>
          BACKEND TRABAJANDO
          <Route path="/dashboard" element={<><Nav/><DashboardPage/></>}/>
          <Route path="/ownerData/:id_User" element={<><Nav/><OwnerData /></>}/> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
