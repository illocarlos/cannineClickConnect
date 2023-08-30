import { Routes, Route } from 'react-router-dom'
import ParkGalleryPage from '../pages/Parks/ParksGalleryPage/ParkGalleryPage'
import EventsGalleryPage from '../pages/Events/EventsGalleryPage/EventsGalleryPage'
import UsersPage from '../pages/Users/UsersPage/UsersPage'
import NewParkPage from '../pages/Parks/NewParkPage/NewParkPage'
import NewEventPage from '../pages/Events/NewEventsPage/NewEventPage'
import DetailsEventsPage from '../pages/Events/DetailsEventsPage/DetailsEventsPage'

// import PrivateRoute from './PrivateRoutes'

function AppRoutes() {

  return (
    <Routes>
      <Route path={"/"} element={<p>Soy el inicio</p>} />
      <Route path={"/park/list"} element={<ParkGalleryPage />} />
      <Route path={"/user/list"} element={<UsersPage />} />
      <Route path={"/event/list"} element={<EventsGalleryPage />} />
      <Route path={"/park/newPark"} element={<NewParkPage />} />
      <Route path={"/event/newEvent"} element={<NewEventPage />} />
      <Route path={"/event/:event_id"} element={<DetailsEventsPage />} />

      <Route path={"*"} element={<p>ERROR</p>} />

      {/* <Route element={<PrivateRoute/>}>
      
                      Añadir aquí las rutas privadas
      
                  </Route>  */}
    </Routes>
  )

}

export default AppRoutes