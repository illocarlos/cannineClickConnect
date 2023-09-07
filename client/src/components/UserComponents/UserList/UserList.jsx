import './UserList.css';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard.jsx';
import usersService from '../../../services/users.service';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="user-list-container">

            <div className="user-card-list">
                {users.map((user) => (
                    <div key={user._id} className="user-card">
                        <UserCard {...user} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
