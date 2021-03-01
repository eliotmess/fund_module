import styled from "theme/styled-components";
import Button from "components/common/buttons/Button";

const TextButton = styled(Button)`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  width: calc(50% - 7.5px);

  &:disabled {
    cursor: not-allowed;
  }
`;

interface IProps {
  msg: string;
  disabled: boolean;
}

const SubmitButton: React.FunctionComponent<IProps> = ({ msg, disabled }) => (
  <TextButton type="submit" disabled={disabled}>
    {msg}
  </TextButton>
);

export default SubmitButton;
