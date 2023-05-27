import { PropsColorStyle } from "src/@types/styled";
import styled from "styled-components/native";

export const Container = styled.View<PropsColorStyle>`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ type, theme }) =>
    type === "POSITIVE"
      ? theme.COLORS.GREEN_LIGHT
      : type === "NEGATIVE"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
`;
