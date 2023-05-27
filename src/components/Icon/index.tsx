import { ColorStyle } from "src/@types/styled";
import { IconComponent } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  type?: ColorStyle;
};

export function Icon({ iconName, type }: Props) {
  return <IconComponent name={iconName} type={type} />;
}
