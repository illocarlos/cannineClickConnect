import './UserList.css';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard.jsx';
import usersService from '../../../services/users.service';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomNextArrow = (props) => (
    <div {...props} className="custom-next-arrow">
        <span className="arrow-label">Next</span>
    </div>
);

const CustomPrevArrow = (props) => (
    <div {...props} className="custom-prev-arrow">
        <span className="arrow-label">Prev</span>
    </div>
);

const UserList = () => {
    const [users, setUsers] = useState([]);
    let slider;

    useEffect(() => {
        usersService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch((err) => console.log(err));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <div className="user-list-container">
            <div className="user-list-header">
                <h2>User List</h2>
            </div>
            <div className="user-list-carousel">
                <Slider ref={(c) => (slider = c)} {...settings}>
                    {users.map((user) => (
                        <div key={user._id}>
                            <UserCard {...user} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default UserList;