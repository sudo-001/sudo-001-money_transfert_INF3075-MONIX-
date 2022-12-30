import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { globalStyle } from "../../styles/GlobalStyle";
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from "../../shared/context";

export default function Setting() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <ImageBackground style={styles.container} resizeMode="cover" source={require("../../assets/BG/setting.png")}>
            <View style={styles.themeContainer}>
                <Text style={{ ...styles.text, marginVertical: 30 }}>Thème :</Text>

                <View style={styles.toggleThemeContainer}>

                    <TouchableOpacity onPress={() => { setTheme("light") }}>
                        <Ionicons name="sunny-outline" size={30} color="#1A242E" />
                    </TouchableOpacity>

                    <View style={styles.toggleTheme}>
                        <View style={[styles.toggleThemeDark, theme == "light" ? styles.toggleThemeDarkNull : styles.toggleThemeDarkFull]} />
                    </View>

                    <TouchableOpacity onPress={() => setTheme("dark")}>
                        <Ionicons name="ios-moon" size={24} color="#1A242E" />
                    </TouchableOpacity>

                </View>
            </View>

            {/*<View>
                 <Text style={styles.text}>Language :</Text> 
            </View> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
    },
    themeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        alignSelf: "flex-start",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    toggleThemeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    toggleTheme: {
        width: 70,
        borderWidth: 1,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#fff",
        borderColor: "#cacaca",
        position: "relative",
        overflow: "hidden",
        marginHorizontal: 10,
    },
    toggleThemeDark: {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        backgroundColor: "#1A242E",
        borderRadius: 20,
        zIndex: 10,
        transition: "width",
        transitionDuration: 600,
    },
    toggleThemeDarkFull: {
        width: "100%",
    },
    toggleThemeDarkNull: {
        width: "0%",
    }
})