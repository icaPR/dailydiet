import { TouchableOpacityProps } from "react-native/types";
import { Container } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorStyle } from "src/@types/styled";
import { Icon } from "@components/Icon";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  type?: ColorStyle;
};

export function ButtonIcon({ icon, type = "NEUTRAL", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon iconName={icon} type={type} />
    </Container>
  );
}
