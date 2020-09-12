import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../assets/stylers/Styles';
import ComponentTwo from '../tutorials/CreateComponentTwo';


class CreateComponentOne extends Component {
    render() {
        return(
            <View style={Styles.container}>
                <Text style={Styles.cc_title}>This is Component ONE</Text>
                <Text style={Styles.cc_title}>What you see on below its from Component TWO</Text>

                <ComponentTwo />
            </View>
        );
    }
}


export default CreateComponentOne;