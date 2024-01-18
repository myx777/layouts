import React from "react";
import IconSwitch from './IconSwitch';
import CardsView  from './CardsView/CardsView';
import ListView from './ListView/ListView';

//управляет состоянием приложения, хранит список товаров в атрибуте products
export default class Store extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            markupType: 'list',
        };
    }

    handleMarkupType = () => {
        this.setState((prev) => ({ 
            markupType: prev.markupType === 'list' ? 'cards' : 'list',
        }));
    }

    renderProductsView = () => {
        return this.state.markupType === 'list' ? (<ListView cards={this.props.cards}/>) : (<CardsView cards={this.props.cards}/>);
    }

    render() {
        return (
            <div>
            <button onClick={this.handleMarkupType}>
                <IconSwitch icon={this.state.markupType === 'list' ? 'view_list' : 'view_module'}/>
            </button>
            {this.renderProductsView()}
        </div>
        );
    }
}