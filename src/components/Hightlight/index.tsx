import { Container, Title, Subtitle } from "./styles";

type Props = {
  title: string | number;
  subtitle: string;
};

export function Higtlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
