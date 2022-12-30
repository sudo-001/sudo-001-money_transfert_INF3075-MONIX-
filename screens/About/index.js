import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { globalStyle } from "../../styles/GlobalStyle";

export default function About() {
    return (
        <ImageBackground source={require("../../assets/BG/About.png")} resizeMode="cover" style={styles.AboutContainer}>
            <View style={styles.contentWrapper}>
                <Image source={require('../../assets/logo_name.png')} style={styles.img} />

                <Text style={styles.text}>We are a team of young developpers passionate by resolving problems with code and automating test by using required tools</Text>

                <View style={styles.followContainer}>
                    <Text style={styles.title}>Follow Us</Text>
                    <View style={styles.socialMedia}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/icons/Facebook.png')} style={styles.socialImg} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../../assets/icons/twitter.png')} style={{ ...styles.socialImg, marginHorizontal: 10 }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require('../../assets/icons/github.png')} style={styles.socialImg} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    AboutContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: "5%",
    },
    img: {
        alignSelf: "center",
        marginTop: 40,
    },
    text: {
        textAlign: "center",
        paddingHorizontal: 2,
        fontSize: 18,
        marginVertical: 20,
    },
    followContainer: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 6,
    },
    socialImg: {
        width: 45,
        height: 45,
    },
    socialMedia: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
})