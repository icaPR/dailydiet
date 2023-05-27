import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 5px;
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
  `}
`;
