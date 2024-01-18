import React from "react";
import ShopCard from "./ShopCard";
import './styleShopCard.css'

// формируем отрисовку всех товаров (список)
const CardsView = ({ cards }) => (
    <div className="container-shop-card">
        {cards.map((card, index) => (
            <ShopCard key={index} card={card}/>
        ))}
    </div>
);

export default CardsView;