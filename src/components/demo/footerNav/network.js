import React from 'react';
import { View, Text, Image } from "react-native";
import styles from '../styles';
import MyNetwork from '../MyNetwork/Network';

export default class Network extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <MyNetwork />
        </View>
      );
    }
}
  