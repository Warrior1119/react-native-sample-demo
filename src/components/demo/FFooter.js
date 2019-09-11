import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import styles from './styles';
import Browse from './footerNav/browse';
import Message from './footerNav/message';
import Network from './footerNav/network';
import News from './footerNav/news';
import Offer from './footerNav/offer';

const TabNavigator = createBottomTabNavigator({
    Browse: Browse,
    MyNetwork: Network,
    Offers: Offer,
    Messages: Message,
    News: News,
    }, {
            tabBarOptions: {
                activeTintColor: 'rgba(0, 173, 111, 1)',
                inactiveTintColor: 'black',
                indicatorStyle: { backgroundColor: 'rgba(0, 173, 111, 1)'},
                style: {
                    backgroundColor: 'white',
                }
            },
            defaultNavigationOptions: ({ navigation }) => ({

              tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Browse') {
                    iconName = require('../../../assert/icon/browse.png')
                } else if (routeName === 'MyNetwork') {
                  iconName = require('../../../assert/icon/connection.png');
                } else if (routeName === 'Offers') {
                  iconName = require('../../../assert/icon/Offers.png')
                } else if (routeName === 'Messages') {
                  iconName = require('../../../assert/icon/messages.png')
                } else if (routeName === 'News') {
                  iconName = require('../../../assert/icon/News.png')
                }
        
                // You can return any component that you like here!
                return <Image source={iconName} style = {styles.footerIco}/>;
              },
            }),
        }
);

const AppNavigator = createAppContainer(TabNavigator);

export default class FFooter extends React.PureComponent {
    render() {
        return (
            <View style={styles.footer}>
                <AppNavigator />
            </View>
        )
    }
}