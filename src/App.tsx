import React from "react";
import "./App.css";
import { getEntityMeta } from "./api/entities";
import { Button, Form } from "react-bootstrap";

function App() {
  return (
    <Form className="AppForm">
      <div className="d-flex">
        <Form.Label>Email address</Form.Label>: &nbsp;
        <Form.Label className="d-block">Email address</Form.Label>
        <Button
          as="input"
          type="submit"
          value="Save"
          style={{ marginLeft: "auto" }}
        />{" "}
      </div>
      <div className="AppFormCtrls">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>
      <Button as="input" type="submit" value="Save" />{" "}
    </Form>
  );
}

export default App;
