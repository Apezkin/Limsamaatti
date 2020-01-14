import React from 'react';
import ItemList from "./ItemList"
import UserInfo from "./UserInfo"
import {Link} from "react-router-dom";

class Menu extends React.Component {
    state = {
        itemList: [{
            name: "Megis",
            price: 1,
            inventory: 10,
            id: 0,
        },{
            name: "Battery",
            price: 2,
            inventory: 10,
            id: 1,
        },{
            name: "Cola",
            price: 5,
            inventory: 10,
            id: 2
        }],
        saldo: 10,
        user: "Teekkari Nönnönnöö"
    }

    constructor(props) {
        super(props)

        this.buy = this.buy.bind(this);
        this.addMoney = this.addMoney.bind(this);
    }


    buy(x) {
        console.log(x);
        //Ensin testataan onko tarpeeksi velkavaraa ja onko inventaariossa juomia
        if (this.state.itemList[x].inventory > 0 && this.state.saldo - this.state.itemList[x].price >= -20) {
            this.setState({
                //Vähennetään saldoa
                saldo: this.state.saldo - this.state.itemList[x].price
            })
            //Luodaan kopio itemLististä käymällä jokainen itemListin objecti läpi ja
            //vähentämällä inventaariosta yksi, jos juoman ID vastaa klikatun
            //juoman ostonappia
            const newList = this.state.itemList.map(item => {
                if (item.id === x) {
                    if (item.inventory > 0) {
                        item.inventory = item.inventory - 1
                    }
                }
                return item
            })
            this.setState({
                //Päivitetään itemList kopion perusteella
                itemList: newList
            })
        }
    }

    addMoney(x) {
        console.log("money")
        this.setState({
            saldo: this.state.saldo + x
        })

    }

    render() {
        return (
            <div className="app">
                <Link to="/">
                    <button className="logout-button">Kirjaudu ulos</button>
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
                                <h3>Palaute</h3>
                                <textarea className="feedback-field" maxLength="200" rows="5" cols="35"></textarea>
                                <button>Tallenna</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
