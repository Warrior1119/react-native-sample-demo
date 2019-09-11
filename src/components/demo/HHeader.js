import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default class HHeader extends React.PureComponent {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Icon style={styles.searchIco}
                    size = {25}
                    name="search1"
                    />
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>My Network</Text>
                </View>
                <View style={styles.headerRight}>
                    <Image source = {require('../../../assert/icon/account_circle.png')} resizeMode = 'cover' style = {styles.headerIco} />
                </View>
            </View>
        );
    }
}