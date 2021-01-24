import React, {createContext, useContext, useEffect, useState} from 'react'
import './cards.css'
import Card from "../card/Card";
import {Context} from '../../Context.js'

const Cards = () => {

    const [products, setProduct] = useContext(Context);
    return (
        <div className={'cards-wrapper'}>
            <ul className={'cards'}>
                {
                    products.map(product => {
                        return <Card products={product}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Cards
