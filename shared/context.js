import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useState } from "react";
import Auth from "../routes/Auth";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const ConnectedContext = createContext();

const Stack = createNativeStackNavigator();

export const ConnectedContextProvider = ({ children }) => {
    const [connected, setConnected] = useState(false);

    return (
        <ConnectedContext.Provider value={{ connected, setConnected }}>
            {connected == false ? (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                    }}>
                        <Stack.Screen name="Auth" component={Auth} />
                    </Stack.Navigator>
                </NavigationContainer>
            ) : (
                children
            )}
        </ConnectedContext.Provider>
    )
}