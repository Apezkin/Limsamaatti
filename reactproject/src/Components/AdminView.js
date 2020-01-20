import React from 'react';
import AdminItemList from "./AdminItemList"
import UserInfo from "./UserInfo"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

class AdminView extends React.Component {
    state = {
        itemList: [],
        money: 0
    }

    constructor(props) {
        super(props)

        if(this.props.currentUser == null) {
            window.location.href="/"
        }

        this.saveItem = this.saveItem.bind(this);
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

    saveItem(itemId, itemPrice, itemInv) {
    
        //Makes a copy of itemList by going through the list, returning each item,
        //except adding one to item's inventory if the ID matches
        const newList = this.state.itemList.map(item => {
            if (item.id === itemId) {
                item.inventory = itemInv
                item.price = itemPrice
                this.buyItem(item._id, item.inventory, item.price);
            }
            return item
        })
        this.setState({
            //Update itemList with newLists items
            itemList: newList
        })
    
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
                <h1 className="mt-5 title">Limsamaatti Admin</h1>
                <div className="menu">
                    <AdminItemList itemList={this.state.itemList}
                    saveItem={this.saveItem}/>
                    <div className="right-menu">
                        <UserInfo user={this.props.currentUser.username} saldo={this.state.money}
                        addMoney={this.addMoney}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminView;
