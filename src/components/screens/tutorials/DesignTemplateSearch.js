import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';

import Explore from './DTSExplore';
import Mytrip from './DTSMyTrip';
import Favorite from './DTSFavorite';
import Profile from './DTSProfile';

import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
    DrawerActions
  } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//IMPORT FROM REACT-NATIVE VECTOR ICONS FOR MATERIAL COMMUNITY ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//IMPORT FROM REACT-NATIVE VECTOR ICONS FOR IONIC ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const MaterialBottomTabs = createMaterialBottomTabNavigator();      //CONSTANT VARIABLE FOR BOTTOM TAB NAVIGATOR

class DesignTemplateSearch extends Component {

    
    render() {
        return(
            <View>
                <Text>dfgdgdg</Text>
            </View>
        );
    }
}


export default DesignTemplateSearch;