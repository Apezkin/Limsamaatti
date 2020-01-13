import React from 'react';
import ItemList from "./ItemList"

class Menu extends React.Component {
    state = {
        itemList: [{
            name: "Megis",
            price: 1,
            inventory: 5,
            id: 0,
        },{
            name: "Battery",
            price: 2,
            inventory: 7,
            id: 1,
        }],
    }

    constructor(props) {
        super(props)

        this.buy = this.buy.bind(this);
    }

    buy(x) {
        console.log(x);
        const newList = this.state.itemList.map(item => {
            if (item.id === x) {
                if (item.inventory > 0) {
                    item.inventory = item.inventory - 1
                }
            }
            return item
        });
        this.setState({
            itemList: newList
        })
    }

    render() {
        return (
            <div className="app">
            <h1 className="title">Limsamaatti</h1>
            <ItemList itemList={this.state.itemList}
            buy={this.buy}/>
            <div className="user-menu"></div>
            <h3>Yhteensä {this.state.priceTotal}€</h3>
            </div>
        );
    }
}

export default Menu;
