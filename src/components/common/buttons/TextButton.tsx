import styled from "theme/styled-components";
import Button from "components/common/buttons/Button";

const Btn = styled(Button)`
  text-align: left;
  width: fit-content;
  font-family: RalewayMediumItalic;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.blue};
  margin: 7.5px 0;
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
