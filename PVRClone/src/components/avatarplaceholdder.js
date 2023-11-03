import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

const AvatarPlaceholder = ({ style = {}, image, seed }) => {
    const url = image ? { uri: image } : { uri: `https://api.dicebear.com/7.x/thumbs/png?seed=${seed}` }
    return (
        <Image source={url} style={[styles.avatarPlaceholder, { ...style }]} />
    )
}

export default AvatarPlaceholder

const styles = StyleSheet.create({
    avatarPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 48,
        height: 48,

        borderRadius: 24,

        backgroundColor: colors.DarkGray20,
    },
});