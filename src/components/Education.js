import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Education = () => {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [editing, setEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return editing ? (
    <div className="mt-4">
      <h4>Education</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>School Name</Form.Label>
          <Form.Control
            name="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Title of Study</Form.Label>
          <Form.Control
            name="title_of_study"
            value={studyTitle}
            onChange={(e) => setStudyTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Study</Form.Label>
          <Form.Control
            name="date_of_study"
            value={studyDate}
            onChange={(e) => setStudyDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  ) : (
    <div className="mt-4">
      <h4>Education</h4>
      <h6>Name Of School:</h6>
      <p>{schoolName}</p>
      <h6>Title of Study:</h6>
      <p>{studyTitle}</p>
      <h6>Date of Study:</h6>
      <p>{studyDate}</p>

      <Button onClick={() => setEditing(true)}>Edit</Button>
    </div>
  );
};

export default Education;
