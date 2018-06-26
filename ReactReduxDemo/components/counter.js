import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => {
    console.log(props);
    return (
        <div>
            Counter value is : {props.counter}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter);