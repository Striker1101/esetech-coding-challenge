import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const [reply, setReply] = useState({
    title: "",
    body: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // axios.get('/user', {
  //   params: {
  //     ID: 12345
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  function checkValidity(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //check if valid
    checkValidity(e);
    if (!validated) {
      return;
    }

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: user.accessToken,
            id: user.uid,
            user,
          })
        );
        setReply({
          title: "Welcome",
          body: "Login Succesfull",
        });
        handleShow();
        setTimeout(() => {
          navigate("/cv");
        }, 2000);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setReply({
          title: errorCode,
          body: errorMessage,
        });
        handleShow();
        // ..
      });
  };

  return (
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
      <Form
        noValidate
        validated={validated}
        className="p-4"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
            pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
            name="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 8 characters long and contain both
            uppercase and lowercase letters.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
