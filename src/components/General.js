import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const General = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editing, setEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };
  return editing ? (
    <div className="mt-4">
      <h4>General Information</h4>
      <Form onSubmit={handleSubmit} name="general_form">
        <Form.Group controlId="generalName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  ) : (
    <div className="mt-4">
      <h4>General Information</h4>
      <h6>Name:</h6>
      <p>{name}</p>
      <h6>Email Address:</h6>
      <p> {email}</p>
      <h6>Phone Number:</h6>
      <p> {phone}</p>
      <Button onClick={() => setEditing(true)}>Edit</Button>
    </div>
  );
};

export default General;
