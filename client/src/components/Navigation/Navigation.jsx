import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">{import.meta.env.VITE_APP_NAME}</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/park/list"} className="nav-link">
              Park
            </Link>
            <Link to={"/event/list"} className="nav-link">
              Events
            </Link>
            <Link to={"/user/list"} className="nav-link"> Community</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
