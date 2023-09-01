import { useContext } from 'react'
import './EventList.css'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../../contexts/auth.context'


const EventList = ({ events, owner }) => {

    //const { user } = useContext(AuthContext)


    return (
        <>

            {events.map(elm =>
                <Link to={`/event/${elm._id}`}>
                    {elm.title}
                    {/* {user._id === owner && <p>Este es mi evento!!</p>} */}
                    <br />
                </Link >)}

        </>
    )
}


export default EventList