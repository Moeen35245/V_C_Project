import Link from "next/link";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
const Navhome = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <span className="bold primary">ATools</span>
            <span className="red bold">.</span>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Button className="mr-4" variant="secondary">
              <span className="text-small">Start free-trial</span>
            </Button>
            <Button variant="warning">
              <span className="text-small">Login</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navhome;
