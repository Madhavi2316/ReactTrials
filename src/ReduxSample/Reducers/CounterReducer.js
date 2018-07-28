import { ADD_COUNTER, DEC_COUNTER } from '../Constants/CounterConstants';

import initialState from './initialState';

const CounterReducer = (state=initialState, action) => {
    console.log('reducer: '+JSON.stringify(action));
    const newState= Object.assign({},state);

    switch(action.type){
        case ADD_COUNTER:
            newState.count = newState.count + action.payload
            return newState;

        case DEC_COUNTER:
            newState.count = newState.count - action.payload
            return newState;

        default:
        return state;
    }

};

export default CounterReducer;