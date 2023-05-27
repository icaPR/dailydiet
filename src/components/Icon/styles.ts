import { PropsColorStyle } from "src/@types/styled";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const IconComponent = styled(
  MaterialCommunityIcons
).attrs<PropsColorStyle>(({ theme, type }) => ({
  size: 28,
  color:
    type === "POSITIVE"
      ? theme.COLORS.GREEN_DARK
      : type === "NEGATIVE"
      ? theme.COLORS.RED_DARK
      : type === "NEUTRAL"
      ? theme.COLORS.GRAY_5
      : theme.COLORS.WHITE,
}))``;
