import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';


class ExternalStyle extends Component {
    render() {
        return(
            <View style={Styles.external_container}>
                <Text style={Styles.external_title}>This is Externally designed component</Text>
            </View>
        );
    }
}


export default ExternalStyle;