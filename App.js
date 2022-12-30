import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeStack from './routes/HomeStack';
import MoneyStack from './routes/MoneyStack';
import Notification from './screens/Notifications';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Account from "./screens/Account";
import HeaderComponent from "./component/HeaderTitle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./screens/About";
import Setting from "./screens/Setting";
import { ConnectedContextProvider, ThemeContextProvider } from "./shared/context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App(props) {



    return (
        <ConnectedContextProvider>

            <ThemeContextProvider>

                <NavigationContainer>
                    <Tab.Navigator screenOptions={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: "#3B556D",
                        },
                        headerTitle: (props) => <HeaderComponent {...props} />,

                    }}>
                        <Tab.Screen name="HomeStack" component={HomeStack} options={{
                            tabBarLabel: ({ focused }) => focused === false ? "" : (<Text style={styles.tabBarLabel}>Home</Text>),
                            tabBarIcon: ({ focused, color, size }) => focused === false ? (
                                <AntDesign name="home" color={color} size={size} />
                            ) : (
                                <Ionicons name="md-home" color="#0B162C" size={size} />
                            ),
                        }} />
                        <Tab.Screen name="MoneyStack" component={MoneyStack} options={{
                            tabBarLabel: ({ focused }) => focused === false ? "" : (<Text style={styles.tabBarLabel}>Wallet</Text>),
                            tabBarIcon: ({ focused, color, size }) => focused === false ? (
                                <Ionicons name="ios-wallet-outline" color={color} size={size} />
                            ) : (
                                <Ionicons name="ios-wallet" color="#0B162C" size={size} />
                            )
                        }} />
                        <Tab.Screen name="Notifications" component={Notification} options={{
                            tabBarLabel: ({ focused }) => focused === false ? "" : (<Text style={styles.tabBarLabel}>Notifications</Text>),
                            tabBarIcon: ({ focused, color, size }) => focused === false ? (
                                <Ionicons name="notifications-outline" color={color} size={size} />
                            ) : (
                                <Ionicons name="notifications" color="#0B162C" size={size} />
                            )
                        }} />
                        <Tab.Screen name="Account" component={Account} options={{
                            tabBarLabel: ({ focused }) => focused === false ? "" : (<Text style={styles.tabBarLabel}>Account</Text>),
                            tabBarIcon: ({ focused, color, size }) => focused === false ? (
                                <Ionicons name="man-outline" color={color} size={size} />
                            ) : (
                                <Ionicons name="man" color="#0B162C" size={size} />
                            )
                        }}

                        />

                    </Tab.Navigator>
                    <Stack.Group>

                        <Stack.Screen name="About" component={About} />
                        <Stack.Screen name="Setting" component={Setting} />
                    </Stack.Group>

                </NavigationContainer>
            </ThemeContextProvider>

        </ConnectedContextProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarLabel: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#0B162C",
        transitionDuration: 200,
        transitionDelay: 100,
    },
    tabBarIcon: {
        transitionDuration: 500,
    }
});
