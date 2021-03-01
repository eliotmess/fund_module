//* third party packages
import React, { FormEvent, useCallback, useState } from "react";
//* components
import { Form } from "./FundForm.style";
import SubmitButton from "components/common/buttons/SubmitButton";
import Input from "components/common/NumberInput";

interface IProps {
  submitHandler: (v: number, resolve: () => void) => void;
}

const GiveFundForm: React.FunctionComponent<IProps> = ({ submitHandler }) => {
  const [value, setValue] = useState<number>(50);
  const [submitting, setSubmitting] = useState(false);

  const handleValidate = useCallback((e) => {
    //* TODO
    //* custom validation with custom error handling cat be added
    //* at the moment due lack of time I stayed with HTML5 default validation
    //* of number input
    const v = parseInt(e.target.value);
    setValue(v);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      return new Promise<void>((resolve, reject) => {
        setSubmitting(true);
        if (!value) {
          reject();
        } else {
          submitHandler(value, resolve);
        }
      })
        .then((value) => value)
        .catch((err: Error) => {
          //* TODO
          //* add custom error handling
          //* display user-friendly error message
          console.error(err);
        })
        .finally(() => {
          setValue(50);
          return setSubmitting(false);
        });
    },
    [submitHandler, value]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        disabled={submitting}
        placeholder={"50"}
        value={value}
        onChange={handleValidate}
      />
      <SubmitButton disabled={submitting} msg={"Give Now"} />
    </Form>
  );
};

export default GiveFundForm;
