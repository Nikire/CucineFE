import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tutorial from "../pages/Tutorial/Tutorial";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tutorial" component={Tutorial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
