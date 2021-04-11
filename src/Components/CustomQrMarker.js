import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import colors from '../styles/colors'

export default function CustomQrMarker() {
    return (
        <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
    )
}

const styles = StyleSheet.create({
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor:colors.green,
        backgroundColor: 'transparent'
      }
})

