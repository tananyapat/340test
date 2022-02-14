import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Head';

const Home = () => {
  return (
    <View style={styles.container}>
        <Header/>
        <Text>This is News Page</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topic: {
        color: 'black',
        fontSize: 40,
        paddingLeft: 20,
        paddingTop: 10,
        fontWeight: "bold",
    },
})

export default Home;