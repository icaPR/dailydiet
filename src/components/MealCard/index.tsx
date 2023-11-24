import { Meal } from "@components/Meal";
import { Container, Title } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { getMeal } from "@storage/Meal/getMeal";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

type Props = {
  dateSnack: string;
};

export function MealCard({ dateSnack }: Props) {
  const [dataMeal, setDataMeal] = useState<MealStorageDTO[]>([]);
  async function fetchGroups(dateSnack: string) {
    try {
      const dataMeal = await getMeal(dateSnack);
      setDataMeal(dataMeal);
    } catch (error) {
    } finally {
    }
  }

  useEffect(() => {
    fetchGroups(dateSnack);
  }, [dateSnack]);

  return (
    <Container>
      <Title>{dateSnack}</Title>
      <FlatList
        data={dataMeal}
        keyExtractor={(index) => `${dateSnack}_${index}`}
        renderItem={({ item }) => (
          <Meal time={item.time} status={"NEUTRAL"} title={item.nameMeals} />
        )}
      ></FlatList>
    </Container>
  );
}
/*
<Title>{dateSnack}</Title>
<Meal time="20:00" title="X-Tudo" status={"NEGATIVE"} />*/
