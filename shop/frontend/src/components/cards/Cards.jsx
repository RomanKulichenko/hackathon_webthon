import React from 'react'
import './cards.css'
import Card from "../card/Card";

let data = [
    {
        id:0,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:1,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:2,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:3,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:4,
        img: 'https://cutt.ly/9jGrVUJ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:5,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:6,
        img: 'https://cutt.ly/ZjGrGpd',
        productDescription: 'Салат Премия с морской капустой',
        weight: 432,
        price: 12.20
    },
    {
        id:7,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:8,
        img: 'https://cutt.ly/9jGrVUJ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:9,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 1000,
        price: 1000
    },
    {
        id:10,
        img: 'https://cutt.ly/zjGeLVQ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 450,
        price: 43.44
    },
    {
        id:11,
        img: 'https://cutt.ly/9jGrVUJ',
        productDescription: 'Салат Премия с морской капустой',
        weight: 233,
        price: 100.50
    },

]

const Cards = () => {
    return (
        <ul className={'cards'}>
            {
                data.map(product => {
                    return <Card product={product} />
                })
            }
        </ul>
    )
}

export default Cards
