import React,{Component} from 'react'
import Button from './Button';
import * as actions  from '../Actions'
import Result from './Result'
import {connect} from 'react-redux'

class count extends Component{
    RandomColor = () => {
        let array = [];
        const color = Array(3).fill(Math.floor(Math.random() * 55) +200)[0]
        for(let i = 0 ; i < 3; i++){
            array.push(color)
        };

        this.props.HandleSetColors(array)
    }

    render(){
        const color = this.props.color;
        const style = {
            background: `rgb( ${color[0]}, ${color[1]}, ${color[2]})`
        }
        const{number,HandleIncrement,HandleDecrement} = this.props;
        return(
            <div style={style}>
                <Result number={number} />
                <Button onPlus={HandleIncrement}
                        onMinus={HandleDecrement}
                        randomColor={this.RandomColor} />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return{
    number : state.counter.number,
    color: state.ui.color,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        HandleIncrement : () => { dispatch(actions.increment())},
        HandleDecrement : () => { dispatch(actions.decrement())},
        HandleSetColors : (color) => { dispatch(actions.setcolor(color))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(count);