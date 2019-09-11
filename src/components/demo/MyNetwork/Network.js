import React from "react";
import { View, Image } from "react-native";
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import styles from '../styles';

import Company from './Company';
import People from './People';

const TabNavigator = createMaterialTopTabNavigator({
    companies: Company,
    people: People,
    }, {
            tabBarOptions: {
                activeTintColor: 'rgba(0, 173, 111, 1)',
                inactiveTintColor: 'black',
                indicatorStyle: { backgroundColor: 'rgba(0, 173, 111, 1)'},
                style: {
                    backgroundColor: 'white',

                }
            },
        }
    );

const AppNavigator = createAppContainer(TabNavigator);

export default class MyNetwork extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <AppNavigator />
            </View>
        );
    }
}
  