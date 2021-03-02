import styled from "theme/styled-components";
import Button from "components/common/buttons/Button";

const Btn = styled(Button)<{ $width: string }>`
  font-family: RalewayBold;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.darkText};
  width: ${({ $width }) => $width};
  box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.colors.borderColor};
`;

interface IProps {
  msg: string;
  width: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultButton: React.FunctionComponent<IProps> = ({
  msg,
  clickHandler,
  width,
}) => (
  <Btn type="button" onClick={clickHandler} $width={width}>
    {msg}
  </Btn>
);

export default DefaultButton;
