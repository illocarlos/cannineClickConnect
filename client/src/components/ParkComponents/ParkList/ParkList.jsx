import './ParkList.css'

import { useEffect, useState } from 'react'
import parkService from '../../../services/parks.service'


const ParkList = () => {

  const [parks, setParks] = useState([])

  useEffect(() => {
    loadParks()
  }, [])

  const loadParks = () => {
    
    parkService
      .getParks()
      .then(({ data }) => setParks(data))
      .catch((err) => console.log(err))
  }

  return (
    parks.map(elm => <p>{elm.name}</p>)
  )

}

export default ParkList