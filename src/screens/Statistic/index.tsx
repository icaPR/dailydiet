import {
  Container,
  GeneralStats,
  MealSide,
  MealTotalSequence,
  Title,
} from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Higtlight } from "@components/Hightlight";
import { MealStatistic } from "@components/MealStatistic";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ColorStyle } from "src/@types/styled";

type RouteParams = {
  percentageValue: string;
  percentageStyle: ColorStyle;
};

export function Statistic() {
  const navigation = useNavigation();

  const route = useRoute();
  const { percentageValue, percentageStyle } = route.params as RouteParams;

  function handleHome() {
    navigation.navigate("home");
  }

  return (
    <Container type={percentageStyle}>
      <ButtonIcon
        icon="arrow-left"
        type={percentageStyle}
        onPress={handleHome}
      />
      <Higtlight
        title={percentageValue + "%"}
        subtitle="das refeições dentro da dieta"
      />
      <GeneralStats>
        <Title>Estatísticas gerais</Title>
        <MealTotalSequence>
          <MealStatistic type="NEUTRAL" />
          <MealStatistic type="NEUTRAL" />
        </MealTotalSequence>
        <MealSide>
          <MealStatistic type="POSITIVE" />
          <MealStatistic type="NEGATIVE" />
        </MealSide>
      </GeneralStats>
    </Container>
  );
}
