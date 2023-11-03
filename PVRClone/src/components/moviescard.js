import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import shadows from '../styles/shadows'

const MoviesCard = ({ item }) => {
    const url = 'https://image.tmdb.org/t/p/original'

    return (
        <SafeAreaView>
            <TouchableOpacity activeOpacity={0.8} style={styles.MoviesCardContainer}>
                <Image source={{ uri: `${url}${item?.item?.poster_path}` }} style={{ width: '100%', height: '70%', resizeMode: 'contain', borderRadius: 8, backgroundColor: colors.Gray20, }} />
                <View>
                    <Text numberOfLines={1} style={{color: colors.Black, fontSize: 16, }}>{item?.item?.title.substr(0, 20)}</Text>
                    <Text style={{color: colors.DarkGray, fontSize: 14,}}>U/A {item?.item?.original_language}</Text>
                </View>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: colors.Black,}}>BOOK</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default MoviesCard

const styles = StyleSheet.create({
    MoviesCardContainer: {
        flex: 1,

        justifyContent: 'center',
        marginHorizontal: 17,
        marginVertical: 10,

        borderRadius: 8,

        height: Dimensions.get('window').height / 2.5,
        width: (Dimensions.get('window').width - 80) / 2
    },
    btn: {
        backgroundColor: "#ffc40c",

        alignItems: 'center',
        justifyContent: 'center',

        padding: 10,
        borderRadius: 6,
        marginRight: 10,

        marginTop: 8,

        width: 80,

        ...shadows.shadowExtraLight,
    }
})