import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { notifications } from "../../shared";
import { globalStyle } from "../../styles/GlobalStyle";

export default function Detail(props) {
    const { itemId } = props.route.params;
    const [item, setItem] = useState([])

    useEffect(() => {

        setItem(...notifications.filter(item => item.id === itemId))
    }, [])

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.picture }} style={styles.Image} />
            {item.type === "receive" ? (
                <View style={{ width: "100%" }}>
                    <Text style={styles.identification}>Name of receiver : <Text style={styles.name}>{item.name}</Text></Text>
                    <Text style={{ paddingHorizontal: 10, }}>Amount : <Text style={{ color: "green", fontSize: 15, fontWeight: "bold" }}> + {item.amount}</Text></Text>
                </View>
            ) : (
                <View style={{ width: "100%" }}>
                    <Text style={styles.identification}>Name of sender : <Text style={styles.name}>{item.name}</Text></Text>
                    <Text style={{ paddingHorizontal: 10, }}>Amount : <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}> - {item.amount}</Text></Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    Image: {
        width: "100%",
        height: "50%",
    },
    identification: {
        backgroundColor: "black",
        width: "100%",
        paddingVertical: 5,
        fontSize: 20,
        color: "#fff",
        paddingHorizontal: 10,
    },
    name: {
        fontWeight: "bold",
    }
})