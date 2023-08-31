import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/theme.context";


const Navigation = () => {

  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <>
      <Navbar bg={theme === 'dark' ? 'light' : 'dark'} data-bs-theme={theme === 'dark' ? 'light' : 'dark'}>
        <Container>
          <Navbar.Brand href="/">{import.meta.env.VITE_APP_NAME}</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">Home</Link>
            <Link to={"/park/list"} className="nav-link">Park</Link>
            <Link to={"/event/list"} className="nav-link">Events</Link>
            <Link to={"/user/list"} className="nav-link"> Community</Link>

            <Link to={"/auth/login"} className="nav-link"> Log In</Link>
            <Link to={"/auth/signup"} className="nav-link"> Sign Up</Link>
            <div className="d-flex">
              <Button variant='primary' size='sm' onClick={switchTheme}>Theme</Button>
            </div>
            {/* <Link to={"/auth/logout"} className="nav-link"> Log Out</Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
