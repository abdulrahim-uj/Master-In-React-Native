/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import Explore from './src/components/screens/tutorials/DTSExplore';
import Mytrip from './src/components/screens/tutorials/DTSMyTrip';
import Favorite from './src/components/screens/tutorials/DTSFavorite';
import Profile from './src/components/screens/tutorials/DTSProfile';

//COMPONENT FOR DRAWER NAVIGATION
import Screen1 from './src/components/screens/drawers/Screen1';
import Screen2 from './src/components/screens/drawers/Screen2';
import Screen3 from './src/components/screens/drawers/Screen3';
//COMPONENT FOR DRAWER NAVIGATION WITH TUTORIALS STEPS
import HelloWorld from './src/components/screens/tutorials/Hello';
import InlineStyler from './src/components/screens/tutorials/InlineStyle';
import InpageStyler from './src/components/screens/tutorials/InpageStyle';
import ExternalStyler from './src/components/screens/tutorials/ExternalStyle';
import AlignItemsFlexGrider from './src/components/screens/tutorials/AlignItemsFlexGrid';
import CreateNewComponenter from './src/components/screens/tutorials/CreateComponentOne';
import PassingDataPropser from './src/components/screens/tutorials/PassingDataProps';
import SettingStater from './src/components/screens/tutorials/SettingStateComponent';
import UpdateStater from './src/components/screens/tutorials/UpdateStateComponent';
import ApiDataFetcher from './src/components/screens/tutorials/ApiFetchData';
import ImageLoader from './src/components/screens/tutorials/LoadImage';
import Navigationer from './src/components/screens/tutorials/Navigations';
import DesignTemplateSearcher from './src/components/screens/tutorials/DesignTemplateSearch';
//COMPONENT FOR MATERIAL TOP/ BOTTOM TAB NAVIGATION
import Tab1 from './src/components/screens/tabs/Tab1';
import Tab2 from './src/components/screens/tabs/Tab2';
import Tab3	from './src/components/screens/tabs/Tab3';
//COMPONENT FOR STACK NAVIGATION
import HomePage from './src/components/Home';
import Detail from './src/components/Detail';
//IMPORTS FOR WORKING REACT-NAVIGATION
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';
//IMPORT FROM REACT-NAVIGATION FOR STACK NAVIGATOR
import { createStackNavigator } from '@react-navigation/stack';
//IMPORT FROM REACT-NAVIGATION FOR DRAWER NAVIGATOR
import { createDrawerNavigator } from '@react-navigation/drawer';
//IMPORT FROM REACT-NAVIGATION FOR MATERIAL BOTTOM TAB NAVIGATOR
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//IMPORT FROM REACT-NAVOGATION FOR MATERIAL TOP TAB NAVIGATOR
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//IMPORT FROM REACT-NATIVE VECTOR ICONS FOR MATERIAL COMMUNITY ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//IMPORT FROM REACT-NATIVE VECTOR ICONS FOR IONIC ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();     //CONSTANT VARIABLE FOR DRAWER NAVIGATOR
const Stack = createStackNavigator();       //CONSTANT VARIABLE FOR STACK NAVIGATOR
const MaterialBottomTabs = createMaterialBottomTabNavigator();      //CONSTANT VARIABLE FOR BOTTOM TAB NAVIGATOR
const MaterialTopTabs = createMaterialTopTabNavigator();        //CONSTANT VARIABLE FOR TOP TAB NAVIGATOR

 

