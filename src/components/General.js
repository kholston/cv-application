import Button  from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class General extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.props.onChange(e);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    const {name, email, phone} = this.props.currentState;
    return(
      <div className="mt-4">
      <h4>General Information</h4>
        <Form onSubmit={this.handleSubmit}>
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
}


export default General;


