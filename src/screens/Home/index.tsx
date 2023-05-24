import { ButtonIcon } from "@components/ButtonIcon";
import {
  Container,
  Percent,
  HeaderHome,
  Logo,
  Perfil,
  IconPoisiton,
} from "./styles";
import { Higtlight } from "@components/Hightlight";
import { useState } from "react";
import { ColorStyle } from "src/@types/styled";

export function Home() {
  const [percentageStyle, setPercentageStyle] =
    useState<ColorStyle>("NEGATIVE");
  const [percentageValue, setPercentageValue] = useState("20.00");

  return (
    <Container>
      <HeaderHome>
        <Logo source={require("../../assets/Logo.png")} />
        <Perfil source={require("../../assets/Logo.png")} />
      </HeaderHome>

      <Percent type={percentageStyle}>
        <IconPoisiton>
          <ButtonIcon icon="arrow-top-right" type={percentageStyle} />
        </IconPoisiton>
        <Higtlight
          title={percentageValue + "%"}
          subtitle="das refeições dentro da dieta"
        />
      </Percent>
    </Container>
  );
}
