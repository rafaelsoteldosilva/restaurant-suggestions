import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import { navigationRef } from "./src/helpers/rootNavigation";

const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer ref={navigationRef}>
         <Stack.Navigator initialRouteName={"Search"}>
            <Stack.Screen
               name="Search"
               component={SearchScreen}
               options={{ title: "Business Search" }}
            />
            <Stack.Screen
               name="ResultsShow"
               component={ResultsShowScreen}
               options={{ title: "Results Show Search" }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;
