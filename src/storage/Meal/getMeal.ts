import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function getMeal(groupMeal: string) {
  try {
    const storage = await AsyncStorage.getItem(
      `${MEAL_COLLECTION}-${groupMeal}`
    );
    const meal: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    return meal;
  } catch (error) {
    throw error;
  }
}
