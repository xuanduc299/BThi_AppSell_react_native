import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProductDetailScreen from "../screens/ProductDetail/ProductDetailScreen";
import LoginScreen from "../screens/login/LoginScreen";
import SignUpScreen from "../screens/signUp/SignUpScreen";
import HomeTab from "./homeTab";
const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
