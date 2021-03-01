import styled from "theme/styled-components";

const InputField = styled.input`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.darkText};
  width: calc(50% - 7.5px);
`;

interface IProps {
  value: string;
}

const DefaultInput: React.FunctionComponent<IProps> = ({ value }) => (
  <InputField value={value} />
);

export default DefaultInput;
