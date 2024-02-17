import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function NavBar({ isLoggedIn }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const [reply, setReply] = useState({
    title: "",
    body: "",
  });

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setReply({
          title: "LOGOUT",
          body: "Logout Succesfull",
        });
        handleShow();
        setTimeout(() => {
          navigate("/");
        }, 2000);
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: "",
            id: "",
            user: "",
          })
        );
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{reply.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{reply.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Navbar.Brand href="#home">EseTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link href="/cv">CV</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="#" onClick={logout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
