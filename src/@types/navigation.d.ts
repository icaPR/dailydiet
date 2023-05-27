import { ColorStyle } from "./styled";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: {
        percentageStyle: ColorStyle;
        percentageValue: string;
        bestSequel?: string;
        allMeal?: string;
        mealInSide?: string;
        mealOutSide?: string;
      };
    }
  }
}
