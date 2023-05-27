import { Meal } from "@components/Meal";
import { Container, Title } from "./styles";

type Props = {
  dateSnack: string;
};

export function MealCard({ dateSnack }: Props) {
  return (
    <Container>
      <Title>{dateSnack}</Title>
      <Meal time="20:00" title="X-Tudo" status={"NEGATIVE"} />
    </Container>
  );
}
