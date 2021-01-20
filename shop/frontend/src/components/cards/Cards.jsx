import React from 'react'
import './cards.css'
import Card from "../card/Card";

const Cards = () => {
    return (
        <ul className={'product-list with-filter '}>
            <Card /> // map
        </ul>
    )
}

export default Cards
