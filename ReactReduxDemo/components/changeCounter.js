import React from 'react';
import Counter from './counter';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from '../action/action';

class ChangeCounter extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(type){
        if(type === 'increment'){
            this.props.dispatch(incrementCounter());
        }
        if(type === 'decrement'){
            this.props.dispatch(decrementCounter());
        }
    }
    render(){
        return(
            <div>
                <button onClick={() => this.handleClick('increment')}>Increment</button>
                <button onClick={() => this.handleClick('decrement')}>Decrement</button>
                <div>
                    <Counter />
                </div>
            </div>
        )
    }
}

export default connect()(ChangeCounter)