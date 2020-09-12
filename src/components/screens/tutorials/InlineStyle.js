import React, { Component } from 'react';
import { View, Text } from 'react-native';


class InlineStyle extends Component {
    render() {
        return(
            <View style={{marginTop: 90}}>
                <Text style={{textAlign: 'center'}}>Hello React-native world!</Text>
                <Text style={{textTransform: 'uppercase', fontSize: 20, textAlign: 'center'}}>This is Inline Styling page</Text>
            </View>
        );
    }
}


export default InlineStyle;