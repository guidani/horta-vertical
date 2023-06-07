import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroHorta from "../Views/CadastroHorta";
import CadastroProprietario from "../Views/CadastroProprietario";

const Stack = createNativeStackNavigator();

export default function SemCadastroRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Cadastro Proprietario"
      // screenOptions={{
      //   header: () => null,
      // }}
    >
      <Stack.Screen
        name="CadastroProprietario"
        component={CadastroProprietario}
        options={{
          headerTitle: "Cadastro Proprietario",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CadastroHorta"
        component={CadastroHorta}
        options={{
          headerTitle: "Cadastro Cultura",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
