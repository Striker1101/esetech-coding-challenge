import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Signup() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Form className="p-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="Enter Your First Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
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
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
