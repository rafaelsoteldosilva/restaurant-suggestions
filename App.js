import "./ignoreWarnings";
import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./src/screens/MainScreen";
import ShowABusinessInfoScreen from "./src/screens/ShowABusinessInfoScreen";
import { navigationRef } from "./src/helpers/rootNavigation";

const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer ref={navigationRef}>
         <Stack.Navigator initialRouteName={"Search"}>
            <Stack.Screen
               name="Search"
               component={MainScreen}
               options={{ title: "Business Search" }}
            />
            <Stack.Screen
               name="ShowABusinessInfo"
               component={ShowABusinessInfoScreen}
               options={{ title: "Show a buisiness info" }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;
