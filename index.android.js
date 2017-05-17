import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Provider from "react-redux/src/components/Provider";
import ContainerApp from './src/Containers/ContainerApp';
import store from './src/Components/store';


export default class TODO extends Component {
    render() {
        return (
            <Provider store={store}>
                <ContainerApp />
            </Provider>
        );
    }

}


AppRegistry.registerComponent('TODO', () => TODO);
