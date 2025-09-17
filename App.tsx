import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BotProvider } from "./context/BotContext";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <BotProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </BotProvider>
  );
}
