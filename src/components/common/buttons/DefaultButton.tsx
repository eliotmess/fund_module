import styled from "theme/styled-components";
import Button from "components/common/buttons/Button";

const Btn = styled(Button)`
  font-family: RalewayBold;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.darkText};
  width: calc(50% - 7.5px);
  box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.colors.borderColor};
`;

interface IProps {
  msg: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultButton: React.FunctionComponent<IProps> = ({
  msg,
  clickHandler,
}) => (
  <Btn type="button" onClick={clickHandler}>
    {msg}
  </Btn>
);

export default DefaultButton;
