import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UIProvider from "../Providers/UIProvider";
import { useCadastroStore } from "../stores/useCadastroStore";
import AuthRoutes from "./Auth.routes";
import StackRoute from "./Stack.routes";

export default function Routes() {
  const { nome } = useCadastroStore((state) => state.cadastro);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <UIProvider>
          {/* <DrawerRoutes /> */}
          {nome === "" ? <AuthRoutes /> : <StackRoute />}
        </UIProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
