import { Higtlight } from "@components/Hightlight";
import { Container } from "./styles";
import { ColorStyle } from "src/@types/styled";

type Props = {
  type: ColorStyle;
  value: number;
  subtitle: string;
};

export function MealStatistic({ type, value, subtitle }: Props) {
  return (
    <Container type={type}>
      <Higtlight title={value} subtitle={subtitle} />
    </Container>
  );
}
