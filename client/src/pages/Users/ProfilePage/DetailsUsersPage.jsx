import './DetailsUsersPage.css';
import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import usersService from '../../../services/users.service';
import dogService from '../../../services/dogs.service';
import { Container, Card, Button } from "react-bootstrap";
import { ThemeContext } from "../../../contexts/theme.context";
import Loader from '../../../components/Loader/Loader';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Collapse from 'react-bootstrap/Collapse';
const DetailsUserPage = () => {
    const { theme, switchTheme } = useContext(ThemeContext);
    const { user_id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

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
                <Loader />
            ) : (
                <div className="d-flex flex-column justify-content-center">
                    <div className='tarProf mt-4'>
                        <Container>
                            <div className="d-flex   justify-content-around mt-4">
                                <div>
                                    <Card.Img style={{ width: '18rem', borderRadius: '150px' }} variant="top" src={user.avatar[0]} />
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                    </Card.Body>
                                </div>

                                <Card.Title className='d-flex flex-column align-items-center  justify-content-between'>
                                    <p> {user.username}</p>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex flex-column  align-items-center'>
                                            <p> {user.email}</p>
                                            <p>{user.city}</p>
                                        </div>
                                    </div>
                                </Card.Title>

                                <Card.Title className='titleUser d-flex flex-column align-items-center justify-content-center'>
                                    <p> {user.about}</p>
                                </Card.Title>
                            </div>

                            <div className=" mb-3 d-flex flex-row justify-content-center" >
                                <Link
                                    to={`/user/edit/${user_id}`}
                                    className="me-3 btn btn-warning">
                                    Edit Profile
                                </Link>
                                <Link
                                    to="/dog/newdog"
                                    className=" me-3 btn btn-dark"
                                >
                                    Create dog
                                </Link>
                                <Button className=' deletdDog' onClick={handleDeleteUser}>Delete</Button>
                            </div>
                        </Container>
                    </div>

                    <h1 className='d-flex justify-content-center ' >DOGS</h1>
                    <hr />
                    <div className="carruselProfile d-flex flex-row">
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            selectedItem={0}
                            showThumbs={false}

                            emulateTouch={false}
                            centerMode={true}
                            width="80vw"


                            centerSlidePercentage={33.33}
                        >
                            {user.dogs.map((dog, index) => (

                                <Card key={dog._id}
                                    className={`${dog.isFlipped ? 'flipped' : ''}`}
                                    style={{

                                        transformStyle: 'preserve-3d',
                                        transition: 'transform 0.5s ease',
                                        width: '300px',
                                        height: '270px',
                                    }}

                                >
                                    <Card.Img
                                        variant="top"
                                        style={{
                                            maxWidth: '300px',
                                            maxHeight: '200px',
                                            width: 'auto',
                                            height: 'auto',
                                        }}
                                        src={dog.images[0]}
                                        alt="Descripción de la imagen"
                                    />
                                    <Card.Text >
                                        <h3 className='mt-1'>{dog.name}</h3>

                                    </Card.Text>
                                    <Button className='deletdDog' onClick={() => {
                                        handleDeleteDog(user._id, dog._id)
                                    }}>Delete</Button>


                                </Card>


                            ))}
                        </Carousel>

                    </div>
                </div >
            )
            }
        </Container >
    );
};

export default DetailsUserPage;
