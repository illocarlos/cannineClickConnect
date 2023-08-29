import { Routes, Route } from 'react-router-dom'
import ParkGalleryPage from '../pages/ParksPage/ParkGalleryPage'
import EventsGalleryPage from '../pages/EventsPage/EventsGalleryPage'
import UsersPage from '../pages/UsersPage/UsersPage'
import NewEventPage from '../pages/EventsPage/NewEventPage'
// import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {

    return (
      <Routes>
        <Route path={"/"} element={<p>Soy el inicio</p>} />
        <Route path={"/park/list"} element={<ParkGalleryPage />} />
        <Route path={"/user/list"} element={<UsersPage />} />
        <Route path={"/event/list"} element={<EventsGalleryPage />} />
        <Route path={"/event/newEvent"} element={<NewEventPage />} />
        
        <Route path={"*"} element={<p>ERROR</p>} />

        {/* <Route element={<PrivateRoute/>}>

                Añadir aquí las rutas privadas

            </Route>  */}
      </Routes>
    );

}

export default AppRoutes