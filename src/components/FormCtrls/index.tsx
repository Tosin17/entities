import { Form } from "react-bootstrap";
import "./FormCtrls.css";

export function FormCtrls(props: any) {
  const dataTypes: Record<string, string> = {
    String: "text",
    Integer: "number",
    Decimal: "number",
    Date: "datetime-local",
  };

  return (
    <div className="FormCtrls">
      {props.fields.map(
        ({ label, name, value, dataType }: any, index: number) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label className="text-mute">{label}</Form.Label>
            <Form.Control
              name={name}
              defaultValue={
                dataType === "Date"
                  ? new Date(value).toISOString().split(".")[0]
                  : value
              }
              type={dataTypes[dataType]}
            />
          </Form.Group>
        )
      )}
    </div>
  );
}
