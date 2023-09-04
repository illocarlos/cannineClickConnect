import './DetailsUsersPage.css';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import usersService from '../../../services/users.service';
import { Container, Row, Col, Card } from "react-bootstrap";

const DetailsUserPage = () => {
    const { user_id } = useParams();
    const [user, setUser] = useState(null);

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
                                        Volver a la galería
                                    </Link>
                                    <Link
                                        style={{ width: '50%' }}
                                        to="/dog/newdog"
                                        className="btn btn-dark"
                                    >
                                        Create dog
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex flex-row">
                        <Col className="d-flex flex-row" md={{ span: 6, offset: 1 }}>
                            {user.dogs.map((dog, index) => (
                                <Card
                                    className={`me-3 mt-4 ${dog.isFlipped ? 'flipped' : ''}`}
                                    style={{
                                        width: '14rem',
                                        transformStyle: 'preserve-3d',
                                        transition: 'transform 0.5s ease',
                                    }}
                                    key={dog._id}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={dog.images[0]}
                                    />
                                    <Card.Text className="card-back">
                                        {dog.description}
                                    </Card.Text>
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
