import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Usuarios from "../screens/Usuario/Usuario";

const Stack = createStackNavigator();

export default function UsuarioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="usuarios"
        component={Usuarios}
        options={{ title: "Usuarios" }}
      />
    </Stack.Navigator>
  );
}
