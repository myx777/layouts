import React from "react";


// Иконка разметки, которая переключает между типами расположения товаров
const IconSwitch = ({ icon, onSwitch }) => {

    return (
        <div onClick={onSwitch}>
            <span className="material-icons">{icon}</span>
        </div>
    )
}

export default IconSwitch;