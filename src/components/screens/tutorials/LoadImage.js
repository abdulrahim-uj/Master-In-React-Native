import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';
import { ScrollView } from 'react-native-gesture-handler';


class LoadImage extends Component {
    render() {
        return(
            <View style={Styles.external_container}>
                <ScrollView style={Styles.scroll}>
                    <Text style={Styles.external_title}>Load image in three models</Text>
                    <Text style={Styles.external_title}>Model 1: Locally Load</Text>
                    <View style={Styles.container}>
                        <Image
                            style={Styles.apiUrl}
                            source={
                                require('../../../assets/images/background.png')
                            }
                        />
                        <Text>---------------------------------------</Text>
                    </View>
                    <Text style={Styles.external_title}>Model 2: From Internet</Text>
                    <View style={Styles.container}>
                        <Image
                            style={Styles.apiUrl}
                            source={
                                {
                                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                                }
                            }
                        />
                        <Text>---------------------------------------</Text>
                    </View>
                    <Text style={Styles.external_title}>Model 3: Data Image from Internet</Text>
                    <View style={Styles.container}>
                        <Image
                            style={Styles.apiUrl}
                            source={
                                {
                                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                                }
                            }
                        />
                        <Text>---------------------END------------------</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default LoadImage;