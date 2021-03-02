import styled from "theme/styled-components";

export default styled.button`
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 500;
    color: transparent;
    background-color: transparent;
    padding: 0;
    border: none;
`;