export default class App extends Component {
    //FOR STACK NAVIGATOR WITH THE DRAWER
    createHomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    children={this.createDrawer}    //CHILD VARIABLE AS DRAWER NAVIGATOR JSX FUNCTION
                    options={
                        ({
                            navigation
                        }) => ({
                            title: "Master in React-Native",
                            headerStyle: {
                                backgroundColor: '#8E44AD',
                                height: 50,
                            },
                            headerTintColor: '#fff',
                            headerShown: false,     //TO HIDE HEADER BAR FOR ALL SCREENS AND THE CURRENT SCREEN ALSO
                            headerTitleStyle: {
                                fontWeight: 'normal',
                                fontStyle: 'italic',
                            },
                            headerLeft: () => 
                                <MaterialCommunityIcons 
                                    onPress={
                                        () =>
                                            navigation.dispatch(DrawerActions.toggleDrawer())
                                    }
                                    style={
                                        [
                                            {
                                                color: '#fff',
                                                marginLeft: 8
                                            }
                                        ]
                                    }
                                    size={24}
                                    name={'menu'}
                                />
                        })
                    } 
                />
                <Stack.Screen 
                    name="Detail" 
                    component={Detail}
                    options={
                        {
                            title: "Details Screen",
                            // headerShown: false,
                            headerStyle: {
                                backgroundColor: '#8E44AD',
                                height: 35,
                            },
                        }
                    }
                />
                <Stack.Screen 
                    name="Bottom Tabs" 
                    children={this.createBottomTabs} 
                    options={
                        {
                            // headerShown: false,
                        }
                    }
                />
                <Stack.Screen 
                    name="Top Tabs"
                    component={this.createTopTabs}
                    options={
                        {
                            // headerShown: false,
                        }
                    }
                />
            </Stack.Navigator>
        );
    }
       
    createDrawer = () => {
        return (
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="MainPage" 
                    component={HomePage}
                    options={
                        {
                            drawerLabel: "Home",
                            drawerIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'home'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Hello World"
                    component={HelloWorld}
                    options={
                        {
                            drawerLabel: "Hello World",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Inline Style"
                    component={InlineStyler}
                    options={
                        {
                            drawerLabel: "In-line Style",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Inpage Style"
                    component={InpageStyler}
                    options={
                        {
                            drawerLabel: "In-Page Style",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="External Style"
                    component={ExternalStyler}
                    options={
                        {
                            drawerLabel: "External Styling",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Align Items Flex Grid"
                    component={AlignItemsFlexGrider}
                    options={
                        {
                            drawerLabel: "Flex-Grid",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Create New Component One & Two"
                    component={CreateNewComponenter}
                    options={
                        {
                            drawerLabel: "Create New Component",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Passing Data To Props"
                    component={PassingDataPropser}
                    options={
                        {
                            drawerLabel: "Data Pass Props",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5 
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Setting State to Component"
                    component={SettingStater}
                    options={
                        {
                            drawerLabel: "Setting State Component",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Update State of Component"
                    component={UpdateStater}
                    options={
                        {
                            drawerLabel: "Updating State Component",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Data Fetch From An Api With Icons"
                    component={ApiDataFetcher}
                    options={
                        {
                            drawerLabel: "Icons & API Data",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Image Loading"
                    component={ImageLoader}
                    options={
                        {
                            drawerLabel: "Image Loading",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color:'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="React-Navigation"
                    component={Navigationer}
                    options={
                        {
                            drawerLabel: "Navigation's",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen
                    name="Design Template Search Input"
                    component={this.createBottomTabs1}
                    options={
                        {
                            drawerLabel: "Design Template 1",
                            drawerIcon: () =>
                                (
                                    <FontAwesome5
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'book-reader'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Contacts" 
                    component={Screen1} 
                    options={
                        {
                            drawerLabel: "Contacts",
                            drawerIcon: () =>
                                (
                                    <MaterialCommunityIcons
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'contacts'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Favorites" 
                    component={Screen2} 
                    options={
                        {
                            drawerLabel: "Favorites",
                            drawerIcon: () =>
                                (
                                    <MaterialCommunityIcons
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'heart'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Settings" 
                    component={Screen3} 
                    options={
                        {
                            drawerLabel: "Settings",
                            drawerIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'settings-outline'}
                                    />
                                )
                        }
                    }    
                />
            </Drawer.Navigator>
        );
    }

    createBottomTabs1 = () => {
        
        return (
            <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen 
                    name="Explorer"
                    component={Explore}
                    options={
                        {                      
                            tabBarLabel: "Explore",
                            tabBarBadge: 1,
                            tabBarColor: "#009387",
                            tabBarIcon: () =>
                                (
                                    <MaterialIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff',
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'explore'}
                                    />
                                )
                        }
                    }
                />
                <MaterialBottomTabs.Screen 
                    name="My Trips"
                    component={Mytrip}
                    options={
                        {
                            tabBarLabel: 'My Trip',
                            tabBarColor: "#1f65ff",
                            tabBarIcon: () =>
                                (
                                    <MaterialIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'flight'}
                                    />
                                )
                        }
                    }
                />
                <MaterialBottomTabs.Screen 
                    name="Favorite Places"
                    component={Favorite}
                    options={
                        {
                            tabBarLabel: 'Favorites',
                            tabBarColor: "#694fad",
                            tabBarIcon: () =>
                                (
                                    <MaterialIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'favorite'}
                                    />
                                )
                        }
                    }
                />
                <MaterialBottomTabs.Screen 
                    name="Profile View"
                    component={Profile}
                    options={
                        {
                            tabBarLabel: 'Profile',
                            tabBarColor: "#d02860",
                            tabBarIcon: () =>
                                (
                                    <MaterialIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'person'}
                                    />
                                )
                        }
                    }
                />
            </MaterialBottomTabs.Navigator>
        );
    }
       
    createBottomTabs = () => {
        return (
            <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen 
                    name="Tab1"
                    style={
                        {
                            marginBottom: 16
                        }
                    }
                    component={Tab1}
                    options={
                        {
                            tabBarLabel: "Home",
                            tabBarIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'home'}
                                    />
                                )
                        }
                    }
                />
                <MaterialBottomTabs.Screen 
                    name="Tab2"
                    component={Tab2}
                    options={
                        {
                            tabBarLabel: 'Profile',
                            tabBarIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'human'}
                                    />
                                )
                        }
                    }
                />
                <MaterialBottomTabs.Screen 
                    name="Tab3"
                    component={Tab3}
                    options={
                        {
                            tabBarLabel: 'Map',
                            tabBarIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'map'}
                                    />
                                )
                        }
                    }
                />
            </MaterialBottomTabs.Navigator>
        );
    }

    createTopTabs = (props) => {
            
        return(
            <MaterialTopTabs.Navigator tabBarOptions={{ showIcon: true }}>
                <MaterialTopTabs.Screen 
                    name="Tab1"
                    component={Tab1}
                    options={
                        {
                            title: props.route.params.name,
                            tabBarLabel: "Help-Desk",
                            tabBarIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'red'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'headset-outline'}
                                    />
                                )
                        }
                    }
                />
                <MaterialTopTabs.Screen 
                    name="Tab2"
                    component={Tab2}
                    options={
                        {
                            tabBarLabel: "Clip board",
                            tabBarIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'red'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'clipboard-outline'}
                                    />
                                )
                        }
                    }
                />
                <MaterialTopTabs.Screen 
                    name="Tab3"
                    component={Tab3}
                    options={
                        {
                            tabBarLabel: "Authent",
                            tabBarIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'red'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'finger-print-outline'}
                                    />
                                )
                        }
                    }
                />
            </MaterialTopTabs.Navigator>
        );
    }

    render() {
        
        return(
            //NAVIGATION CONTAINER
            <NavigationContainer>       
                {this.createHomeStack()}    
            </NavigationContainer>
        );
    }
}