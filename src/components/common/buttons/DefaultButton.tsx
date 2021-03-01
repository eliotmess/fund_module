import styled from "theme/styled-components";
import Button from "components/common/buttons/Button";

const TextButton = styled(Button)`
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.darkText};
`;

interface IProps {
  msg: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultButton: React.FunctionComponent<IProps> = ({
  msg,
  clickHandler,
}) => <TextButton onClick={clickHandler}>{msg}</TextButton>;

export default DefaultButton;
