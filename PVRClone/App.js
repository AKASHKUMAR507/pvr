import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigations/navigation'
import { PlaceContext } from './src/contexts/usercontaxts'
import ModalPortal from "react-native-modals/dist/ModalPortal";

const App = () => {
  return (
    <PlaceContext>
      <Navigation />
      <ModalPortal />
    </PlaceContext>
  )
}

export default App

const styles = StyleSheet.create({}) 