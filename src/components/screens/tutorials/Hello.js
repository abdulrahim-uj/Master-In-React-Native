import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Hello extends Component {
    render() {
        return(
            <View>
                <Text>Hello React-native world!</Text>
                <Text>React.Fragment also another type of viewing component almost same like Text</Text>
                <Text>
                    returning a VIew or SafeAreaView tag for returning a value or something, 
                    Inside of this tag we can make anything texts, multimedia files, etc...
                </Text>
            </View>
        );
    }
}


export default Hello;