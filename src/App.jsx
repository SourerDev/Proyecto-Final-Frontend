import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Landing from './pages/Landing.jsx'
/*
import Detail from "./pages/detail/Detail.jsx";
import Form from "./pages/createProperty/form.jsx"; */

import { Nav } from './components/navs/Nav.jsx'
import { SignUp } from './pages/session/SignUp.jsx'
import { SignIn } from './pages/session/SignIn.jsx'
import { Home } from './pages/Home.jsx'
import { Profile } from './pages/profile/Profile.jsx'
/*
import BePremium from "./pages/bePremium/BePremium";
import Redirect from "./components/redirect/Redirect";
import ContentDashboard from "./components/dashboard/ContentDashboard";
import OwnerData from "./components/dashboard/OwnerData";
import Favoriteid from "./components/FaroriteId/favoriteId";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardUsers from "./components/dashboard/DashboardUsers.jsx";
*/
import Nosotros from './components/Nosotros/nosotros'

//Components
import Footer from './components/footer/Footer.jsx'

//actions
import { actionsPublications } from './redux2.0/reducers'

import { ApiPropYou } from './services'
import { PropertyDetails } from './pages/property/PropertyDetails.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    ApiPropYou.getPublications()
      .then((response) => {
        const { publications } = response.data
        dispatch(actionsPublications.setPublications(publications))
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
          <Route path="/about-us" element={<Nosotros />} />
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
