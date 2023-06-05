import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroHorta from "../Views/CadastroHorta";
import CadastroHortalica from "../Views/CadastroHortalica";
import CadastroProprietario from "../Views/CadastroProprietario";
import SaudeCulturas from "../Views/SaudeCulturas";
import VisaoGeral from "../Views/VisaoGeral";

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator
      initialRouteName="VisaoGeral"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CadastroProprietario"
        component={CadastroProprietario}
        options={{
          headerTitle: "Cadastro Proprietário(a)",
        }}
      />
      <Stack.Screen
        name="CadastroHorta"
        component={CadastroHorta}
        options={{
          headerTitle: "Cadastro da horta",
        }}
      />
      <Stack.Screen
        name="CadastroHortalica"
        component={CadastroHortalica}
        options={{
          headerTitle: "Cadastro da hortaliça",
        }}
      />
      <Stack.Screen
        name="VisaoGeral"
        component={VisaoGeral}
        options={{
          headerTitle: "Visão Geral",
          headerTitleAlign: "center",
          header: () => null,
        }}
      />
      <Stack.Screen
        name="SaudeCulturas"
        component={SaudeCulturas}
        options={{
          headerTitle: "Saúde das culturas",
        }}
      />
    </Stack.Navigator>
  );
}
