import React, { Component } from 'react';
import { View, SafeAreaView, TextInput, Image, Text, ImageBackground } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


class DTSExplore extends Component {
    render() {
        return(
            <SafeAreaView style={Styles.dts_container}>
                <ScrollView>

                    <View style={Styles.dts_header}>
                        <View style={Styles.dts_searchform}>
                            <FontAwesome5Icon name="search" size={15} color="#000" />
                            <TextInput style={Styles.dts_searchform_textinput}  placeholder="Search Hear" />
                        </View>
                        <TouchableOpacity style={Styles.dts_profileview}>
                            <Image style={Styles.dts_profileimage} source={require('../../../assets/images/profile_image.jpg')} />
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.dts_discoverplaces}>
                        <View style={Styles.dts_maincardheader}>
                            <Text style={Styles.dts_maincardheadertitle}>
                                Discover new places
                            </Text>
                            <TouchableOpacity style={Styles.dts_maincardheaderbutton}>
                                <Text style={Styles.dts_maincardheaderbuttontext}>
                                    View All
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={Styles.dts_mainslider} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover10.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover2.jpeg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover3.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover4.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover5.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover6.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover7.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover8.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover9.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_mainslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_mainslideritemimgbackground}
                                    source={require('../../../assets/images/discover1.jpg')} resizeMode="stretch">
                                    <Text style={Styles.dts_mainsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={Styles.dts_explore}>
                        <View style={Styles.dts_maincardheader}>
                            <Text style={Styles.dts_maincardheadertitle}>
                                Explore New World
                            </Text>
                            <TouchableOpacity style={Styles.dts_maincardheaderbutton}>
                                <Text style={Styles.dts_maincardheaderbuttontext}>
                                    View All
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={Styles.dts_gridviewplaces}>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore1.jpg')}>
                                    <Text style={Styles.dts_griditemtext}>India</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore2.jpg')}>
                                    <Text style={Styles.dts_griditemtext}>Finland</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore3.jpeg')}>
                                    <Text style={Styles.dts_griditemtext}>Austria</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore4.jpg')}>
                                    <Text style={Styles.dts_griditemtext}>Switzerland</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore5.jpeg')}>
                                    <Text style={Styles.dts_griditemtext}>United States</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore2.jpg')}>
                                    <Text style={Styles.dts_griditemtext}>Japan</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore3.jpeg')}>
                                    <Text style={Styles.dts_griditemtext}>Europe</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore4.jpg')}>
                                    <Text style={Styles.dts_griditemtext}>China</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dts_griditem}>
                                <ImageBackground 
                                    style={Styles.dts_griditemimage}
                                    source={require('../../../assets/images/explore5.jpeg')}>
                                    <Text style={Styles.dts_griditemtext}>Canada</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.dts_savedplaces}>
                        <View style={Styles.dts_maincardheader}>
                            <Text style={Styles.dts_maincardheadertitle}>
                                Saved Places
                            </Text>
                            <TouchableOpacity style={Styles.dts_maincardheaderbutton}>
                                <Text style={Styles.dts_maincardheaderbuttontext}>
                                    View All
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={Styles.dts_bottomslider} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover10.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover2.jpeg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover3.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover4.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover5.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover6.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover7.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover8.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover9.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55" />
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                            <View style={Styles.dts_bottomslideritem}>
                                <ImageBackground 
                                    style={Styles.dts_bottomslideritemimgbackground}
                                    source={require('../../../assets/images/discover1.jpg')} resizeMode="stretch">
                                    <FontAwesome5Icon 
                                        style={Styles.dts_bottomslidericon} 
                                        name="bookmark" 
                                        size={15} 
                                        color="#FF2D55"/>
                                    <Text style={Styles.dts_bottomsliderimagetext}>Discover Place</Text>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default DTSExplore;