import React from 'react';
import './UserCard.css';
import { Link } from "react-router-dom"


const UserCard = ({ username, avatar, about, _id }) => {
    return (

        <Link className="user-card" to={`/user/${_id}`} >
            <img src={avatar} alt="Avatar" className="user-avatar" />
            <h4 className="user-name mt-5">{username}</h4>
        </Link>

    );
};

export default UserCard;
