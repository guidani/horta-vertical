import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroProprietario from "../Views/auth/CadastroProprietario";

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
    </Stack.Navigator>
  );
}
