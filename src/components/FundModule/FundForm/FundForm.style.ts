import styled from "theme/styled-components";

export const FundFormContainer = styled.div`
    width: 100%;
    border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
    border-top: none;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;