import { TouchableOpacityProps } from "react-native/types";
import { Container, Title } from "./styles";
import { Icon } from "@components/Icon";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon iconName="plus" />
      <Title>{title}</Title>
    </Container>
  );
}
