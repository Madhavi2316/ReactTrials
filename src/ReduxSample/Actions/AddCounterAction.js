import { ADD_COUNTER } from '../Constants/CounterConstants';

export const AddAction = () => {
    console.log('ADD Action');
    return {
        type:ADD_COUNTER,
        payload: 1,
    };
};

//action creator