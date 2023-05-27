import {
  Container,
  Percent,
  HeaderHome,
  Logo,
  Perfil,
  IconPoisiton,
  Title,
} from "./styles";
import { Higtlight } from "@components/Hightlight";
import { useState } from "react";
import { ColorStyle } from "src/@types/styled";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { MealCard } from "@components/MealCard";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [percentageStyle, setPercentageStyle] =
    useState<ColorStyle>("NEGATIVE");
  const [percentageValue, setPercentageValue] = useState("49,99");
  const navigation = useNavigation();

  function handleStatistic() {
    navigation.navigate("statistic", { percentageValue, percentageStyle });
  }

  return (
    <Container>
      <HeaderHome>
        <Logo source={require("../../assets/Logo.png")} />
        <Perfil source={require("../../assets/Logo.png")} />
      </HeaderHome>
      <Percent type={percentageStyle} onPress={handleStatistic}>
        <IconPoisiton>
          <Icon iconName="arrow-top-right" type={percentageStyle} />
        </IconPoisiton>
        <Higtlight
          title={percentageValue + "%"}
          subtitle="das refeições dentro da dieta"
        />
      </Percent>
      <Title>Refeições</Title>
      <Button title="Nova refeição" onPress={() => {}} />
      <MealCard dateSnack="12.08.22" />
    </Container>
  );
}
