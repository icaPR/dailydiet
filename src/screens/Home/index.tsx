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
import { useCallback, useState } from "react";
import { ColorStyle } from "src/@types/styled";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { MealCard } from "@components/MealCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getGroupsMeal } from "@storage/GroupMeal/getGroupsMeal";
import { SectionList } from "react-native";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { getMeal } from "@storage/Meal/getMeal";

type PropsDataMeal = {
  time: string;
  nameMeal: string;
  status: boolean;
};
type PropsDataMealandGroup = {
  title: string;
  data: MealStorageDTO[];
};

type StatisticsProps = {
  total: number;
  trueCount: number;
  falseCount: number;
  truePercentage: number;
  longestTrueSequence: number;
};
export function Home() {
  const navigation = useNavigation();
  const [sectionData, setSectionData] = useState<PropsDataMealandGroup[]>([]);
  const [percentageValue, setPercentageValue] = useState<number>();
  const [percentageStyle, setPercentageStyle] = useState<ColorStyle>("NEUTRAL");
  const [statistics, setStatistics] = useState<StatisticsProps>(
    {} as StatisticsProps
  );

  function handleStatistic() {
    navigation.navigate("statistic", { statistics, percentageStyle });
  }

  function handleNewMeal() {
    navigation.navigate("newMeal");
  }

  async function fetchGroups() {
    try {
      const dataGroups = await getGroupsMeal();

      const promises = dataGroups.map(async (group) => {
        const dataMeal = await getMeal(group);
        return { title: group, data: dataMeal };
      });
      const sectionDataResult = await Promise.all(promises);
      setSectionData(sectionDataResult);
    } catch (error) {
      console.error(error);
    }
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

    setPercentageValue(truePercentage);
    if (truePercentage > 50) {
      setPercentageStyle("POSITIVE");
    } else {
      if (truePercentage < 50) {
        setPercentageStyle("NEGATIVE");
      } else {
        setPercentageStyle("NEUTRAL");
      }
    }
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
    setStatistics(calculateStatistics(flattenedAllMeal));
  }

  useFocusEffect(
    useCallback(() => {
      uploadMealData();
      fetchGroups();
      console.log(percentageValue);
    }, [])
  );

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
          title={percentageValue?.toFixed(0) + "%"}
          subtitle="das refeições dentro da dieta"
        />
      </Percent>
      <Title>Refeições</Title>
      <Button iconName="plus" title="Nova refeição" onPress={handleNewMeal} />
      <SectionList
        sections={sectionData}
        keyExtractor={(item) => item.time}
        renderSectionHeader={({ section: { title } }) => (
          <Title style={{ fontWeight: "bold" }}>{title}</Title>
        )}
        renderItem={({ item }) => <MealCard meal={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
