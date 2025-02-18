    import { applyMiddleware,  combineReducers,  createStore } from "redux";
    import { persistStore } from "redux-persist";
    import { thunk }  from "redux-thunk";
    import authReducer from './Auth.js';
    import generalReducer from './General.js'
    import persistedCartReducer from './computed.js'

    const rootReducer = combineReducers({
        auth: authReducer,
        general:generalReducer,
        bag:persistedCartReducer
    });


    const store = createStore(rootReducer , applyMiddleware( thunk));
    const persistor = persistStore(store);
    export { store, persistor };











