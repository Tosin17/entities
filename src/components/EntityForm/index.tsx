import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getEntityData, getEntityMeta } from "../../api/entities";
import { formatDate } from "../../utils/date-formater";
import { FormCtrls } from "../FormCtrls";
import { FormHeader } from "../FormHeader";
import "./EntityForm.css";

export function EntityForm() {
  const [entityMeta, setEntityMeta] = useState({} as any);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues = {
      ...entityMeta.field.reduce((acc: any, curr: any) => {
        acc[curr.name] = formatDate(curr, formData.get(curr.name));
        return acc;
      }, {}),
      $original: getEntityData(),
    };

    sessionStorage.setItem("formValues", JSON.stringify(formValues));
    alert("Saved in session storage");
  };

  useEffect(() => {
    getEntityMeta().then((metaData) => setEntityMeta(metaData as any));
  }, []);

  return (
    <Form
      className="EntityForm"
      onSubmit={handleSubmit}
      data-testid="entityForm"
    >
      <FormHeader label={entityMeta.label} name={entityMeta.name} />
      <FormCtrls fields={entityMeta.field ?? []} />
      <Button as="input" type="submit" value="Save" />{" "}
    </Form>
  );
}
