import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';


class DTSMyTrip extends Component {
    render() {
        return(
            <View style={Styles.external_container}>
                <Text style={Styles.external_title}>My Trip</Text>
            </View>
        );
    }
}


export default DTSMyTrip;