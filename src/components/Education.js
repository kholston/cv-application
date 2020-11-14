import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Education extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  handleChange = (e) => {
    this.props.onChange(e);
  }

  handleUpdate = (e) => {
    this.props.edit("education_edit");
  }

  render() {
    const { currentState } = this.props
    const { school_name, title_of_study, date_of_study } = currentState;
    const editStatus = currentState.education_edit;

    if (editStatus) {
      return (
        <div className="mt-4">
          <h4>Education</h4>
          <Form onSubmit={this.handleUpdate}>
            <Form.Group>
              <Form.Label>School Name</Form.Label>
              <Form.Control name="school_name" value={school_name} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Title of Study</Form.Label>
              <Form.Control name="title_of_study" value={title_of_study} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Study</Form.Label>
              <Form.Control name="date_of_study" value={date_of_study} onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      )
    }

    return (
      <div className="mt-4">
        <h4>Education</h4>
        <h6>Name Of School:</h6>
        <p>{school_name}</p>
        <h6>Title of Study:</h6>
        <p>{title_of_study}</p>
        <h6>Date of Study:</h6>
        <p>{date_of_study}</p>
        
        <Button onClick={this.handleUpdate}>Edit</Button>
      </div>
    )
  }
}

export default Education;
