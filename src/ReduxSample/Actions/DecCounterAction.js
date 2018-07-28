import { DEC_COUNTER } from '../Constants/CounterConstants';

export const DecAction = () => {
    console.log('DEC Action');
    return {
        type:DEC_COUNTER,
        payload: 1,
    };
};