import React from "react";

// отрисовка одной карты если списком
const ShopItem = ({ card }) => {
    const { name, price, color, img } = card;

    return (
        <div className="shop-list">
            <img src={img} alt={name}  className="list-card-img"/>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{color}</p>
            </div>
        </div>
    );
}

export default ShopItem;