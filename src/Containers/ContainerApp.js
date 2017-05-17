import {connect} from 'react-redux';
import {App} from '../Components/App';
import click from '../actions/actions'


const mapStateToProp = (state) => {
    return {
        text: state.text
    }
};

const mapDispatchToProp = (dispatch) => {
    return {
        onPress: () => {
            dispatch(click)
        }
    }
};

const ContainerApp = connect(mapStateToProp, mapDispatchToProp)(App);

export default  ContainerApp;