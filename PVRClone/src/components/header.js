import { ImageBackground, StyleSheet, Text, View, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import shadows from '../styles/shadows'
import colors from '../styles/colors'

const Card = () => {
    return (
        <Pressable style={styles.cardContainer}>
            <View style={styles.cardItem}>
                <View>
                    <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>Releasing in 1 Day</Text>
                    <Text style={{ marginVertical: 5, fontSize: 16, color: "gray", fontWeight: "700" }}>CUSTODY</Text>
                    <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>U.A • TELUGU</Text>
                </View>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: colors.Black }}>BOOK</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

const Header = () => {
    return (
        <View style={{ marginBottom: 50, }}>
            <ImageBackground imageStyle={{}} style={{ height: 200 }} source={{ uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00022376.jpg?v=4" }}>
                <Card />
            </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",

        height: 90,
        width: "90%",

        padding: 10,
        top: 160,

        borderRadius: 5,
        marginLeft: "auto",
        marginRight: "auto",

        ...shadows.shadowLight
    },
    cardItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: "#ffc40c",

        padding: 10,
        borderRadius: 6,
        marginRight: 10,

        ...shadows.shadowExtraLight,
    }
})