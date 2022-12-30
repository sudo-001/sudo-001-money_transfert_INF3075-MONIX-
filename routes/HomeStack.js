import { useLinkProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import About from "../screens/About";
import Detail from "../screens/Detail";
import Home from "../screens/Home";
import Setting from "../screens/Setting";

const Stack = createNativeStackNavigator();

export default function HomeStack(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}