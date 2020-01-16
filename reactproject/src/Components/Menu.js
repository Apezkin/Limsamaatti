import React from 'react';
import ItemList from "./ItemList"
import UserInfo from "./UserInfo"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Menu extends React.Component {
    state = {
        itemList: [],
        money: 0
    }

    constructor(props) {
        super(props)

        if(this.props.currentUser == null) {
            window.location.href="/"
        }

        this.buy = this.buy.bind(this);
        this.addMoney = this.addMoney.bind(this);
    }

    componentDidMount() {
        this.getItems();
        this.setMoney();
    }

    setMoney() {
        this.setState({
            money: parseFloat(this.props.currentUser.userMoney).toFixed(2)
        })
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
        if (this.state.itemList[x].inventory > 0 && this.state.money - this.state.itemList[x].price >= -20) {
            this.setState({
                //Take money
                money: parseFloat(this.state.money - this.state.itemList[x].price).toFixed(2)
            })
            //Makes a copy of itemList by going through the list, returning each item,
            //except substracting one from item's inventory if the ID matches
            const newList = this.state.itemList.map(item => {
                if (item.id === x) {
                    if (item.inventory > 0) {
                        item.inventory = item.inventory - 1
                        this.buyItem(item._id, item.inventory, item.price);
                        this.addMoneyToBackEnd(this.state.money - this.state.itemList[x].price);
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

    addMoneyToBackEnd = async (m) => {
        const bodyData = {
            userMoney: m
        }
        await fetch (
            "http://localhost:3001/users/" + this.props.currentUser._id, {
                method: "PATCH",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(bodyData)
            }
        )
    }

    addMoney(x) {
        this.setState({
            money: parseFloat(parseFloat(this.state.money) + parseFloat(x)).toFixed(2)
        });

        this.addMoneyToBackEnd(parseFloat(this.state.money) + parseFloat(x));
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
                        <UserInfo user={this.props.currentUser.username} saldo={this.state.money}
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
