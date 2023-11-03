import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

const PlaceCardItem = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen', {item: item})}>
            <ImageBackground imageStyle={{ borderRadius: 8, opacity: 0.8 }} style={{ height: 150, width: 140 }} source={{ uri: item.image }}>
                <View style={{ flex: 1, marginLeft: 8, marginBottom: 8, justifyContent: 'flex-end' }}>
                    <Text style={styles.place}>{item.place}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default PlaceCardItem;

const styles = StyleSheet.create({
    place: {
        color: colors.White,
        fontSize: 16,
        letterSpacing: 1,

        fontWeight: '500',

        textAlign: 'left'
    }
})