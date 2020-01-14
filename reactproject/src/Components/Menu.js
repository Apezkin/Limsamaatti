import React from 'react';
import ItemList from "./ItemList"
import UserInfo from "./UserInfo"
import {Link} from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.css';

class Menu extends React.Component {
    state = {
        itemList: [{
            name: "Megis",
            price: 1,
            inventory: 10,
            id: 0,
        },{
            name: "Battery",
            price: 2.5,
            inventory: 10,
            id: 1,
        },{
            name: "Cola",
            price: 5,
            inventory: 10,
            id: 2
        }],
        saldo: Number.parseFloat(10.00).toFixed(2),
        user: "Teekkari Nönnönnöö"
    }

    constructor(props) {
        super(props)

        this.buy = this.buy.bind(this);
        this.addMoney = this.addMoney.bind(this);
    }


    buy(x) {
        //First check if there isn't too much debt and there are still drinks
        if (this.state.itemList[x].inventory > 0 && this.state.saldo - this.state.itemList[x].price >= -20) {
            this.setState({
                //Take money
                saldo: Number.parseFloat(this.state.saldo - this.state.itemList[x].price).toFixed(2)
            })
            //Makes a copy of itemList by going through the list, returning each item,
            //except substracting one from item's inventory if the ID matches
            const newList = this.state.itemList.map(item => {
                if (item.id === x) {
                    if (item.inventory > 0) {
                        item.inventory = item.inventory - 1
                    }
                }
                return item
            })
            this.setState({
                //Update itemList with newLists items
                itemList: newList
            })
        }
    }

    addMoney(x) {
        this.setState({
            saldo: Number.parseFloat(parseFloat(this.state.saldo) + parseFloat(x)).toFixed(2)
        })

    }

    render() {
        return (
            <div className="app">
                <Link to="/">
                    <button className="logout-button">Logout</button>
                </Link>
                <h1 className="mt-5 title">Limsamaatti</h1>
                <div className="menu">
                    <ItemList itemList={this.state.itemList}
                    buy={this.buy}/>
                    <div className="right-menu">
                        <UserInfo user={this.state.user} saldo={this.state.saldo}
                        addMoney={this.addMoney}/>
                        <div className="feedback">
                            <div className="red-bg">
                                <h3>Feedback</h3>
                                <textarea className="feedback-field" maxLength="200" rows="5" cols="35"></textarea>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
