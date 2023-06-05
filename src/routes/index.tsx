import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import UIProvider from "../Providers/UIProvider";
import DrawerRoutes from "./Drawer.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <UIProvider>
        <DrawerRoutes />
      </UIProvider>
    </NavigationContainer>
  );
}
