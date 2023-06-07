import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroHorta from "../Views/CadastroHorta";
import CadastroProprietario from "../Views/CadastroProprietario";
import StackRoute from "./Stack.routes";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="CadastroProprietario"
      screenOptions={{
        header: () => null,
      }}
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
      {/* <Stack.Screen name="Home" component={StackRoute} /> */}
    </Stack.Navigator>
  );
}
