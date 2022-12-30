import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import Setting from "../screens/Setting";

const Stack = createNativeStackNavigator();

export default function ModalInfo() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}