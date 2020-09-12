import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class ApiFetchDataItem extends Component {

    render() {
        return(
            <View style = {Styles.apiContainer}>
                <Image
                    style = {Styles.apiUrl}
                    source = {{
                        uri: this.props.url
                    }}
                />
                <Text>Album Code: {this.props.album}</Text>
                <Text>Key Code: {this.props.thumbnailurl}</Text>
                <Text>Title Name: {this.props.title}</Text>
                <FontAwesome5 
                    name="rocket" 
                    size={30} 
                    color="red"
                />
           </View>
        );
    }
}

export default ApiFetchDataItem;