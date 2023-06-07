import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import UIProvider from "../Providers/UIProvider";
import { useCadastroStore } from "../stores/useCadastroStore";
import SemCadastroRoutes from "./SemCadastro.routes";
import StackRoute from "./Stack.routes";

export default function Routes() {
  const { nome } = useCadastroStore((state) => state.cadastro);
  return (
    <NavigationContainer>
      <UIProvider>
        {/* <DrawerRoutes /> */}
        {nome === "" ? <SemCadastroRoutes /> : <StackRoute />}
      </UIProvider>
    </NavigationContainer>
  );
}
