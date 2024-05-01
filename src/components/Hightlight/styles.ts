import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XXL}px};
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.S}px;
    font-family: ${theme.FONT_WEIGHTS.NORMAL};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
