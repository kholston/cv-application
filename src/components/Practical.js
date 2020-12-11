import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Practical = () => {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [editing, setEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const handleClick = () => {
    setEditing(true);
  };

  return editing ? (
    <div className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            name="company_name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Position Title</Form.Label>
          <Form.Control
            name="position_title"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Main Tasks</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="main_tasks"
            value={mainTasks}
            onChange={(e) => setMainTasks(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            name="date_start"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            name="date_end"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  ) : (
    <div className="mt-4">
      <h4>Practical Experience</h4>
      <h6>Company Name:</h6>
      <p>{companyName}</p>
      <h6>Position Title</h6>
      <p>{positionTitle}</p>
      <h6>Main Tasks</h6>
      <p>{mainTasks}</p>
      <h6>Date Start</h6>
      <p>{dateStart}</p>
      <h6>Date End</h6>
      <p>{dateEnd}</p>
      <Button onClick={handleClick}>Edit</Button>
    </div>
  );
};

export default Practical;
