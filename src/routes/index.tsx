import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import UIProvider from "../Providers/UIProvider";
import StackRoute from "./Stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <UIProvider>
        <StackRoute />
      </UIProvider>
    </NavigationContainer>
  );
}
