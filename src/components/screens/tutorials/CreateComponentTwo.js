import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../assets/stylers/Styles';


class CreateComponentTwo extends Component {
    render() {
        return(
            <View style={Styles.cc_container}>
                <Text style={Styles.cc_title}>This is Component TWO</Text>
                <Text style={Styles.cc_title}>Component 2</Text>
            </View>
        );
    }
}


export default CreateComponentTwo;