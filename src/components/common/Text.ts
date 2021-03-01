import styled from "styled-components";

export const Text = styled.p<{ $color?: string; $spanColor?: string; $marginBottom?: number }>`
  font-size: 14px;
  line-height: 18px;
  padding: 0;
  margin: 0;
  color: ${({ $color, theme }) => $color ?? theme.colors.darkText};
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px` ?? 0};

  & span {
    color: ${({ $color, $spanColor }) => $spanColor ?? 'inherit'};
  }
`;

export const BoldSpan = styled.span`
  font-family: RalewayBold;
`;
