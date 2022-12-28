import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavBs from "react-bootstrap/Nav";
import NavbarBs from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { useAuthContext } from "@context/useAuthContext";

const Navbar = () => {
  const { token, logout } = useAuthContext();
  return (
    <NavbarBs
      sticky="top"
      expand="sm"
      bg="dark"
      variant="dark"
      className="shadow mb-3"
    >
      <Container className="d-flex justify-content-between">
        <NavbarBs.Brand>React Github</NavbarBs.Brand>
        {token ? (
          <>
            <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBs.Collapse id="basic-navbar-nav">
              <NavBs className="me-auto">
                <NavBs.Link as={NavLink} to="/dashboard">
                  Home
                </NavBs.Link>
                <NavBs.Link as={NavLink} to="/search/user">
                  Search
                </NavBs.Link>
              </NavBs>
              <Button variant="outline-danger" size="sm" onClick={logout}>
                Logout
              </Button>
            </NavbarBs.Collapse>
          </>
        ) : null}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
