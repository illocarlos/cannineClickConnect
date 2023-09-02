import './EventList.css'
import EventCardList from './EventCardList.jsx'
const EventList = ({ events }) => {
    return (
        <>
            {
                events.map(elm => <EventCardList {...elm} />)
            }
        </>
    )
}
export default EventList







