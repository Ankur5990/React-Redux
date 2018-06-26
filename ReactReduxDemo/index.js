import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {CreateStore, createStore} from 'redux';
import HeaderComponent from './components/header';
import MenusItem from './components/menus';
import ContentArea from './components/content';
import ChangeCounter from './components/changeCounter';
import { rootReducer } from './reducer/reducer';

const store = createStore(rootReducer);

class ReactApp extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <HeaderComponent />
            <MenusItem />
            <ContentArea />
            <ChangeCounter />
        </div>
        );
    }
}

ReactDom.render(
<Provider store={store}>
    <ReactApp />
</Provider>, document.getElementById('reactApp'));