import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";
import theme from "./src/theme";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
import { Statistic } from "@screens/Statistic";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded && <Routes />}
    </ThemeProvider>
  );
}
