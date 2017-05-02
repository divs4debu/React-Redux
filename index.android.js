
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

export default class TODO extends Component {
    render() {
        return (
            <View >
                <Text> This is the sample TODO application </Text>
            </View>
        );
    }
}


AppRegistry.registerComponent('TODO', () => TODO);
