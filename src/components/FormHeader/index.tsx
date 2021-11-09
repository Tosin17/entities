import { Form, Button } from "react-bootstrap";

export function FormHeader(props: any) {
  const { label, name } = props;

  return (
    <div className="d-flex">
      <Form.Label>{label}</Form.Label>: &nbsp;
      <Form.Label className="d-block">{name}</Form.Label>
      <Button
        as="input"
        type="submit"
        value="Save"
        style={{ marginLeft: "auto" }}
      />{" "}
    </div>
  );
}
