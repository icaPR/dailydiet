import { ColorStyle } from "./styled";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: { statistics: StatisticsProps; percentageStyle: ColorStyle };
      newMeal: undefined;
      messageScreen: boolean;
      cardMeal: { meal: MealStorageDTO };
      editCard: { meal: MealStorageDTO };
    }
  }
}
