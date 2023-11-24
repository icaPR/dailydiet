import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { getMeal } from "./getMeal";
import { getGroupsMeal } from "@storage/GroupMeal/getGroupsMeal";
import { createGroupMeal } from "@storage/GroupMeal/createGroupMeal";

export async function createMeal(meal: MealStorageDTO) {
  try {
    const storedGroupMeal = await getGroupsMeal();
    const groupMealAlreadyExists = storedGroupMeal.filter(
      (group) => group === meal.date
    );
    if (meal.date) {
      const storedMeal = await getMeal(meal.date);
      const storage = JSON.stringify([...storedMeal, meal]);
      if (groupMealAlreadyExists.length === 0) {
        await createGroupMeal(meal.date);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${meal.date}`, storage);
      } else {
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${meal.date}`, storage);
      }
    }
  } catch (error) {
    throw error;
  }
}
