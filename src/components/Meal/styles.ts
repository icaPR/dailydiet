import { TouchableOpacity } from "react-native";
import { PropsColorStyle } from "src/@types/styled";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 52px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    width: 13%;
    border-right-width: 1px;
    border-right-color: ${theme.COLORS.GRAY_4};
    font-size: ${theme.FONT_SIZES.XS}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const TitleMeal = styled.Text`
  ${({ theme }) => css`
    margin-left: 15px;
    width: 72%;
    font-size: ${theme.FONT_SIZES.M}px;
    font-family: ${theme.FONT_WEIGHTS.NORMAL};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Status = styled.View<PropsColorStyle>`
  width: 15%;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${({ type, theme }) =>
    type === "POSITIVE" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
