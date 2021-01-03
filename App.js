import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultShowScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{ title: "Github Search" }}
        />
        <Stack.Screen name="Details" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
