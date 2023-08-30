import { Routes, Route } from 'react-router-dom'
import ParkGalleryPage from '../pages/Parks/ParksGalleryPage/ParkGalleryPage'
import EventsGalleryPage from '../pages/Events/EventsGalleryPage/EventsGalleryPage'
import UsersPage from '../pages/Users/UsersPage/UsersPage'
import NewParkPage from '../pages/Parks/NewParkPage/NewParkPage'
import NewEventPage from '../pages/Events/NewEventsPage/NewEventPage'
import DetailsEventsPage from '../pages/Events/DetailsEventsPage/DetailsEventsPage'
import DetailsParkPage from '../pages/Parks/DetailsParkPage/DetailsParkPage'
import SignupPage from '../pages/Auth/SignupPage/SignupPage'
import LoginPage from '../pages/Auth/LoginPage/LoginPage'

// import PrivateRoute from './PrivateRoutes'

function AppRoutes() {

  return (
    <Routes>
      <Route path={"/"} element={<p>Página de inicio: UNDER CONSTRUCTION</p>} />
      <Route path={"/park/list"} element={<ParkGalleryPage />} />
      <Route path={"/user/list"} element={<UsersPage />} />
      <Route path={"/event/list"} element={<EventsGalleryPage />} />
      <Route path={"/park/newPark"} element={<NewParkPage />} />
      <Route path={"/event/newEvent"} element={<NewEventPage />} />
      <Route path={"/event/:event_id"} element={<DetailsEventsPage />} />
      <Route path={"/park/:park_id"} element={<DetailsParkPage />} />

      <Route path={"/auth/signup"} element={<SignupPage />} />
      <Route path={"/auth/login"} element={<LoginPage />} />

      <Route path={"*"} element={<p>ERROR</p>} />

      {/* <Route element={<PrivateRoute/>}>
      
              Añadir aquí las rutas privadas
      
          </Route>  */}
    </Routes>
  )

}

export default AppRoutes