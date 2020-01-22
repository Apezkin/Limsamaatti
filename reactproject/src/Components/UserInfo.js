import React from "react";

function UserInfo(props) {
    return (
        <div className="user-menu">
            <div className="red-bg">
                <h3>User {props.user}</h3>
                <div className="saldo-info">
                    <h4>Saldo {props.saldo}€</h4>
                    <button className="saldo-button" onClick={() => props.addMoney(0.5)}>+0.5€</button>
                    <button className="saldo-button" onClick={() => props.addMoney(1)}>+1€</button>
                </div>
                <div className="saldo-info">
                    <h6>Max debt -20€</h6>
                    <button className="saldo-button" onClick={() => props.addMoney(2)}>+2€</button>
                    <button className="saldo-button" onClick={() => props.addMoney(5)}>+5€</button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;