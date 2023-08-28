import './UserList.css'

const UserList = ({ users }) => {
    
    return (
      <>
            {users.map(elm => <p>{elm.name}</p>)}
      </>
    );

}

export default UserList