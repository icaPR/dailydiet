import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { PropsColorStyle } from "src/@types/styled";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const HeaderHome = styled.View`
  width: 100%;
  height: 102;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const Logo = styled(Image)`
  width: 98;
  height: 48;
`;
export const Perfil = styled(Image)`
  width: 48;
  height: 48;
  border-width: 2.5;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 50;
`;

export const Percent = styled(TouchableOpacity)<PropsColorStyle>`
  width: 100%;
  height: 102;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  background-color: ${({ type, theme }) =>
    type === "POSITIVE"
      ? theme.COLORS.GREEN_LIGHT
      : type === "NEGATIVE"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
`;
export const IconPoisiton = styled.View`
  position: absolute;
  top: 10;
  right: 10;
`;
