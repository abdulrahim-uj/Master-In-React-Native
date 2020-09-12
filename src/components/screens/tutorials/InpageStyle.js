import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Screen1 extends Component {
    render() {
        return(
            <View style={Design.container}>
                <Text style={Design.title}>This is In-page Style</Text>
            </View>
        );
    }
}


const Design = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#000'
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
        color: 'red',
        textAlign: 'center',
    },
 });
 

export default Screen1;
