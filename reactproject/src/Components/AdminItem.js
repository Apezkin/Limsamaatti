import React from "react";
import "../App.css"

class AdminItem extends React.Component {
    state = {
        newPrice: 0,
        newInv: 0
    }

    constructor(props) {
        super(props)

        this.setNewPrice = this.setNewPrice.bind(this);
        this.setNewInv = this.setNewInv.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
    }

    componentDidMount() {
        this.setInfo()
    }

    setInfo() {
        this.setState({
            newPrice: this.props.price,
            newInv: this.props.inventory
        })
    }

    setNewPrice(event) {
        this.setState({
            newPrice: event.target.value
        })
    }

    setNewInv(event) {
        this.setState({
            newInv: event.target.value
        })
    }

    saveInfo(event) {
        event.preventDefault();
        event.target.price.value = ""
        event.target.inv.value = ""

        this.props.saveItem(this.props.id, this.state.newPrice, this.state.newInv)
    }

    render() {
        return(
            <div>
                <form className="item-bg" onSubmit={this.saveInfo}>
                    <h2>{this.props.name}</h2>
                    <div className="center">
                        <h4>Price</h4>
                        <h4 className="title">{this.props.price}€</h4>
                        <label className="set-value">Set value:</label>
                        <input className="item-newinfo" name="price" onChange={this.setNewPrice}></input>
                    </div>
                    <div className="center">
                        <h4>Inventory</h4>
                        <h4 className="title">{this.props.inventory}</h4>
                        <label className="set-value">Set value:</label>
                        <input className="item-newinfo" name="inv" onChange={this.setNewInv}></input>
                    </div>
                    <button className="buy-button" type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default AdminItem;