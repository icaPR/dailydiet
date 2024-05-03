import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Header = styled.View`
  flex: 1;
  margin-bottom: -20px;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px 0;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
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
