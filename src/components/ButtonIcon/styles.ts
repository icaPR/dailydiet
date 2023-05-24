import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PropsColorStyle } from "src/@types/styled";

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<PropsColorStyle>(
  ({ theme, type }) => ({
    size: 28,
    color:
      type === "POSITIVE"
        ? theme.COLORS.GREEN_DARK
        : type === "NEGATIVE"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_2,
  })
)``;
//MaterialCommunityIcons
