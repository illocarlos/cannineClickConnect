import UserCard from './UserCard.jsx'
const UserList = ({ users }) => {
    return (
        <>
            {
                users.map(elm => <UserCard {...elm} />)
            }
        </>
    );
}
export default UserList