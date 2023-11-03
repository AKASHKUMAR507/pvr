import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import colors from '../styles/colors';

const ModalContentCard = ({ languageGenres, state }) => {
    const { languages, genres } = languageGenres
    const {selectedFiltered, setSelectedFiltered} = state

    return (
        <ModalContent style={{ width: '100%' }}>
            <Text style={{ paddingVertical: 8, fontSize: 16, fontWeight: '500', marginTop: 8, color: colors.Black }}>Language</Text>

            <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                {languages.map((item, index) => (
                    <TouchableOpacity onPress={() => setSelectedFiltered(item.language)} key={index} activeOpacity={0.5} style={[styles.filteredItem, { backgroundColor: selectedFiltered === item.language ? "#ffc40c" : null, }]} >
                        <Text style={styles.textBtn}>{item.language}</Text>
                    </TouchableOpacity>
                ))}
            </TouchableOpacity>

            <Text style={{ paddingVertical: 8, fontSize: 16, fontWeight: '500', marginTop: 8, color: colors.Black }}>Genres</Text>

            <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                {genres.map((item, index) => (
                    <TouchableOpacity onPress={() => setSelectedFiltered(item.language)} key={index} activeOpacity={0.5} style={[styles.filteredItem, { backgroundColor: selectedFiltered === item.language ? "#ffc40c" : null, }]} >
                        <Text style={styles.textBtn}>{item.language}</Text>
                    </TouchableOpacity>
                ))}
            </TouchableOpacity>


        </ModalContent>
    )
}

const Modal = ({
    state,
    languageGenres,
    visible,
    modalVisible,
    onHardwareBackPress = () => { },
    onTouchOutside = () => { },
    applyFilter = () => { },
}) => {

    return (
        <BottomModal
            onBackDropPress={() => modalVisible}
            swipeDirection={["up", "down"]}
            swipeThreshold={200}
            footer={
                <ModalFooter>
                    <Pressable onPress={applyFilter} style={styles.applyBtn} >
                        <Text style={styles.textBtn}>Apply</Text>
                    </Pressable>
                </ModalFooter>
            }
            modalTitle={<ModalTitle title="Filters" />}
            modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
            visible={visible}
            onHardwareBackPress={onHardwareBackPress}
            onTouchOutside={onTouchOutside}
        >
            <ModalContentCard languageGenres={languageGenres} state={state} />
        </BottomModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    filteredItem: {
        margin: 8,

        borderColor: colors.Gray,
        borderWidth: 1,

        borderRadius: 20,

        paddingVertical: 6,
        paddingHorizontal: 8
    },
    textBtn: {
        fontSize: 14,
        fontWeight: '500',

        color: colors.Black,

        letterSpacing: 1,
    },
    applyBtn: {
        paddingRight: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: 10,
        marginBottom: 30,
    }
})