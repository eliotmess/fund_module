import styled from "theme/styled-components";

export const FundFormContainer = styled.div`
    width: 100%;
    border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
    border-top: none;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.colors.borderColor};
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const InfoContainer = styled.div<{$expanded: boolean}>`
    width: 100%;
    max-height: ${({ $expanded }) => $expanded ? `300px` : 0};
    overflow: hidden;
    transition: max-height 0.5s ease-out;
`