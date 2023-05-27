import { Higtlight } from "@components/Hightlight";
import { Container } from "./styles";
import { ColorStyle } from "src/@types/styled";

type Props = {
  type: ColorStyle;
};

export function MealStatistic({ type }: Props) {
  return (
    <Container type={type}>
      <Higtlight title="22" subtitle="melhor sequência de pratos da dieta" />
    </Container>
  );
}
