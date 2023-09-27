import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";
import "../styling/Navbar.css";

const NavbarComp = (props: {
  toggleMode: MouseEventHandler<HTMLInputElement>;
  mode: string;
}) => {
  let textMode = props.mode === "light" ? "black" : "white";

  document.documentElement.style.setProperty("--mode", textMode);

  return (
    <Navbar bg={props.mode}>
      <Container fluid>
        <Navbar.Brand className={`text-${textMode}`} href="/">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={`text-${textMode}`} as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className={`text-${textMode}`} as={Link} to={"/music"}>
              Music
            </Nav.Link>
            <NavDropdown
              title={<span className={`text-${textMode}`}>Contact us</span>}
              id="basic-nav-dropdown"
              menuVariant={props.mode}
            >
              <NavDropdown.Item
                className={`text-${textMode}`}
                as={Link}
                to={"/name1"}
              >
                Name1
              </NavDropdown.Item>
              <NavDropdown.Item
                className={`text-${textMode}`}
                as={Link}
                to={"/name2"}
              >
                Name2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="form-check form-switch position-absolute top-25 end-0 me-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
              style={{ cursor: "pointer" }}
            />
            <label
              className={`form-check-label text-${textMode}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable dark mode"
                : "Enable light mode"}
            </label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
