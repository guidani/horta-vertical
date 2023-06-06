import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoute from "./Stack.routes";

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
        name="Home"
        component={StackRoute}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
        }}
      />
    </Drawer.Navigator>
  );
}
