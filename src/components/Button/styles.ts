import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  margin-bottom: 32;
  width: 100%;
  height: 50;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Title = styled.Text`
  margin-left: 12;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.M}px;
    font-weight: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
