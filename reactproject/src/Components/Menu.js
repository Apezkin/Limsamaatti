import React from 'react';
import ItemList from "./ItemList"
import UserInfo from "./UserInfo"
import {Link} from "react-router-dom";

class Menu extends React.Component {
    state = {
        itemList: [],
        saldo: Number.parseFloat(10.00).toFixed(2),
        user: "Teekkari Nönnönnöö"
    }

    constructor(props) {
        super(props)

        this.buy = this.buy.bind(this);
        this.addMoney = this.addMoney.bind(this);
    }

    componentDidMount() {
        this.getItems();
    }

    getItems = async () => {
        let data, jsonData;
        data = await fetch(
            "http://localhost:3001/items"
        );

        jsonData = await data.json();
        this.setState({itemList: jsonData});
    }

    buyItem = async (id, inv, itemPrice) => {
        const bodyData = {
            inventory: inv,
            price: itemPrice
        }

        await fetch (
            "http://localhost:3001/items/" + id, {
                method: "PATCH",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(bodyData)
            }
        )
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
                        this.buyItem(item._id, item.inventory, item.price)
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
                <h1 className="title">Limsamaatti</h1>
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
