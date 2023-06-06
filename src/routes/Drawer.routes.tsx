import { createDrawerNavigator } from "@react-navigation/drawer";
import CadastroCultura from "../Views/CadastroCultura";
import Culturas from "../Views/Culturas";
import SaudeCulturas from "../Views/SaudeCulturas";
import VisaoGeral from "../Views/VisaoGeral";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Minha Horta",
        drawerActiveTintColor: "#1C1B1F",
        drawerActiveBackgroundColor: "#A2CE86",
      }}
    >
      <Drawer.Screen
        name="VisaoGeral"
        component={VisaoGeral}
        options={{
          title: "Visão Geral",
          drawerLabel: "Início",
        }}
      />
      <Drawer.Screen
        name="Culturas"
        component={Culturas}
        options={{
          title: "Culturas",
          drawerLabel: "Culturas",
        }}
      />
      <Drawer.Screen
        name="SaudeCulturas"
        component={SaudeCulturas}
        options={{
          title: "Saúde das culturas",
          drawerLabel: "Saúde das culturas",
        }}
      />
      <Drawer.Screen
        name="CadastroCulturas"
        component={CadastroCultura}
        options={{
          title: "Cadastro de cultura",
          drawerLabel: " ",
        }}
      />

      {/* <Drawer.Screen
        name="Home"
        component={StackRoute}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
        }}
      /> */}
    </Drawer.Navigator>
  );
}
