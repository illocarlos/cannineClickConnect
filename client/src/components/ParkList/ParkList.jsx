import './ParkList.css'

const ParkList = ({ parks }) => {
    
    return (
      <>
            {parks.map(elm => <p>{elm.name}</p>)}
      </>
    );

}

export default ParkList