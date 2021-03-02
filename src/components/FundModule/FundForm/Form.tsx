//* third party packages
import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
//* components
import { Form } from "./FundForm.style";
import SubmitButton from "components/common/buttons/SubmitButton";
import Input from "components/common/NumberInput";
//* other
import { FormContext } from "FormContext";
import LocalStorageService from "services/LocalStorageService";
import { ELocalStorage } from "constants/index";

interface IProps {
  submitHandler: (v: number, resolve: () => void) => void;
}

const GiveFundForm: React.FunctionComponent<IProps> = ({ submitHandler }) => {
  const { setUserFund } = useContext(FormContext);
  const [value, setValue] = useState<number>(50);
  const [submitting, setSubmitting] = useState(false);

  //* hydrate with saved form data (if exists)
  useEffect(() => {
    const savedDraft = LocalStorageService.get(ELocalStorage.FUND_DRAFT);
    if (savedDraft) {
      const userFund = parseInt(savedDraft);
      setUserFund(userFund);
      setValue(userFund);
    }
  }, [setUserFund]);

  const handleValidate = useCallback(
    (e) => {
      //* TODO
      //* custom validation with custom error handling could be implemented
      //* at the moment due to lack of time I stayed with default HTML5 validation
      //* of number input
      const v = parseInt(e.target.value);
      if (v) {
        setValue(v);
        setUserFund(v);
      }
    },
    [setUserFund]
  );

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
