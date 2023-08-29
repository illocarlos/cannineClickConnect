import { Routes, Route } from 'react-router-dom'
import ParkGalleryPage from '../pages/ParksPage/ParkGalleryPage'
import EventsGalleryPage from '../pages/EventsPage/EventsGalleryPage'
import UsersPage from '../pages/UsersPage/UsersPage'
import NewParkPage from '../pages/newParkPage/newParkPage'

// import PrivateRoute from './PrivateRoutes'

function AppRoutes() {

  return (
    <Routes>
      <Route path={"/"} element={<p>Soy el inicio</p>} />
      <Route path={"/park/list"} element={<ParkGalleryPage />} />
      <Route path={"/user/list"} element={<UsersPage />} />
      <Route path={"/event/list"} element={<EventsGalleryPage />} />
      <Route path={"/park/newPark"} element={<NewParkPage />} />

      <Route path={"*"} element={<p>ERROR</p>} />

      {/* <Route element={<PrivateRoute/>}>
      
                      Añadir aquí las rutas privadas
      
                  </Route>  */}
    </Routes>
  )

}

export default AppRoutes