import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UIProvider from "../Providers/UIProvider";
import { useAuthStore } from "../stores/useAuthStore";
import AuthRoutes from "./Auth.routes";
import StackRoute from "./Stack.routes";

export default function Routes() {
  const authenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <UIProvider>
          {/* <DrawerRoutes /> */}
          {!authenticated ? <AuthRoutes /> : <StackRoute />}
        </UIProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
