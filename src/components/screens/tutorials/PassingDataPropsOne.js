import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';


class PassingDataPropsOne extends Component {
    render() {
        return(
            <View style={Styles.external_container}>
                <Text style={Styles.external_title}>Data get from Props: </Text>
                <Text style={Styles.passprops_title}>{this.props.title}</Text>
            </View>
        );
    }
}


export default PassingDataPropsOne;