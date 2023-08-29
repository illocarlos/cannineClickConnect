import './EventList.css'

const EventList = ({ events }) => {
    
    return (
        <>
            {events.map(elm => <p> {elm.title} </p>)}
        </>
    )
}


export default EventList