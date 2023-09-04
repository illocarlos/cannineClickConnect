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
import DetailsUserPage from '../pages/Users/ProfilePage/DetailsUsersPage'
import NewDogPage from '../pages/Dogs/NewDogPage'

// import PrivateRoute from './PrivateRoutes'

function AppRoutes() {

  return (

    // TODO: REVISAR TODAS LAS LISTAS QUE PUDIESEN ALOJAR SU PROPIO ESTADO

    <Routes>
      <Route path={"/"} />
      <Route path={"/dog/newdog"} element={<NewDogPage />} />
      <Route path={"/park/list"} element={<ParkGalleryPage />} />
      <Route path={"/user/list"} element={<UsersPage />} />
      <Route path={"/event/list"} element={<EventsGalleryPage />} />
      <Route path={"/park/newPark"} element={<NewParkPage />} />
      <Route path={"/event/newEvent"} element={<NewEventPage />} />
      <Route path={"/event/:event_id"} element={<DetailsEventsPage />} />
      <Route path={"/park/:park_id"} element={<DetailsParkPage />} />
      <Route path={"/user/:user_id"} element={<DetailsUserPage />} />

      <Route path={"/event/delete/:event_id"} />

      <Route path={"/event/edit/:event_id"} element={<DetailsUserPage />} />

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