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
import { getMeal } from "@storage/Meal/getMeal";
import { Alert, FlatList } from "react-native";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";

type PropsDataMeal = {
  time: string;
  nameMeal: string;
  status: boolean;
};

export function Home() {
  const [dataMeal, setDataMeal] = useState<MealStorageDTO[]>([]);
  const [dataGroups, setDataGroups] = useState<string[]>([]);

  const [percentageStyle, setPercentageStyle] = useState<ColorStyle>("NEUTRAL");
  const [percentageValue, setPercentageValue] = useState("50");

  const navigation = useNavigation();

  function handleStatistic() {
    if (parseFloat(percentageValue) > 50) {
      setPercentageStyle("POSITIVE");
    } else {
      if (parseFloat(percentageValue) < 50) {
        setPercentageStyle("NEGATIVE");
      } else {
        setPercentageStyle("NEUTRAL");
      }
    }
    navigation.navigate("statistic", { percentageValue, percentageStyle });
  }

  function handleNewMeal() {
    navigation.navigate("newMeal");
  }

  async function fetchGroups() {
    try {
      const dataGroups = await getGroupsMeal();
      setDataGroups(dataGroups);
      console.log("Aqui" + dataGroups);
    } catch (error) {
    } finally {
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
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
          title={percentageValue + "%"}
          subtitle="das refeições dentro da dieta"
        />
      </Percent>
      <Title>Refeições</Title>
      <Button iconName="plus" title="Nova refeição" onPress={handleNewMeal} />
      <FlatList
        data={dataGroups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <MealCard dateSnack={item} />}
      ></FlatList>
    </Container>
  );
}
