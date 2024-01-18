import React from "react";

// модель отрисовки карточек если не списком
const ShopCard = ( { card }) => {
    const { name, price, color, img } = card;

    return (
        <div className="shop-card">
            <div className="shop-card-wrapper">
                <h3 className="title_shop-card">{name}</h3>
                <p className="color_shop-card">{color}</p>
            </div>

            <img src={img} alt={name} className="shop-card-img"/>
            <p className="price_shop-card">${price}</p>
        </div>
    );
}

export default ShopCard;
