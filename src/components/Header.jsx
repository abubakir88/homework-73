import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
// import "../../scss/Header.scss";

const Header = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <div className="bg-secondary">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Link to="/">
              <Navbar.Brand className="text-light">LOGO</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <NavLink to="/">
                  <Nav.Link as="span" className="text-light">
                    Home
                  </Nav.Link>
                </NavLink>
                <NavLink to="/posts">
                  <Nav.Link as="span" className="text-light">
                    Posts
                  </Nav.Link>
                </NavLink>
                <NavLink to="/about">
                  <Nav.Link as="span" className="text-light">
                    About
                  </Nav.Link>
                </NavLink>
                <NavLink to="/teachers">
                  <Nav.Link as="span" className="text-light">
                    Teachers
                  </Nav.Link>
                </NavLink>
                <NavLink to="/contact">
                  <Nav.Link as="span" className="text-light">
                    Contact
                  </Nav.Link>
                </NavLink>
                {user ? (
                  <NavLink to="/profile">
                    <Nav.Link as="span" className="text-light">
                      {user.username}
                    </Nav.Link>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <Nav.Link as="span" className="text-light">
                      Login
                    </Nav.Link>
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
};

export default Header;
