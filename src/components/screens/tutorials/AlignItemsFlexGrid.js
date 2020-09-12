import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';


class AlignItemsFlexGrid extends Component {
    render() {
        return(
            <View style = {Styles.aifg_container}>
                <View style = {Styles.aifg_first}>
                    <Text>FIRST</Text>
                </View>
                <View style = {Styles.aifg_second}>
                    <Text>SECOND</Text>
                </View>
                <View style = {Styles.aifg_third}>
                    <Text>THIRD</Text>
                </View>
            </View>
        );
    }
}


export default AlignItemsFlexGrid;