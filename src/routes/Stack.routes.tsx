import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroCultura from "../Views/CadastroCultura";
import CadastroHorta from "../Views/CadastroHorta";
import Culturas from "../Views/Culturas";
import EditarCultura from "../Views/EditarCultura";
import SaudeCulturas from "../Views/SaudeCulturas";
import VisaoGeral from "../Views/VisaoGeral";

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator initialRouteName="VisaoGeral">
      <Stack.Screen
        name="VisaoGeral"
        component={VisaoGeral}
        options={{
          headerTitle: "Visão Geral",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="SaudeDasCulturas"
        component={SaudeCulturas}
        options={{
          headerTitle: "Saúde das Culturas",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CadastroCultura"
        component={CadastroCultura}
        options={{
          headerTitle: "Cadastro Cultura",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="EditarCultura"
        component={EditarCultura}
        options={{
          headerTitle: "Editar Cultura",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Culturas"
        component={Culturas}
        options={{
          headerTitle: "Culturas",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="CadastroHorta"
        component={CadastroHorta}
        options={{
          headerTitle: "Cadastro Horta",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
