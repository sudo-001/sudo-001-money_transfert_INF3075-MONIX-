import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeStack" component={HomeStack} />
        </Drawer.Navigator>
    )
}