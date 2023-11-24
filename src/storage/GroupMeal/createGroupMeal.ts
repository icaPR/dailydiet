import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getGroupsMeal } from "./getGroupsMeal";

export async function createGroupMeal(newGroup: string) {
  try {
    const storedGroups = await getGroupsMeal();

    const groupAlreadyExists = await storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw "Um grupo com esse nome já existe";
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
