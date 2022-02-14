import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                FARMOC
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#1E3774'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'left',
        fontWeight: "bold",
    }
})

export default Header;