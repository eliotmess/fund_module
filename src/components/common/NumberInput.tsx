import { ChangeEvent } from "react";
import styled from "theme/styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: calc(50% - 7.5px);

  &::after {
    content: "$";
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkText};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    z-index: 1;
  }
`;

const InputField = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  padding: 10px 15px 10px 25px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.darkText};

  &:disabled {
    cursor: not-allowed;
  }
`;

interface IProps {
  value: number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  placeholder: string;
}

const NumberInput: React.FunctionComponent<IProps> = ({
  value,
  onChange,
  disabled,
  placeholder,
}) => (
  <InputWrapper>
    <InputField
      min={1}
      type="number"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
    />
  </InputWrapper>
);

export default NumberInput;
