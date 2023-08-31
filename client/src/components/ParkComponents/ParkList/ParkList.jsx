import './ParkList.css'
import { Link } from 'react-router-dom'


const ParkList = ({ parks }) => {


  return (
    <>

      {parks.map(elm =>
        <Link to={`/park/${elm._id}`}>
          {elm.name}
          <br />
        </Link >)}

    </>
  )

}

export default ParkList