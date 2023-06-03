import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroHorta from "../Views/CadastroHorta";
import CadastroProprietario from "../Views/CadastroProprietario";

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator
      initialRouteName="CadastroPropietario"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CadastroHorta" component={CadastroHorta} />
      <Stack.Screen
        name="CadastroProprietario"
        component={CadastroProprietario}
      />
    </Stack.Navigator>
  );
}
