import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';
import SettingState from './SettingStateComponentOne';


class SettingStateComponent extends Component {

    state = {
        first: "State first content",
        second: "State second content",
        third: "State third content",
    }

    render() {
        return(
            <View style = {Styles.aifg_container}>
                <View style = {Styles.aifg_first}>
                    <Text>FIRST</Text>
                    <SettingState title={this.state.first} />
                </View>
                <View style = {Styles.aifg_second}>
                    <Text>SECOND</Text>
                    <SettingState title={this.state.second} />
                </View>
                <View style = {Styles.aifg_third}>
                    <Text>THIRD</Text>
                    <SettingState title={this.state.third} />
                </View>
            </View>
        );
    }
}


export default SettingStateComponent;