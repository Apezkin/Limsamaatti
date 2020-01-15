import React from "react";

function UserInfo(props) {
    return (
        <div className="user-menu">
            <div className="red-bg">
                <h3>User {props.user}</h3>
                <div className="saldo-info">
                    <h4>Saldo {props.saldo}€</h4>
                    <button className="saldo-button" onClick={() => props.addMoney(1)}>+1€</button>
                    <button className="saldo-button" onClick={() => props.addMoney(2.5)}>+2.5€</button>
                </div>
                <h6>Max debt -20€</h6>
            </div>
        </div>
    );
}

export default UserInfo;