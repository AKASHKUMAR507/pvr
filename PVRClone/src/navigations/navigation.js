import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screens/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import fontSizes from '../styles/fonts';
import PlacesScreen from '../screens/placesscreen';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeScreenStack = () => {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name='HomeScreen' component={Home} options={{ headerShown: true, title: "", animation: 'slide_from_right' }} />
            <HomeStack.Screen name='Place' component={PlacesScreen} options={{ headerShown: true, title: "Places", animation: 'slide_from_right' }}/>
        </HomeStack.Navigator>
    )
}

const ProfileScreenStaack = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='ProfileScreen' component={Profile} options={{ headerShown: true, title: "", animation: 'slide_from_right' }} />
        </ProfileStack.Navigator>
    )
}

const options = {
    headerShown: false,
    tabBarLabelStyle: { color: 'black', ...fontSizes.heading_xsmall },
}

const TabBarIconHome = ({ focused }) => {
    return (
        <View>
            {
                focused ? <Image source={require('../assets/images/home_846551.png')} style={styles.tabBarIconStyle} /> :
                    <Image source={require('../assets/images/home_846449.png')} style={styles.tabBarIconStyle} />
            }
        </View>
    )
}
const TabBarIconProfile = ({ focused }) => {
    return (
        <View>
            {
                focused ? <Image source={require('../assets/images/user_1077114.png')} style={styles.tabBarIconStyle} /> :
                    <Image source={require('../assets/images/user_8647311.png')} style={styles.tabBarIconStyle} />
            }
        </View>
    )
}

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreenStack} options={{ ...options, tabBarLabel: "Home", tabBarIcon: ({ focused }) => <TabBarIconHome focused={focused} /> }} />
                <Tab.Screen name='Profile' component={ProfileScreenStaack} options={{ ...options, tabBarLabel: "Profile", tabBarIcon: ({ focused }) => <TabBarIconProfile focused={focused} /> }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({
    tabBarIconStyle: {
        height: 18,
        width: 18,
    },
})