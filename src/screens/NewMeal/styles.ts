import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;
export const Header = styled.View`
  flex-direction: row;
  height: 15%;
  padding: 24px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin: 36px 102px 0 42px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.L}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Content = styled.View`
  flex: 1;
  height: 80%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;
export const ContentInput = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const Label = styled.Text`
  margin-top: 26px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZES.S}px;
    font-family: ${theme.FONT_WEIGHTS.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Input = styled(TextInput)`
  padding: 12px;
  border-radius: 6px;
  border-width: 1px;
  border-color: gray;
`;
export const InputDate = styled(TextInput)`
  flex: 1;
  padding: 12px;
  border-radius: 6px;
  border-width: 1px;
  border-color: gray;
`;

export const DividLine = styled.View`
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
`;
