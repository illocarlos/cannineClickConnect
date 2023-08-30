import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import parksService from '../../../services/parks.service'
import ParkDetails from "../../../components/ParkComponents/ParkDetails/ParkDetails"



const DetailsParkPage = () => {

    const {park_id} = useParams()

    const [park, setPark] = useState({})
    

    useEffect (() => {
        loadParkDetails()
    }, [park])

    const loadParkDetails = () => {
        parksService
            .getParkDetails(park_id)
            .then(({data}) => setPark(data))
            .catch(err => console.log(err))
    }


    return (
        <ParkDetails />
    )
}

export default DetailsParkPage