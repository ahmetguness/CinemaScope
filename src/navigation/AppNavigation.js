import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigation from "./AppStackNavigation";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
}
