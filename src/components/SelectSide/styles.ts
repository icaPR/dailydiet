import { TouchableOpacity } from "react-native";
import { PropsColorStyle } from "src/@types/styled";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const SelectButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin: 5px 0 5px 0;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const NameButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.S}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
  `}
`;

export const SelectedButton = styled(TouchableOpacity)<PropsColorStyle>`
  flex-direction: row;
  margin: 5px 0 5px 0;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  background-color: ${({ type, theme }) =>
    type === "POSITIVE" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-color: ${({ type, theme }) =>
    type === "POSITIVE" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
