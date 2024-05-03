import { PropsColorStyle } from "src/@types/styled";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View<PropsColorStyle>`
  flex: 1;
  margin-bottom: -20px;
  flex-direction: row;
  padding: 30px 20px 0;
  justify-content: center;
  background-color: ${({ type, theme }) =>
    type === "POSITIVE"
      ? theme.COLORS.GREEN_LIGHT
      : type === "NEGATIVE"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
`;
export const HeaderButtonIcon = styled.View`
  padding-top: 40px;
`;

export const GeneralStats = styled.View`
  height: 75%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text`
  margin: 12px 0 12px 0;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.M}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const MealTotalSequence = styled.View`
  width: 100%;
  height: 190px;
  gap: 12px;
  margin-bottom: 12px;
`;

export const MealSide = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;
