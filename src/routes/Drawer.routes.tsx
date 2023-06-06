import { createDrawerNavigator } from "@react-navigation/drawer";
import Culturas from "../Views/Culturas";
import VisaoGeral from "../Views/VisaoGeral";
import StackRoute from "./Stack.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="VisaoGeral"
      screenOptions={{
        title: "Minha Horta",
        drawerActiveTintColor: "#1C1B1F",
        drawerActiveBackgroundColor: "#7CD8A4",
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
        name="SaudeDasCulturas"
        component={StackRoute}
        options={{
          title: "Saúde das culturas",
          drawerLabel: "Saúde das culturas",
        }}
      />
      {/* <Drawer.Screen
        name="CadastroCulturas"
        component={CadastroCultura}
        options={{
          title: "Cadastro de cultura",
          drawerLabel: " ",
        }}
      /> */}
      {/* <Drawer.Screen
        name="Home"
        component={StackRoute}
        options={{
          drawerLabel: " ",
          
        }}
      /> */}
    </Drawer.Navigator>
  );
}
