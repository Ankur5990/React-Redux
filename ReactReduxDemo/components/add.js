import React from 'react';
import {connect} from 'react-redux';
import {setUsers} from '../action/action';

 class AddComponent extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            fname: '',
            lname: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlefNameChange= this.handlefNameChange.bind(this);
        this.handlelNameChange = this.handlelNameChange.bind(this);
    }
    handlefNameChange(event){
        this.setState({
            fname: event.target.value
        })
    }
    handlelNameChange(event){
        this.setState({
            lname: event.target.value
        })
    }
    handleSubmit(event){
        this.props.dispatch(setUsers({fname: this.state.fname, lname: this.state.lname}));
    }
    render(){
        return (
            <div>
                <div> FirstName: <input type="text" value={this.state.fname} onChange={this.handlefNameChange} /> </div>
                <div> LastName: <input type="text" value={this.state.lname} onChange={this.handlelNameChange} /> </div>
                <button onClick={this.handleSubmit}>Save</button>
            </div>
        )}
}

export default connect(() => ({}))(AddComponent)