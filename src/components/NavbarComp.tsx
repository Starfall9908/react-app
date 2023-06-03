import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Name1 from "../pages/Name1";
import Name2 from "../pages/Name2";

const NavbarComp = () => {
  return (
    <Router>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/music"}>
                Music
              </Nav.Link>
              <NavDropdown title="Contact us" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/name1"}>
                  Name1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/name2"}>
                  Name2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/music" element={<Music />} />
          <Route path="/name1" element={<Name1 />} />
          <Route path="/name2" element={<Name2 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavbarComp;
