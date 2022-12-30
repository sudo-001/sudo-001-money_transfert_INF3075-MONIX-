import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Authentification/login";
import SignUp from "../screens/Authentification/Signup";

const Stack = createNativeStackNavigator();

export default function Auth() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
        </Stack.Navigator>
    )
}