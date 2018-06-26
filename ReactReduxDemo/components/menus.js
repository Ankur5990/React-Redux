import React from 'react';
import ItemListsComponent from './itemlist';
import { changePage } from '../action/action';
import { connect } from 'react-redux';

class MenusItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                <li onClick={() => this.handleListClicks('list')}>Lists</li>
                <li onClick={() => this.handleListClicks('add')}>Add</li>
            </ul>

        )
    }
    handleListClicks(pageName) {
        this.props.dispatch(changePage(pageName));
    }
}

export default connect(() => ({}))(MenusItem);