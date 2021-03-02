import styled from "theme/styled-components";
import Button from "components/common/buttons/Button";

const Btn = styled(Button)`
  font-family: RalewayBold;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.green};
  border: 0.5px solid ${({ theme }) => theme.colors.darkGreen};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  width: calc(50% - 7.5px);
  box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.colors.darkGreen};

  &:disabled {
    cursor: not-allowed;
  }
`;

interface IProps {
  msg: string;
  disabled: boolean;
}

const SubmitButton: React.FunctionComponent<IProps> = ({ msg, disabled }) => (
  <Btn type="submit" disabled={disabled}>
    {msg}
  </Btn>
);

export default SubmitButton;
