import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../component/card";
import { notifications } from "../../shared";
import { globalStyle } from "../../styles/GlobalStyle";

export default function Home(props) {
    return (
        <ImageBackground source={require("../../assets/BG/home.png")} resizeMode="stretch" style={globalStyle.container}>
            <View style={styles.Balance}>
                <Text style={styles.title}>Balance</Text>
                <Text style={styles.price}>122 233 000 Xaf</Text>
            </View>

            <Text style={{ fontSize: 20, marginTop: 30, fontWeight: "bold" }}>Last transactions</Text>

            <View style={styles.LastTransaction}>
                <FlatList
                    data={notifications}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => props.navigation.navigate("Detail", { itemId: item.id })}>
                            <Card>
                                <Image source={{ uri: item.picture }} style={styles.image} />
                                <View style={styles.text}>
                                    <Text style={styles.nom}>{item.name}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>

                                {item.type === "receive" ? (
                                    <Text style={{ color: "green", fontSize: 15, fontWeight: "bold" }}>+ {item.amount}</Text>
                                ) : (
                                    <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>- {item.amount}</Text>
                                )}
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    Balance: {
        marginTop: 10,
        elevation: 2,
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        width: "95%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
    },
    text: {

    },
    price: {
        color: "gray",
        fontWright: "600",
        fontSize: 20,
        marginTop: 5,
    },
    LastTransaction: {
        flex: 1,
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopStyle: "inset",
        borderTopColor: "#cecece",
    },
    nom: {
        fontWeight: "bold",
    },
    image: {
        borderRadius: 100,
        borderWidth: 1,
        width: "15%",
        height: "100%",
    }
})