import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import App from './App';

const defaultState = {
    page: 0,
    language: "rus",
    sound: true,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_PAGE":
            return {...state, page: action.payload}
        case "TOGGLE_LANGUAGE":
            return {...state, language: state.language === "rus" ? "eng" : "rus"}
        case "TOGGLE_SOUND":
            return {...state, sound: state.sound === true ? false : true}
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
