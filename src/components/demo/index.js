import React, { PureComponent } from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import HHeader from './HHeader';
import FFooter from './FFooter';
import styles from './styles';


class Demo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <HHeader />
                <FFooter />
            </View>
        )
    }
}

export default Demo;