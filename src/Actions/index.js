import {INCREMENT,DECREMENT,SET_COLOR} from './ActionTypes';

export function increment(){
    return{
        type:INCREMENT
    }
};

export function decrement(){
    return{
        type: DECREMENT
    }
};

export function setcolor(color){
    return{
        type:SET_COLOR, color
    }
};