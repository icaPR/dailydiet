import { TouchableOpacityProps } from "react-native/types";
import { Container, Title } from "./styles";
import { Icon } from "@components/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
};

export function Button({ iconName, title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon iconName={iconName} />
      <Title>{title}</Title>
    </Container>
  );
}
