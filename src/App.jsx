import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//pages
import { SignUp } from './pages/session/SignUp.jsx'
import { SignIn } from './pages/session/SignIn.jsx'
import { Home } from './pages/Home.jsx'
import { Profile } from './pages/profile/Profile.jsx'
import { PropertyDetails } from './pages/property/PropertyDetails.jsx'
import { Landing } from './pages/Landing.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AdvancedFilters } from './components/advanced-filters/AdvancedFilters.jsx'
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
import { Footer } from './components/Footer.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'

import { ApiPropYou } from './services'
import {
  actionsPublications,
  actionsCity,
  actionsApp,
} from './redux2.0/reducers'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { LoaderIcon } from './components/loaders/Loader.jsx'
import { Alerts } from './utils'

function App() {
  const dispatch = useDispatch()
  const [activeStyle, setActiveStyle] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const { isLoading } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(actionsApp.setIsLoading(true))
    ApiPropYou.getPublications().then((response) => {
      const { publications } = response.data
      dispatch(actionsPublications.setPublications(publications))
      ApiPropYou.getCities().then((response) => {
        dispatch(actionsApp.setIsLoading(false))

        const { cities } = response.data
        dispatch(actionsCity.setCities(cities))
      })
    }).catch((err) => {
      dispatch(actionsApp.setIsLoading(false))
      Alerts.errorConection({ text: err.message })
    })
  }, [dispatch])

  function handleScroll({ target }) {
    setScrollPosition(target.scrollTop)
  }

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_G_CLIENT_ID}>
      <div
        onScroll={handleScroll}
        id="main-screen"
        className="h-screen w-screen min-w-[440px] overflow-hidden bg-gray-100 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-500 sm:scrollbar-thumb-indigo-600 sm:hover:scrollbar-thumb-indigo-800"
      >
        <Nav
          className={`width-max-main transition-all ${
            activeStyle
              ? 'bg-gradient-to-b from-gray-500/70 px-5'
              : 'rounded border-gray-50 bg-white px-4 shadow-md '
          }`}
        />
        <main className="width-max-main min-h-screen border-gray-100 bg-white xl:border-x">
          <ScrollToTop />
          <Routes>
            {/* Temporal */}
            <Route
              path="/"
              element={
                <Landing
                  setActiveStyle={setActiveStyle}
                  scrollY={scrollPosition}
                />
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path='/filter' element={<AdvancedFilters/>} />
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
        <Footer className="width-max-main" />
      </div>
      {isLoading && <LoaderIcon className="fixed bottom-2 left-2 w-[40px]" />}
    </GoogleOAuthProvider>
  )
}

export default App
