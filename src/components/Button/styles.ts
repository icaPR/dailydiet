import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
} from "react-native";
import styled, { css } from "styled-components/native";
import { ButtonStyle } from "src/@types/styled";

type PropsButton = TouchableOpacityProps & {
  type: ButtonStyle;
};
type PropsButtonText = TextProps & {
  type: ButtonStyle;
};

export const Container = styled(TouchableOpacity)<PropsButton>`
  width: 100%;
  height: 50px;
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${({ theme, type }) => css`
    background-color: ${type === "WHITE"
      ? theme.COLORS.GRAY_7
      : theme.COLORS.GRAY_1};
    border-width: ${type === "WHITE" ? 2 : 0};
    border-color: ${type === "WHITE" ? theme.COLORS.GRAY_1 : 0};
  `}
`;
export const Title = styled.Text<PropsButtonText>`
  margin: 12px
    ${({ theme, type }) => css`
      font-size: ${theme.FONT_SIZES.M}px;
      font-family: ${theme.FONT_WEIGHTS.BOLD};
      color: ${type === "WHITE" ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};
    `};
`;
