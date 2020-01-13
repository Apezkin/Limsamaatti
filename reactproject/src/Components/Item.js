import React from "react";
import "../App.css"

function Item(props) {

    return(
        <div className="item-bg">
            <h4>{props.name}</h4>
            <div>
                <h4>Hinta</h4>
                <h4 className="title">{props.price}</h4>
            </div>
            <div>
                <h4>Varastossa</h4>
                <h4 className="title">{props.inventory}</h4>
            </div>
            <button className="buy-button" onClick={() => props.buy(props.id)}>Osta</button>
        </div>
    );
}

export default Item;