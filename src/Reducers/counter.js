import {INCREMENT , DECREMENT} from '../Actions/ActionTypes'

const initialState = {
    number: 0
};

export default function counter(state = initialState, action){
    switch(action.type){
        case INCREMENT:{
            return{
                ...state,
                number: state.number + 1,
            }
        };
        case DECREMENT:{
            return{
                ...state,
                number: state.number -1,
            }
        };
        default:
            return state;
    }
}