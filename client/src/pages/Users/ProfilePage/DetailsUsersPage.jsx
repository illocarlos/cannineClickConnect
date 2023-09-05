import './DetailsUsersPage.css';
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import usersService from '../../../services/users.service';
import dogService from '../../../services/dogs.service';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ThemeContext } from "../../../contexts/theme.context";

const DetailsUserPage = () => {

    const { theme, switchTheme } = useContext(ThemeContext)
    const { user_id } = useParams();
    const [user, setUser] = useState(null);


    const navigate = useNavigate()

    useEffect(() => {

        loadUserProfile();

    }, []);

    const loadUserProfile = () => {
        usersService
            .getUserDetails(user_id)
            .then(({ data }) => {
                const updatedUser = { ...data };
                updatedUser.dogs.forEach(dog => {
                    dog.isFlipped = false;
                });
                setUser(updatedUser);

            })
            .catch(err => console.log(err));
    };

    const handleCardClick = (index) => {
        const updatedUser = { ...user };
        updatedUser.dogs[index].isFlipped = !updatedUser.dogs[index].isFlipped;
        setUser(updatedUser);
    };

    const handleDeleteUser = () => {
        usersService
            .deleteUser(user_id)
            .then(() => navigate('/user/list'))
            .catch((err) => console.log(err))
    }


    const handleDeleteDog = (idUser, idDog) => {
        dogService
            .deletedDog(idUser, idDog)
            .then(() => loadUserProfile())
            .catch((err) => console.log(err))
    }

    return (
        <Container>
            {!user ? (
                <p>cargando datos de perfil.....</p>
            ) : (
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-center mt-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user.avatar[0]} />
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-center">
                                    {user.username}
                                </Card.Title>
                                <div className="d-flex flex-row">
                                    <Link
                                        style={{ width: '50%' }}
                                        to="/user/list"
                                        className="btn btn-dark"
                                    >
                                        gallery
                                    </Link>
                                    <Link
                                        style={{ width: '50%' }}
                                        to="/dog/newdog"
                                        className="btn btn-dark"
                                    >
                                        Create dog
                                    </Link>

                                    <Button onClick={handleDeleteUser}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <h1 className='d-flex justify-content-center ' >DOGS</h1>
                    <hr />
                    <div className="d-flex flex-row">
                        <Col className="d-flex flex-row" md={{ span: 6, offset: 1 }}>
                            {user.dogs.map((dog, index) => (
                                <Card
                                    className={`me-3 mt-4 ${dog.isFlipped ? 'flipped' : ''}`}
                                    style={{
                                        backgroundColor: { theme },
                                        width: '20rem',
                                        transformStyle: 'preserve-3d',
                                        transition: 'transform 0.5s ease',
                                    }}
                                    key={dog._id}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <Card.Img variant="top"
                                        src={dog.images[0]}>
                                    </Card.Img>
                                    <Card.Text

                                        className="card-back">
                                        <div>
                                            <h1>{dog.name}</h1>
                                            <p> {dog.description}</p>
                                            <p>{dog.age} years</p>
                                            <p>{dog.gender}</p>
                                            <p>{dog.size}</p>
                                        </div>

                                    </Card.Text>
                                    <Button onClick={() => {
                                        handleDeleteDog(user._id, dog._id)
                                    }}>Delete</Button>
                                </Card>
                            ))}
                            <hr />
                        </Col>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default DetailsUserPage;
