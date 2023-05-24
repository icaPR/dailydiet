import { TouchableOpacityProps } from "react-native";
import { Container, Icon, PropsButtonIconStyle } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  type?: PropsButtonIconStyle;
};

export function ButtonIcon({ icon, type = "NEUTRAL", ...rest }: Props) {
  return (
    <Container>
      <Icon name={icon} type={type} />
    </Container>
  );
}
