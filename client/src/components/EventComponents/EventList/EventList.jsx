import { useContext } from 'react'
import './EventList.css'
import { ThemeContext } from '../../../contexts/theme.context'


const EventList = ({ events }) => {




    return (
        <>
            {events.map(elm => <p> {elm.title}</p>)}
        </>
    )
}


export default EventList