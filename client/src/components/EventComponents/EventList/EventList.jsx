import './EventList.css'
import { Link } from 'react-router-dom'


const EventList = ({ events }) => {


    return (
        <>

            {events.map(elm =>
                <Link to={`/event/${elm._id}`}>
                    {elm.title}
                    <br />
                </Link >)}

        </>
    )
}


export default EventList