import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})