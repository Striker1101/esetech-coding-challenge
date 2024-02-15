import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
export default function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // For input fields
    if (type !== "checkbox") {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      // For checkboxes
      setData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    }
  };

  function handleSubmit(e) {}

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => handleChange(e)}
            placeholder="Enter email"
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            value={data.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
