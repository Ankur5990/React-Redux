import React from 'react';
import {connect} from 'react-redux';

class ItemListsComponent extends React.Component {

    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            UserId
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.users.map((item, index) => {
                        return (<tr key={index}>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                            </tr>);
                   })
                   } 
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (store) =>{
    console.log(store);
    return {
        users: store.users
    }
}

export default connect(mapStateToProps)(ItemListsComponent)