import { ColorStyle } from "src/@types/styled";
import { Container, Status, Time, TitleMeal } from "./styles";

type Props = {
  time: string;
  title: string;
  status: ColorStyle;
};

export function Meal({ time, title, status }: Props) {
  return (
    <Container>
      <Time>{time}</Time>
      <TitleMeal>{title}</TitleMeal>
      <Status type={status} />
    </Container>
  );
}
