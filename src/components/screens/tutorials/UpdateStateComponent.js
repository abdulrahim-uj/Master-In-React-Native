import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';
import UpdateState from './UpdateStateComponentOne';


class UpdateStateComponent extends Component {

    state = {
        first: "State first content",
        second: "State second content",
        third: "State third content",
    }

    render() {
        return(
            <View style = {Styles.aifg_container}>
                <TouchableOpacity 
                onPress ={
                    () => (
                        this.setState({
                            first: "Clicked",
                            second: "State second content",
                            third: "State third content",
                        })
                    )
                }
                style = {Styles.aifg_first}>
                    <Text>FIRST</Text>
                    <UpdateState title={this.state.first} />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress ={
                    () => (
                        this.setState({
                            first: "State first content",
                            second: "Clicked",
                            third: "State third content",
                        })
                    )
                }
                style = {Styles.aifg_second}>
                    <Text>SECOND</Text>
                    <UpdateState title={this.state.second} />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress ={
                    () => (
                        this.setState({
                            first: "State first content",
                            second: "State second content",
                            third: "Clicked",
                        })
                    )
                }
                style = {Styles.aifg_third}>
                    <Text>THIRD</Text>
                    <UpdateState title={this.state.third} />
                </TouchableOpacity>
            </View>
        );
    }
}


export default UpdateStateComponent;