import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class General extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange = (e) => {
    this.props.onChange(e);
  }

  handleUpdate = (e) => {
    this.props.edit("general_edit");
  }

  render() {
    const { currentState } = this.props;
    const { name, email, phone } = currentState;
    const editStatus = currentState.general_edit;


    if (editStatus) {
      return (
        <div className="mt-4">
            <h4>General Information</h4>
            <Form onSubmit={this.handleUpdate} name="general_form">
              <Form.Group controlId="generalName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" value={name} onChange={this.handleChange}></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="text" value={email} onChange={this.handleChange}></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" type="text" value={phone} onChange={this.handleChange}></Form.Control>
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form.Group>
            </Form>
          </div>
      )
    }

    return (
      <div className="mt-4">
        <h4>General Information</h4>
        <h6>Name:</h6>
        <p>{name}</p>
        <h6>Email Address:</h6>
        <p> { email }</p>
        <h6>Phone Number:</h6>
        <p> {phone}</p>
        
        <Button onClick={this.handleUpdate}>Edit</Button>
      </div>
    )

  }
}


export default General;
