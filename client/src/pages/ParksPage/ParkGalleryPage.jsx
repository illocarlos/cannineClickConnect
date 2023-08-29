import { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import parkService from '../../services/parks.service'
import ParkList from '../../components/ParkList/ParkList'


const ParkGalleryPage = () => {
        
   const [ parks , setParks ] = useState([])
    
    useEffect(() => {
        loadParks()
    }, [])
    

    const loadParks = () => {
        
       parkService
            .getParks()
            .then(({data})=> setParks(data))
            .catch((err)=>console.log(err))
    }


    return (
        <>
        <Container>

            <h1>Galeria de parques</h1>
                
            <hr />
            <Button variant="success">New Park</Button>{' '}
            
            <ParkList parks={parks} />
            
        </Container>
        </>
    )

}
export default ParkGalleryPage;