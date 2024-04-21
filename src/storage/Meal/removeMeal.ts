import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { getMeal } from "./getMeal";
import { getGroupsMeal } from "@storage/GroupMeal/getGroupsMeal";

export async function removeMeal(meal: MealStorageDTO) {
  try {
    const allMeal = await getMeal(meal.date);
    const mealRemoved = allMeal.filter(
      (mealStoraed) => mealStoraed.time !== meal.time
    );
    const allGroups = await getGroupsMeal();
    const groupRemoved = allGroups.filter(
      (groupStoraed) => groupStoraed !== meal.date
    );

    const storageGroup = JSON.stringify(groupRemoved);
    const storageMeal = JSON.stringify(mealRemoved);

    if (mealRemoved.length === 0) {
      if (groupRemoved.length === 0) {
        await AsyncStorage.removeItem(GROUP_COLLECTION);
        await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${meal.date}`);
      } else {
        await AsyncStorage.setItem(GROUP_COLLECTION, storageGroup);
        await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${meal.date}`);
      }
    } else {
      await AsyncStorage.setItem(
        `${MEAL_COLLECTION}-${meal.date}`,
        storageMeal
      );
    }
  } catch (error) {
    throw error;
  }
}
