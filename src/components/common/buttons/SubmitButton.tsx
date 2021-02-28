import styled from "theme/styled-components";
import Button from 'components/common/buttons/Button';

const TextButton = styled(Button)`
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
`;

interface IProps {
    msg: string;
}

interface IOptionalProps {
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type TProps = IProps & Partial<IOptionalProps>;

const SubmitButton: React.FunctionComponent<TProps> = ({ msg, clickHandler }) => (
    <TextButton onClick={clickHandler}>
        {msg}
    </TextButton>
)

export default SubmitButton;