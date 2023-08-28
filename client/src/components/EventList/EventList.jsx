import './EventList.css'

const EventList = ({ events }) => {
    
    return (
        <>
            {events.map(elm => <p> {elm.name} </p>)}
        </>
    )
}


export default EventList