import './UserList.css'
import { Link } from 'react-router-dom'


const UserList = ({ users }) => {


    return (
        <>

            {users.map(elm =>
                // TODO: DESACOPLAR USERCARD
                <Link to={`/user/${elm._id}`}>
                    {elm.username}
                    <br />
                </Link >)}

        </>
    );

}

export default UserList