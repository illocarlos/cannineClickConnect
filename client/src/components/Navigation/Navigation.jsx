import { useContext } from "react";
import { Button, Container, Nav, Navbar, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/theme.context";
import { AuthContext } from "../../contexts/auth.context";


const Navigation = () => {

  const { theme, switchTheme } = useContext(ThemeContext)
  const { loggedUser, logout } = useContext(AuthContext)




  return (
    <>
      <Navbar className="justify-content-between" bg={theme === 'dark' ? 'light' : 'dark'} data-bs-theme={theme === 'dark' ? 'light' : 'dark'}>
        <Container >
          <div className="d-flex flex-row justify-around">
            <Link to={"/"}>{import.meta.env.VITE_APP_NAME}</Link>
            <Nav className="me-auto">

              {
                loggedUser &&
                <div className="d-flex">
                  <Link to={"/park/list"} className="nav-link">Park</Link>
                  <Link to={"/event/list"} className="nav-link">Events</Link>
                  <Link to={"/user/list"} className="nav-link"> Community</Link>

                </div>
              }

              <div className="d-flex">
                <Button variant='primary' size='sm' onClick={switchTheme}>Theme</Button>



                <DropdownButton
                  align="end"
                  title={loggedUser ? loggedUser.username : " log in"}
                  id="dropdown-menu-align-end"
                >
                  {
                    loggedUser &&
                    <>
                      <span className='nav-link' onClick={logout}>Cerrar sesión</span>
                    </>
                  }
                  {
                    !loggedUser &&
                    <>
                      <Link to={"/auth/signup"} className="nav-link"> Sign Up</Link>
                      <Link to={"/auth/login"} className="nav-link"> Log In</Link>
                    </>
                  }
                </DropdownButton>
              </div>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
