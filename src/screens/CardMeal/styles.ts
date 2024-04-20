import styled, { css } from "styled-components/native";
import { PropsColorStyle } from "src/@types/styled";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Header = styled.View<PropsColorStyle>`
  flex: 1;
  margin-bottom: -20px;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px 0;
  align-items: center;
  background-color: ${({ type, theme }) =>
    type === "POSITIVE"
      ? theme.COLORS.GREEN_LIGHT
      : type === "NEGATIVE"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
`;

export const Title = styled.Text`
  flex: 1;
  margin-right: 25px;
  justify-content: center;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Content = styled.View`
  height: 85%;
  align-items: flex-start;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Text = styled.Text`
  margin: 10px 0;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.M}px;
    font-family: ${theme.FONT_WEIGHTS.NORMAL};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const TextTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.XL}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const TextTitleTime = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const ContentStatus = styled.View`
  padding: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.M}px;
    font-family: ${theme.FONT_WEIGHTS.NORMAL};
    color: ${theme.COLORS.GRAY_1};
    background-color: ${theme.COLORS.GRAY_6};
  `};
`;

export const TextStatus = styled.Text`
  margin-right: 4px;
`;

export const ContentButton = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const ModalCenteredView = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.COLORS.GRAY_1}80`};
`;
export const ModalView = styled.View`
  height: 30%;
  margin: 0px 20px;
  padding: 30px;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => `${theme.COLORS.GRAY_7}`};
`;
export const ModalViewButton = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const ModalButton = styled.View`
  width: 50%;
  margin: 26px 6px 0;
`;
export const TextModal = styled.Text`
  text-align: center;
  margin: 20px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
