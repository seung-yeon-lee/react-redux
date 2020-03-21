import React,{Component} from 'react';

export default class Button extends Component{
    render(){
        const {onPlus,onMinus, randomColor} = this.props;
        return(
            <div>
                <button onClick={onPlus}>+</button>
                <button onClick={onMinus}>-</button>
                <button onClick={randomColor}>Color</button>
            </div>
        )
    }
}