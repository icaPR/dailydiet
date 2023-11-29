import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Statistic } from "@screens/Statistic";
import { NewMeal } from "@screens/NewMeal";
import { MessageScreen } from "@screens/Message";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="messageScreen" component={MessageScreen} />
    </Navigator>
  );
}
