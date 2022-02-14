import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Head';

export default class Fruit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        return fetch ('https://dataapi.moc.go.th/gis-product-prices?product_id=P14022&from_date=2018-01-01&to_date=2018-02-28')
            .then ((response) => response.json())
            .then ((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.product_name,
                })
                console.log("Data: ", this.state.dataSource)
                console.log("isloading: ", this.state.isLoading)
            })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                
                <View style={styles.text}>
                    <Header/>
                    <Text>Loading Data...</Text>
                </View>
            )
        }
        else {

            return (
                <View style={styles.container}>
                    <Header/>
                    <Text style={styles.topic}>ผลไม้</Text>
                    <Text style={styles.textapi}>{this.state.dataSource}</Text>
                </View>
            );

        }
    }
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