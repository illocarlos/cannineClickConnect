// UserCard.jsx
import React from 'react';
import './UserCard.css';

const UserCard = ({ username, avatar, about, _id }) => {
    return (
        <div className="user-card">
            <img src={avatar} alt="Avatar" className="user-avatar" />
            <h4 className="user-name">{username}</h4>
            <p className="user-about">{about}</p>
            <p className="user-about">Añade más información aquí si es necesario.</p>
            {/* Puedes agregar más contenido si deseas alargar aún más las tarjetas */}
        </div>
    );
};

export default UserCard;
