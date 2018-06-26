import React from 'react';
import ItemListsComponent from "./itemlist";
import AddComponent from "./add";
import { connect } from 'react-redux';

class ContentArea extends React.Component {
    render(){

        if(this.props.pageName === 'list') {
            return <ItemListsComponent />
        }        
        return < AddComponent />
        
    }
}

const mapStateToProps = (store) => {
    return {
        pageName: store.pageName
    }
}


export default connect(mapStateToProps)(ContentArea);