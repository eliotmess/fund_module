import styled from "styled-components";

export const Text = styled.p<{color?: string, spanColor?: string}>`
    color: ${({ color, theme }) => color ?? theme.colors.darkText};

    & span {
        color: ${({ color, spanColor }) => spanColor ?? color};
    }
`;

export const BoldSpan = styled.span`
    font-family: RalewayBold;
`;