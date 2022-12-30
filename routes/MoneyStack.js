import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Money from "../screens/Money";
import Detail from "../screens/Detail";


const Stack = createNativeStackNavigator();

export default function MoneyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Money" component={Money} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}