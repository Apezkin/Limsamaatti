import React from 'react';
import ItemList from "./ItemList"

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
        saldo: 10
    }

    constructor(props) {
        super(props)

        this.buy = this.buy.bind(this);
    }

    buy(x) {
        console.log(x);
        //Ensin testataan onko tarpeeksi velkavaraa ja onko inventaariossa juomia
        if (this.state.saldo > -20 && this.state.itemList[x].inventory > 0) {
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

    render() {
        return (
            <div className="app">
                <h1 className="title">Limsamaatti</h1>
                <button className="logout-button">Kirjaudu ulos</button>
                <ItemList itemList={this.state.itemList}
                buy={this.buy}/>
                <div className="right-menu">
                    <div className="user-menu">
                        <h3>Käyttäjä Teekkari Nönnönnöö</h3>
                        <h4>Saldo {this.state.saldo}€</h4>
                        <h6>Max velka -20€</h6>
                    </div>
                    <div className="feedback">
                        <h3>Palaute</h3>
                        <textarea className="feedback-field" maxLength="250" rows="4" cols="50"></textarea>
                        <button>Palauta</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
