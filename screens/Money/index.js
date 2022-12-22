import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Button, Modal, TouchableWithoutFeedback, ScrollView, TextInput, Keyboard, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../component/card";
import { notifications } from "../../shared";
import { globalStyle } from "../../styles/GlobalStyle";
import { Ionicons } from "@expo/vector-icons";

export default function Money(props) {
    const [isSendMoneyModal, setIsSendMoneyModal] = useState(false);

    return (
        <ImageBackground style={globalStyle.container} source={require("../../assets/BG/Money.png")} resizeMode="stretch">
            <View style={styles.Balance}>
                <Text style={styles.title}>Balance</Text>
                <Text style={styles.price}>122 233 000 Xaf</Text>
            </View>

            <TouchableOpacity style={globalStyle.btn} onPress={() => setIsSendMoneyModal(!isSendMoneyModal)}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Send Money</Text>
            </TouchableOpacity>

            <Modal visible={isSendMoneyModal} transparent={true} animationType="slide">

                <View style={styles.modalWrapper}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.closeBtn}>
                            <Ionicons name="md-close" size={40} color="black" onPress={() => setIsSendMoneyModal(!isSendMoneyModal)} />
                        </TouchableOpacity>

                        <ScrollView style={styles.scrollView}>
                            <View style={{ width: "100%" }}>
                                <View>
                                    <Text style={styles.inputTitle}>ID Of Recipient</Text>
                                    <TextInput style={styles.input} placeholder="yml671779997"></TextInput>
                                </View>

                                <View style={{ marginTop: 20 }}>
                                    <Text style={styles.inputTitle}>Amount</Text>
                                    <TextInput style={styles.input} keyboardType="numeric" placeholder="1000"></TextInput>
                                </View>
                            </View>

                            <View style={styles.btns}>
                                <TouchableOpacity style={styles.cancelBtn}>
                                    <Text style={styles.textBtn}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.confirmBtn}>
                                    <Text style={styles.textBtn}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <Text style={{ fontSize: 20, marginTop: 30, fontWeight: "bold" }}>History of transactions</Text>

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
        </ImageBackground >
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
    },
    modalWrapper: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    scrollView: {
        width: "100%",
        paddingHorizontal: 20
    },
    modalContainer: {
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        height: "70%",
        width: "100%",
        elevation: 5
    },
    closeBtn: {
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginVertical: 20
    },
    input: {
        borderBottomWidth: 2,
        marginVertical: 10,
        fontSize: 18
    },
    inputTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    btns: {
        width: "100%",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingVertical: 5
    },
    cancelBtn: {
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        fontSize: 20,

    },
    textBtn: {
        color: "#fff",
        fontWeight: "bold"
    },
    confirmBtn: {
        backgroundColor: "#008000",
        marginLeft: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    }
})