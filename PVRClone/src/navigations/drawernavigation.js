import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import home from '../screens/drawer/home';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='DrawerHome' component={home} options={{headerShown: true}} />
        </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})