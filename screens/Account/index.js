import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { globalStyle } from "../../styles/GlobalStyle";

export default function Account(props) {
    return (
        <ImageBackground source={require('../../assets/BG/home.png')} resizeMode="stretch" style={{ ...styles.wrapper, justifyContent: "space-around" }}>
            <ScrollView style={{ width: "100%", flex: 1 }}>

                {/* Credit Card */}
                <ImageBackground source={require('../../assets/BG/card.png')} resizeMode="stretch" style={styles.cardContainer}>
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Image source={require("../../assets/logo.png")} style={styles.logo} />

                        <View style={styles.number}>
                            <Text style={{ color: "#fff", fontSize: 15, }}>Card Number</Text>
                            <Text style={{ color: "#fff", width: "100%", fontSize: 25, fontWeight: "bold" }}>XXXX XXXX XXXX XXXX</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <View style={styles.infoSection}>
                                <Text style={{ color: "#fff", fontSize: 15 }}>Card Holder</Text>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>John doe</Text>
                            </View>

                            <View style={styles.infoSection}>
                                <Text style={{ color: "#fff", fontSize: 15 }}>Exp. Date</Text>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>10/25</Text>
                            </View>

                            <View style={styles.infoSection}>
                                <Text style={{ color: "#fff", fontSize: 15 }}>ccv</Text>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>123</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                {/* Title */}
                <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 20, textAlign: "center" }}>General Information</Text>

                {/* Form of personnal information */}
                <ScrollView style={styles.scrollView}>
                    <View style={{ width: "100%" }}>
                        <View>
                            <Text style={styles.inputTitle}>Username</Text>
                            <TextInput style={styles.input} placeholder="john doe"></TextInput>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.inputTitle}>Phone number</Text>
                            <TextInput style={styles.input} keyboardType="number-pad" placeholder="+237671779997"></TextInput>
                        </View>
                    </View>


                    <TouchableOpacity style={styles.confirmBtn}>
                        <Text style={styles.textBtn}>Confirm</Text>
                    </TouchableOpacity>

                </ScrollView>
            </ScrollView >
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: "5%",
    },
    cardContainer: {
        width: "100%",
        overflow: "hidden",
        borderRadius: 20,
        elevation: 10,
        marginTop: 20,
    },
    logo: {
        alignSelf: "flex-start",
        width: 50,
        height: 50,
    },
    number: {
        marginVertical: 20
    },
    infoContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    scrollView: {
        width: "100%",
        paddingHorizontal: 20,
    },
    input: {
        borderBottomWidth: 2,
        marginVertical: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    inputTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    confirmBtn: {
        backgroundColor: "#008000",
        marginLeft: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
    },
    textBtn: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center"
    },
})