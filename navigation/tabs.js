import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Fruit from "../components/Fruit";
import Home from '../components/Home';
import News from '../components/News';
import GraphP from '../components/Graph'

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" barStyle={{
            backgroundColor: '#1E3774'
        }}>
            <Tab.Screen name="News" component={News} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/icons/news.png')}
                            resizeMode="contain"
                            style={
                                {
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#ffff' : '#aaaa',
                                }
                            }
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={
                                {
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#ffff' : '#aaaa',
                                }
                            }
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen name="Graph" component={GraphP} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/icons/graph.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#ffff' : '#aaaa',
                            }}
                        />
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    IconStyle: {

    }
})
export default Tabs;