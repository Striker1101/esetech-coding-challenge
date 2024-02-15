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
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/users/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response (e.g., display success message)
          console.log(response);
        } else {
          throw new Error("Failed to edit user details");
        }
      })
      .catch((error) => console.error("Error editing user details:", error));
  }

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            value={data.firstName}
            onChange={(e) => handleChange(e)}
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            value={data.lastName}
            onChange={(e) => handleChange(e)}
            placeholder="Enter Last Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Enter email"
            value={data.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            value={data.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
