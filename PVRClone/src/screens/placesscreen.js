import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import colors from '../styles/colors'
import shadows from '../styles/shadows'
import { Place } from '../contexts/usercontaxts'
import PlaceCardItem from '../components/placecard'

const places = [
    {
        id: "0",
        place: "Bangalore",
        image:
            "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "1",
        place: "Ahmedabad",
        image:
            "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "2",
        place: "Chennai",
        image:
            "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "3",
        place: "Delhi - NCR",
        image:
            "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "4",
        place: "Hyderabad",
        image:
            "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "5",
        place: "Kolkata",
        image:
            "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "6",
        place: "Jaipur",
        image:
            "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "7",
        place: "Lucknow",
        image:
            "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

const PlacesScreen = () => {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    
    const [allPlaces , setIAllPlaces] = useState(places);
    
    useEffect(() => {
        const filtered = allPlaces.filter((place) => place.place.toLowerCase().includes(search.toLowerCase()))
        setIAllPlaces(filtered)
    },[search])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerStyle: {
                backgroundColor: colors.White,
                ...shadows.shadowLight,
            },
            headerRight: () => <Text style={styles.text}>Change Location</Text>
        })
    }, [])

    const { selectedCiry, setSelectedCity } = useContext(Place);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <TextInput placeholder='Search Place' placeholderTextColor={colors.Black} style={{ letterSpacing: 1, flex: 1 }} value={search} onChangeText={(text) => setSearch(text)} />
                <Image source={require('../assets/images/search_6210104.png')} style={{ height: 18, width: 18 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 14, color: colors.Black }}>Selected City</Text>
                <Text style={{ fontSize: 14, color: colors.Black }}>{selectedCiry}</Text>
            </View>
            <View style={{ marginBottom: '20%' }}>
                {places.length > 0 &&
                    (
                        <FlatList
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 20, }}
                            data={allPlaces}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => <PlaceCardItem item={item} />}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                }
            </View>
        </SafeAreaView>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: colors.Black,
        letterSpacing: 1,
        textAlign: 'left',
        textTransform: 'none',
    },
    container: {
        flex: 1,
        paddingHorizontal: 14,
        backgroundColor: colors.White,

    },
    search: {
        justifyContent: 'space-between',
        alignItems: 'center',

        flexDirection: 'row',

        backgroundColor: colors.White,

        width: '100%',
        height: 40,

        borderWidth: 1,
        borderColor: colors.Gray20,
        borderRadius: 16,

        paddingHorizontal: 8,
        marginVertical: 8,

        ...shadows.shadowExtraLight
    },
})