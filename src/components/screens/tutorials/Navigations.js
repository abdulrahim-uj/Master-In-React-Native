import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';
import { ScrollView } from 'react-native-gesture-handler';


class Navigations extends Component {
    render() {
        return(
            <View style={Styles.external_container}>
                <ScrollView style={Styles.scroll}>
                    <Text style={Styles.external_title}>Already used the app</Text>
                    <Text style={Styles.external_title}>There are FOUR types of navigations Used in React Navigations</Text>
                    <Text style={Styles.external_title}>Stack/ Drawer/ BottomTabs/ TopTabs</Text>
                    <Text style={Styles.external_title}>Installation Methods</Text>
                    <Text style={Styles.external_title}>1. npm install @react-navigation/native</Text>
                    <Text style={Styles.external_title}>2. npm install @react-navigation/stack</Text>
                    <Text style={Styles.external_title}>3. npm install @react-navigation/drawer</Text>
                    <Text style={Styles.external_title}>4. npm install @react-navigation/material-bottom-tabs</Text>
                    <Text style={Styles.external_title}>5. npm install @react-navigation/material-top-tabs</Text>
                    <Text style={Styles.external_title}>6. npm install react-native-paper</Text>
                    <Text style={Styles.external_title}>7. npm install react-native-appearance</Text>
                    <Text style={Styles.external_title}>8. npm install react-native-reanimated 
                        react-native-gesture-handler 
                        react-native-screens 
                        react-native-safe-area-context 
                        @react-native-community/masked-view
                    </Text>
                    <Text style={Styles.external_title}>9. npm install --save react-native-gesture-handler react-native-reanimated react-native-screens</Text>
                    <Text style={Styles.external_title}>10. npm install --save react-native-vector-icons</Text>
                    <Text style={Styles.external_title}>11. npm install --save react-native-tab-view</Text>
                    <Text style={Styles.external_title}>12. npm install typescript</Text>
                    <Text style={Styles.external_title}>13. Make Link to these packages to React-Native Project</Text>
                    <Text style={Styles.external_title}>13.A. react-native link</Text>
                    <Text style={Styles.external_title}>13.B. react-native link react-native-reanimated</Text>
                    <Text style={Styles.external_title}>13.C. react-native link react-native-gesture-handler</Text>
                    <Text style={Styles.external_title}>14. If need to clear the catches and restart react-native</Text>
                    <Text style={Styles.external_title}>14.A. react-native start --reset-cache</Text>
                </ScrollView>
            </View>
        );
    }
}


export default Navigations;