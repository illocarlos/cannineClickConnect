import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import usersService from "../../../services/users.service"
import { useNavigate, useParams } from "react-router-dom";
import uploadServices from "../../../services/upload.service";
import Loader from "../../Loader/Loader";

const UpdateUserForm = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        city: "",
        password: "",
        avatar: "",
        about: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { user_id } = useParams();

    useEffect(() => {
        usersService
            .getUserDetails(user_id)
            .then((response) => {
                const { username, email, city, about, avatar } = response.data;
                setUserData({ username, email, city, about, avatar });
            })
            .catch((error) => {
                console.error("Error al cargar los datos del usuario: ", error);
            });
    }, [user_id]);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        usersService
            .editUser(user_id, userData)
            .then(() => {
                navigate(`/user/list`);
            })
            .catch((err) => {
                console.error("Error al actualizar el usuario: ", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleFileUpload = (e) => {
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("imagesData", e.target.files[i]);
        }

        uploadServices
            .uploadimages(formData)
            .then(({ data }) => {
                setUserData({
                    ...userData,
                    avatar: data.cloudinary_urls,
                });
            })
            .catch((err) => {
                console.error("Error al cargar la imagen: ", err);
            });
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar (URL)</Form.Label>
                <Form.Control type="file" multiple onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    value={userData.city}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="about">
                <Form.Label>About</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="about"
                    value={userData.about}
                    onChange={handleInputChange}
                />
            </Form.Group>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="d-grid">
                    <Button variant="dark" type="submit">
                        Update User
                    </Button>
                </div>
            )}
        </Form>
    );
};

export default UpdateUserForm;
