import { TouchableOpacityProps } from "react-native/types";
import { Container, Title } from "./styles";
import { Icon } from "@components/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonStyle, ColorStyle } from "src/@types/styled";

type Props = TouchableOpacityProps & {
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  type?: ButtonStyle;
  colorIcon?: ColorStyle;
};

export function Button({
  colorIcon,
  type = "DARK",
  iconName,
  title,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon iconName={iconName} type={colorIcon} />
      <Title type={type}>{title}</Title>
    </Container>
  );
}
