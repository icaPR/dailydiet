import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: auto;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin: 5px 0px;
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
  `}
`;
