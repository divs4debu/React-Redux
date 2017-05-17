import React, {Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';


export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View >
                    <Text> {this.props.text} </Text>
                    <Button title="Change" onPress={() => this.props.onPress() }/>
            </View>
        );
    }

}
