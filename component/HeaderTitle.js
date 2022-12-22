import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableNativeFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

export default function HeaderComponent(props) {
    const actualRoute = useRoute();
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)} style={styles.image}>
                <Image source={{ uri: "https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={{ width: "100%", height: "100%", borderRadius: 100 }} />
            </TouchableOpacity>

            <Text style={styles.title}>{actualRoute.name}</Text>


            <Modal visible={isModalVisible} transparent={true} animationType="slide">
                <TouchableOpacity style={{ ...styles.closeBtn, height: "20%" }} onPress={() => setIsModalVisible(!isModalVisible)}>

                </TouchableOpacity>

                <View style={styles.modalContainer}>
                    <View>

                        <View style={{ flexDirection: "row", alignItems: "center", height: 60, justifyContent: "flex-start" }}>
                            <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)} style={{ ...styles.image, marginRight: 10 }}>
                                <Image source={{ uri: "https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={{ width: "100%", height: "100%", borderRadius: 100 }} />
                            </TouchableOpacity>

                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>John Doe</Text>
                                <Text>Number</Text>
                            </View>
                        </View>


                        <TouchableOpacity>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30, marginLeft: 10 }}>
                                <FontAwesome name="user" size={30} color="#0B162C" />
                                <Text style={{ marginLeft: 5, fontWeight: "500", fontSize: 17, letterSpacing: 1 }}>My Account</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ marginTop: 40, paddingLeft: 10, paddingVertical: 10, borderTopWidth: 2, }}>

                            <TouchableOpacity >
                                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 30 }}>
                                    <Ionicons name="ios-settings-sharp" size={30} color="#0B162C" />
                                    <Text style={{ marginLeft: 5, fontWeight: "500", fontSize: 17, letterSpacing: 1 }}>Setting</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Ionicons name="information-circle-sharp" size={30} color="#0B162C" />
                                    <Text style={{ marginLeft: 5, fontWeight: "500", fontSize: 17, letterSpacing: 1 }}>About Us</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: "100%",
        width: "100%",
        alignItems: "center",
        paddingVertical: 1,
    },
    image: {
        width: "17%",
        borderRadius: 100,
        height: "100%",
        elevation: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        width: "80%",
        paddingLeft: 30

    },
    modalContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "80%",
        elevation: 10,
        padding: 20,
    }
})