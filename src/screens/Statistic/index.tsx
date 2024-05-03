import {
  Container,
  Header,
  GeneralStats,
  MealSide,
  MealTotalSequence,
  Title,
  HeaderButtonIcon,
} from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Higtlight } from "@components/Hightlight";
import { MealStatistic } from "@components/MealStatistic";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getGroupsMeal } from "@storage/GroupMeal/getGroupsMeal";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { getMeal } from "@storage/Meal/getMeal";
import { useCallback, useState } from "react";
import { StatisticsProps } from "src/@types/statistics";
import { ColorStyle } from "src/@types/styled";

type RouteParams = {
  statistics: StatisticsProps;
  percentageStyle: ColorStyle;
};
export function Statistic() {
  const navigation = useNavigation();
  const route = useRoute();
  const [allMealdata, setAllMealData] = useState<MealStorageDTO[]>([]);
  /*const [statistics, setStatistics] = useState<StatisticsProps>(
    {} as StatisticsProps
  );*/
  const { statistics, percentageStyle } = route.params as RouteParams;

  function handleHome() {
    navigation.navigate("home");
  }

  function calculateStatistics<StatisticsProps>(meals: MealStorageDTO[]) {
    let total = 0;
    let trueCount = 0;
    let falseCount = 0;
    let sequentialTrueCount = 0;
    let sequentialFalseCount = 0;
    let longestTrueSequence = 0;
    for (const meal of meals) {
      if (meal.status) {
        total++;
        trueCount++;
        sequentialTrueCount++;
        sequentialFalseCount = 0;
        if (sequentialTrueCount > longestTrueSequence) {
          longestTrueSequence = sequentialTrueCount;
        }
      } else {
        total++;
        falseCount++;
        sequentialFalseCount++;
        sequentialTrueCount = 0;
      }
    }
    const truePercentage = (trueCount / total) * 100;
    return {
      total,
      trueCount,
      falseCount,
      truePercentage,
      longestTrueSequence,
    };
  }
  async function uploadMealData() {
    const dataGroups = await getGroupsMeal();

    const promises = dataGroups.map(async (group) => {
      const dataMeal = await getMeal(group);
      return dataMeal;
    });
    const allMeal = await Promise.all(promises);
    const flattenedAllMeal = allMeal.flat();
  }

  useFocusEffect(
    useCallback(() => {
      //      uploadMealData();
    }, [])
  );

  return (
    <Container>
      <Header type={percentageStyle}>
        <HeaderButtonIcon>
          <ButtonIcon
            icon="arrow-left"
            type={percentageStyle}
            onPress={handleHome}
          />
        </HeaderButtonIcon>
        <Higtlight
          title={statistics.truePercentage.toFixed(0) + "%"}
          subtitle="das refeições dentro da dieta"
        />
      </Header>
      <GeneralStats>
        <Title>Estatísticas gerais</Title>
        <MealTotalSequence>
          <MealStatistic
            type="NEUTRAL"
            value={statistics.longestTrueSequence}
            subtitle="melhor sequência de pratos dentro da dieta"
          />
          <MealStatistic
            type="NEUTRAL"
            value={statistics.total}
            subtitle="refeições registradas"
          />
        </MealTotalSequence>
        <MealSide>
          <MealStatistic
            type="POSITIVE"
            value={statistics.trueCount}
            subtitle="refeições dentro da dieta"
          />
          <MealStatistic
            type="NEGATIVE"
            value={statistics.falseCount}
            subtitle="refeições fora da dieta"
          />
        </MealSide>
      </GeneralStats>
    </Container>
  );
}
