import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
export default function Signup() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reply, setReply] = useState({
    title: "",
    body: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gitHub: "",
    linkedIn: "",
    portfolio: "",
    tagline: "",
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
    checkValidity(e);
    if (!validated) {
      return;
    }

    e.preventDefault();

    axios
      .post(process.env.REACT_APP_URL + "/api/auth/sign-up", formData)
      .then(function (response) {
        if (response.status == 201) {
          setReply({
            title: "Succesfull",
            body: response.data.message,
          });

          return handleShow();
        }

        setReply({
          title: "Error",
          body: response.data.message,
        });
      })
      .catch(function (error) {
        setReply({
          title: error.response.data.error.code,
          body: error.response.data.error.message,
        });
        handleShow();
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
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            type="text"
            required
            placeholder="Enter Your First Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            required
            type="text"
            placeholder="Enter Your Last Name"
          />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Git Hub Link</Form.Label>
          <Form.Control
            value={formData.gitHub}
            onChange={handleChange}
            name="gitHub"
            type="text"
            placeholder="Enter Your Git Hub Link"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>LinkedIn Link</Form.Label>
          <Form.Control
            value={formData.linkedIn}
            onChange={handleChange}
            name="linkedIn"
            type="text"
            placeholder="Enter Your LinkedInLink"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>PortFolio Link</Form.Label>
          <Form.Control
            value={formData.portFolio}
            onChange={handleChange}
            name="portfolio"
            type="text"
            placeholder="Enter Your PortFolio Link"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Tagline Link</Form.Label>
          <Form.Control
            value={formData.Tagline}
            onChange={handleChange}
            name="tagline"
            type="text"
            placeholder="Enter Your TagLine Link"
          />
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
