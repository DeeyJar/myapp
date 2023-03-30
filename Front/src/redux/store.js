import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware=[thunk];

const composeEnhancers = composeWithDevTools({

})

const store= createStore(combineReducers,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
    )
store.subscribe(()=>{
    //console.log('state update')
    
})
export default store;