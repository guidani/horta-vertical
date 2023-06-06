import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CadastroCultura from "../Views/CadastroCultura";
import EditarCultura from "../Views/EditarCultura";
import SaudeCulturas from "../Views/SaudeCulturas";

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator
      initialRouteName="SaudeCulturas"
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen
        name="SaudeCulturas"
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
      {/* <Stack.Screen
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
        component={CadastroCultura}
        options={{
          headerTitle: "Cadastro da hortaliça",
        }}
      />

      <Stack.Screen
        name="SaudeCulturas"
        component={SaudeCulturas}
        options={{
          headerTitle: "Saúde das culturas",
        }}
      /> */}
    </Stack.Navigator>
  );
}
