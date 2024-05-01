import { ColorStyle } from "src/@types/styled";
import { Container, Status, Time, TitleMeal } from "./styles";

type Props = {
  time: string;
  title: string;
  status: ColorStyle;
  navigation: () => void;
};

export function Meal({ time, title, status, navigation }: Props) {
  return (
    <Container onPress={navigation}>
      <Time>{time}</Time>
      <TitleMeal>{title}</TitleMeal>
      <Status type={status} />
    </Container>
  );
}
