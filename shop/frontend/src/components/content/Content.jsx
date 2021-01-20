import React from 'react'
import './content.css'
import Cards from "../cards/Cards";

const Content = () => {
    return (
        <div className={'container'}>
            <div className={'content'}>
                <div className={'category-filter__wrapper category-filter__column'}></div> // SideBar
                <div className="product-list__wrapper">
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Content
