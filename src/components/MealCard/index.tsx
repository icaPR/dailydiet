import { Meal } from "@components/Meal";
import { Container, Title } from "./styles";
import { useEffect, useState } from "react";
import { getMeal } from "@storage/Meal/getMeal";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { useNavigation } from "@react-navigation/native";

type Props = {
  meal: MealStorageDTO;
};

export function MealCard({ meal }: Props) {
  const navigation = useNavigation();
  function handleCardMeal(meal: MealStorageDTO) {
    navigation.navigate("cardMeal", { meal });
  }

  return (
    <Container>
      {meal.status ? (
        <Meal
          time={meal.time}
          status={"POSITIVE"}
          title={meal.nameMeals}
          navigation={() => handleCardMeal(meal)}
        />
      ) : (
        <Meal
          time={meal.time}
          status={"NEGATIVE"}
          title={meal.nameMeals}
          navigation={() => handleCardMeal(meal)}
        />
      )}
    </Container>
  );
}
