// import {createStore, combineReducers} from "redux";
// import serviceReducer from "./reducers/serviceReducer";

// const rootReducer = combineReducers({
//     services: serviceReducer,
//     // users: userReducer,
// })

// const store = createStore(rootReducer);

// export default store;


import { createStore, combineReducers } from "redux";
import serviceReducer from "./reducers/serviceReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    services: serviceReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;