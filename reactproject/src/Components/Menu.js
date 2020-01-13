import React from 'react';
import ItemList from "./ItemList"

class Menu extends React.Component {
    state = {
        itemList: [{
            name: "Megis",
            price: 1,
            inventory: 5,
            count: 0,
            id: 0,
            total: 0
        },{
            name: "Battery",
            price: 2,
            inventory: 7,
            count: 0,
            id: 1,
            total: 0
        }],
        priceTotal: 0,
    }

    constructor(props) {
        super(props)

        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
    }

    plusOne = (x) => {
        const newList = this.state.itemList.map(item => {
            if (item.id === x) {
                if (item.count < item.inventory) {
                    item.count = item.count + 1
                    item.total = item.count * item.price
                }
            }
            return item
        })
        let t = 0;
        const totalPrice = newList.map(item => {
            t = parseInt(t) + parseInt(item.total);
            return t;
        })
        this.setState({
            itemList: newList,
            priceTotal: totalPrice
        })
    }

    minusOne = (x) => {
        const newList = this.state.itemList.map(item => {
            if (item.id === x) {
                if (item.count > 0) {
                    item.count = item.count - 1
                }
            }
            return item
        })
        this.setState({
            itemList: newList,
        })
        if (newList[x].count > 0 && this.state.priceTotal > 0) {
            this.setState({
                total: this.state.total - parseInt(newList[x].price)
            })
        };
    }

    render() {
        return (
            <div className="app">
            <h1 className="title">Limsamaatti</h1>
            <ItemList itemList={this.state.itemList}
            plusOne={this.plusOne}
            minusOne={this.minusOne}/>
            <div className="user-menu"></div>
            <h3>Yhteensä {this.state.priceTotal}€</h3>
            </div>
        );
    }
}

export default Menu;
