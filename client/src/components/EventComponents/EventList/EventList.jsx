import { useContext } from 'react'
import './EventList.css'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../../contexts/auth.context'


const EventList = ({ events }) => {

    const { loggedUser } = useContext(AuthContext)

    console.log("estos son los eventossss", events)

    const ownerEvent = (event) => {
        return event.owner === loggedUser._id;
    }
    return (
        <>

            {events.map(elm =>
                <Link to={`/event/${elm._id}`}>
                    {elm.title}
                    {ownerEvent(elm) && <p>Este es mi evento!!</p>}
                    <br />
                </Link >)}

        </>
    )
}


export default EventList