import styled, { css } from "styled-components/native";
import { Image, TextProps } from "react-native";

interface TitleProps extends TextProps {
  statusColor: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;
export const ContainerButton = styled.View`
  width: 60%;
`;

export const MessageImg = styled(Image)`
  margin: 30px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, statusColor }) => css`
    font-size: ${theme.FONT_SIZES.XXL}px};
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${statusColor ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.NORMAL};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
export const SubtitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;
