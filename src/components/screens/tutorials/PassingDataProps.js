import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';
import PassingData from './PassingDataPropsOne';


class PassingDataProps extends Component {
    render() {
        return(
            <View style={Styles.container}>
                <Text style={Styles.cc_title}>Passing Data to Props</Text>
                <Text style={Styles.cc_title}>What you see on below its Data send from this file to another file and its showing </Text>

                <PassingData title="This is Passing Data to imported component via PROPS"/>
            </View>
        );
    }
}


export default PassingDataProps;