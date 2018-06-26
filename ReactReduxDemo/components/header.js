import React from 'react';
import {connect} from 'react-redux';

class HeaderComponent extends React.Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
               Item Counts: {this.props.users.length}
            </div>
        )
    }
}
const mapStateToProps = (store) =>{
    return {
        users: store.users
    }
} 
export default connect(mapStateToProps)(HeaderComponent);