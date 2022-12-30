import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { ConnectedContext } from "../../shared/context";
import { globalStyle } from "../../styles/GlobalStyle";

export default function Login(props) {
    const { connected, setConnected } = useContext(ConnectedContext);

    return (
        <ImageBackground source={require('../../assets/BG/signin.png')} style={[styles.wrapper, styles.wrapper]} resizeMode="stretch">

            <View style={[styles.logoWrapper, styles.center]}>
                <Image source={require('../../assets/logo_name_white.png')} style={[styles.logo]} />
            </View>

            <View style={[styles.textContainer]}>
                <Text style={[styles.title]}>Login</Text>
                <Text style={{ ...styles.subtitlle }}>Login to your account to start using the application</Text>


                <ScrollView style={styles.scrollView}>
                    <View style={[styles.textInputWrapper]}>
                        <Image source={require('../../assets/icons/username.png')} />
                        <TextInput style={[styles.textInput]} placeholder="Username" cursorColor={"#1A242E"} />
                    </View>

                    <View style={{ ...styles.textInputWrapper }}>
                        <Image source={require('../../assets/icons/password.png')} />
                        <TextInput style={[styles.textInput]} placeholder="Password" cursorColor={"#1A242E"} />
                    </View>

                    <TouchableOpacity onPress={() => { setConnected(!connected) }}>
                        <Text style={{ ...globalStyle.btn, color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold", }}>Sign In</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center" }}>

                        <Text style={{ fontSize: 17, color: "grey" }}>Dont have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={{ color: "blue", fontSize: 15, fontWeight: "bold" }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>

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
        marginTop: 20,
    },
    textInput: {
        width: 250,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: "#1A242E",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
})