import React from "react";
import Item from "./Item";

function ItemList(props) {
    return(
        <div className="list-bg">
            {props.itemList.map(item => (
                <Item key={item._id} id={item.id}
                name={item.name} price={item.price} inventory={item.inventory}
                buy={props.buy}/>
            ))}
        </div>
    );
}

export default ItemList;