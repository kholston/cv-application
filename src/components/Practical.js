import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Practical extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  handleChange = (e) => {
    this.props.onChange(e);
  }

  handleUpdate = (e) => {
    this.props.edit("practical_edit");
  }

  render() {
    const { currentState } = this.props;
    const { company_name, position_title, main_tasks, date_start, date_end } = currentState;
    const editStatus = currentState.practical_edit;

    if (editStatus) {
      return (
        <div className="mt-4">
          <Form onSubmit={this.handleUpdate}>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control name="company_name" value={company_name} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Position Title</Form.Label>
              <Form.Control name="position_title" value={position_title} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Main Tasks</Form.Label>
              <Form.Control as="textarea" rows={4} name="main_tasks" value={main_tasks} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control name="date_start" value={date_start} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control name="date_end" value={date_end} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      )
    }

    return (
      <div className="mt-4">
        <h4>Practical Experience</h4>
        <h6>Company Name:</h6>
        <p>{company_name}</p>
        <h6>Position Title</h6>
        <p>{position_title}</p>
        <h6>Main Tasks</h6>
        <p>{main_tasks}</p>
        <h6>Date Start</h6>
        <p>{date_start}</p>
        <h6>Date End</h6>
        <p>{date_end}</p>
        <Button onClick={this.handleUpdate}>Edit</Button>
      </div>
    )
  }
}

export default Practical
