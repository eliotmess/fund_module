import styled from "styled-components";

export const Text = styled.p<{ $color?: string; $spanColor?: string; $marginBottom?: string; $size?: string }>`
  font-size: ${({ $size, theme }) => $size ?? theme.fontSize.s };
  line-height: ${({ $size, theme }) => $size ?? theme.fontSize.m };
  padding: 0;
  margin: 0;
  color: ${({ $color, theme }) => $color ?? theme.colors.darkText};
  margin-bottom: ${({ $marginBottom }) => $marginBottom ?? 0};

  & span {
    color: ${({ $spanColor }) => $spanColor ?? 'inherit'};
  }
`;

export const BoldSpan = styled.span`
  font-family: RalewayBold;
`;
