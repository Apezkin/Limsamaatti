import React from "react";
import AdminItem from "./AdminItem";

function AdminItemList(props) {
    return(
        <div className="list-bg">
            {props.itemList.map(item => (
                <AdminItem key={item._id} id={item.id}
                name={item.name} price={item.price} inventory={item.inventory}
                saveItem={props.saveItem}/>
            ))}
        </div>
    );
}

export default AdminItemList;