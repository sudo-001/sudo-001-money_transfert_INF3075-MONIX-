import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { globalStyle } from "../../styles/GlobalStyle";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';



export default function SignUp(props) {
    return (
        <ImageBackground source={require('../../assets/BG/signup.png')} style={[styles.wrapper, styles.wrapper]} resizeMode="stretch">

            <View style={[styles.logoWrapper, styles.center]}>

                <Image source={require('../../assets/logo_name_white.png')} style={[styles.logo]} />
            </View>

            <View style={[styles.textContainer]}>
                <Text style={[styles.title]}>Sign Up</Text>


                <ScrollView style={styles.scrollView}>
                    <View style={[styles.textInputWrapper]}>
                        <AntDesign name="user" size={24} color="black" />
                        < TextInput style={[styles.textInput]} placeholder="Username" cursorColor={"#1A242E"} />
                    </View >

                    <View style={{ ...styles.textInputWrapper }}>
                        <AntDesign name="phone" size={24} color="black" />
                        <TextInput keyboardType="phone-pad" style={[styles.textInput]} placeholder="+237 671779997" cursorColor={"#1A242E"} />
                    </View>

                    <View style={[styles.textInputWrapper]}>
                        <AntDesign name="lock" size={24} color="black" />
                        <TextInput style={[styles.textInput]} placeholder="Password" cursorColor={"#1A242E"} />
                    </View>

                    <View style={[styles.textInputWrapper]}>
                        <AntDesign name="lock" size={24} color="black" />
                        <TextInput style={[styles.textInput]} placeholder="Confirm Password" cursorColor={"#1A242E"} />
                    </View>

                    <TouchableOpacity>
                        <Text style={{ ...globalStyle.btn, color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold", }}>Sign Up</Text>
                    </TouchableOpacity>


                </ScrollView >
                <View style={{ flexDirection: "row", marginBottom: 10, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 17, color: "grey" }}>You already have an account ? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                        <Text style={{ color: "blue", fontSize: 15, fontWeight: "bold" }}>sign in</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ImageBackground >

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    logoWrapper: {
        height: "50%",
        width: "100%",
    },
    logo: {
        height: 180,
        width: 180,
    },
    textContainer: {
        height: "50%",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: "5%",
        position: "relative",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1A242E",
    },
    subtitlle: {
        color: "grey",
        fontSize: 15,
        textAlign: "center",
    },
    textInputWrapper: {
        flexDirection: "row",
        width: "100%",
        position: "relative",
        marginVertical: 10,
    },
    textInput: {
        width: 250,
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: "#1A242E",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    img: {
        width: 40,
        height: 40,
    }
})