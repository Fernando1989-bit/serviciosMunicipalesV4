import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import ServiciosStack from "./ServicioStack";
import PagosStack from "./PagoStack";
import UsuariosStack from "./UsuarioStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="servicios"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680"
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="servicios"
          component={ServiciosStack}
          options={{ title: "Servicios" }}
        />
        <Tab.Screen
          name="usuarios"
          component={UsuariosStack}
          options={{ title: "Usuarios" }}
        />
        <Tab.Screen
          name="pagos"
          component={PagosStack}
          options={{ title: "Pagos" }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "usuarios":
      iconName = "account";
      break;
    case "servicios":
      iconName = "account-group";
      break;
    case "pagos":
      iconName = "account-check";
      break;
    
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
