import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';

import axios from 'axios';

import FetchDataItemer from './ApiFetchDataItem';
import { ScrollView } from 'react-native-gesture-handler';


class ApiFetchData extends Component {

    state = {
        photoDict: []
    };
    
    componentDidMount() {
        console.warn("Start!");
        let photos_url = "http://demo3108890.mockable.io/imagedict";
        axios
            .get(photos_url)
            .then(response => {
                console.warn("Success!");
                this.setState({
                    photoDict: response.data
                });
            console.warn(this.state.photoDict);
            })
            .catch(function(error) {
                console.warn("Error!");
            });
    }

    renderPhotoDict() {
		return this.state.photoDict.map(photo => (
			<FetchDataItemer
				key = {photo.id}
				id = {photo.id}
				title = {photo.title}
				url = {photo.url}
				thumbnailurl = {photo.thumbnailUrl}
				album = {photo.albumId} 
			/>
		));
	}
    render() {
        return(
            <SafeAreaView style = {Styles.container}>
                <ScrollView style={Styles.scroll}>
                    {this.renderPhotoDict()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default ApiFetchData;