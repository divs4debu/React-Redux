const initialState = {
    text: 'This is the sample TODO application'
};

export default AppReducer = (state = initialState, action) => {
    if (action.type === 'TEXT_CHANGED') {
        state = {
            ...state,
            text: action.payload
        };
        console.log(state.text);
    }

    return state;
}